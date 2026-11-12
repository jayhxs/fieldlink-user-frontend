import { useState } from "react";

import {
  getStadiumLabel,
  getTranslation,
} from "../translations";

function LookupStep({
  selectedLanguage,
  lookupName,
  setLookupName,
  lookupPhone,
  setLookupPhone,
  lookupSearched,
  setLookupSearched,
  selectedStadium,
  setStep,
  resetForm,
}) {
  const [lookupResults, setLookupResults] = useState([]);
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState("");

  const text = getTranslation(selectedLanguage);

  const normalizePhone = (phone) => {
    return phone.replace(/[^0-9]/g, "");
  };

  const zoneIdMap = {
    "서울종합운동장 야구장": 1,
    "고척 스카이돔": 2,
    "수원 케이티 위즈 파크": 3,
    "인천 SSG 랜더스필드": 4,
    "대전 한화생명 볼파크": 5,
    "대구 삼성 라이온즈 파크": 6,
    "광주-기아 챔피언스 필드": 7,
    창원NC파크: 8,
    "사직 야구장": 9,
  };

  const trimmedName = lookupName.trim();
  const normalizedLookupPhone = normalizePhone(lookupPhone);
  const zoneId = zoneIdMap[selectedStadium];

  const canSearch =
    trimmedName && normalizedLookupPhone && !lookupLoading;

  const getStatusLabel = (status) => {
    if (status === "접수됨") {
      return text.lookup.statusReceived;
    }

    if (status === "처리 중" || status === "처리중") {
      return text.lookup.statusProcessing;
    }

    if (status === "처리 완료" || status === "완료") {
      return text.lookup.statusComplete;
    }

    return status;
  };

  const handleSearch = async () => {
    if (!canSearch) return;

    setLookupLoading(true);
    setLookupSearched(true);
    setLookupError("");
    setLookupResults([]);

    let timeoutId;

    try {
      const params = new URLSearchParams({
        user_name: trimmedName,
        user_phone: normalizedLookupPhone,
        zone_id: String(zoneId),
      });

      const controller = new AbortController();

      timeoutId = setTimeout(() => {
        controller.abort();
      }, 30000);

      const response = await fetch(
        `/api/inquiries/search?${params.toString()}`,
        {
          headers: {
            "ngrok-skip-browser-warning": "69420",
            Accept: "application/json",
          },
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      const responseText = await response.text();

      console.log("조회 응답 상태코드:", response.status);
      console.log(
        "조회 응답 Content-Type:",
        response.headers.get("content-type")
      );
      console.log("조회 응답 본문:", responseText);

      if (!response.ok) {
        throw new Error(`조회 실패: ${response.status}`);
      }

      let data;

      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("JSON 파싱 실패:", parseError);
        throw new Error("조회 응답이 JSON 형식이 아닙니다.");
      }

      if (Array.isArray(data)) {
        setLookupResults(data);
      } else {
        setLookupResults([]);
      }
    } catch (error) {
      console.error("접수 내역 조회 오류:", error);

      if (!navigator.onLine) {
        setLookupError(text.lookup.networkError);
      } else if (error.name === "AbortError") {
        setLookupError(text.lookup.timeoutError);
      } else {
        setLookupError(text.lookup.serverError);
      }
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setLookupLoading(false);
    }
  };

  const hasResults =
    lookupSearched && lookupResults.length > 0;

  const isNotFound =
    lookupSearched &&
    !lookupLoading &&
    !lookupError &&
    lookupResults.length === 0;

  return (
    <>
      <p
        style={{
          marginBottom: "8px",
          color: "#555",
          fontWeight: "bold",
        }}
      >
        {text.lookup.title}
      </p>

      <p
        style={{
          marginBottom: "8px",
          color: "#777",
          fontSize: "14px",
          lineHeight: "1.5",
          fontFamily: "inherit",
        }}
      >
        {text.lookup.currentStadium}:{" "}
        {getStadiumLabel(
          selectedStadium,
          selectedLanguage
        )}
      </p>

      <p
        style={{
          marginBottom: "20px",
          color: "#777",
          fontSize: "13px",
          lineHeight: "1.5",
          fontFamily: "inherit",
        }}
      >
        {text.lookup.description}
      </p>

      <div
        style={{
          textAlign: "left",
          marginBottom: "14px",
        }}
      >
        <p
          style={{
            marginBottom: "8px",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {text.lookup.name}
        </p>

        <input
          type="text"
          value={lookupName}
          onChange={(e) => {
            setLookupName(e.target.value);
            setLookupSearched(false);
            setLookupResults([]);
            setLookupError("");
          }}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
            fontSize: "13px",
            fontFamily: "inherit",
            boxSizing: "border-box",
            color: "#111",
          }}
        />
      </div>

      <div
        style={{
          textAlign: "left",
          marginBottom: "16px",
        }}
      >
        <p
          style={{
            marginBottom: "8px",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {text.lookup.phone}
        </p>

        <input
          type="tel"
          value={lookupPhone}
          onChange={(e) => {
            setLookupPhone(e.target.value);
            setLookupSearched(false);
            setLookupResults([]);
            setLookupError("");
          }}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
            fontSize: "13px",
            fontFamily: "inherit",
            boxSizing: "border-box",
            color: "#111",
          }}
        />
      </div>

      <button
        onClick={handleSearch}
        disabled={!canSearch}
        style={{
          marginTop: "4px",
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: canSearch
            ? "#2563eb"
            : "#cbd5e1",
          color: "white",
          fontSize: "16px",
          fontFamily: "inherit",
          cursor: canSearch
            ? "pointer"
            : "not-allowed",
        }}
      >
        {lookupLoading
          ? text.lookup.searching
          : text.lookup.search}
      </button>

      {hasResults && (
        <div
          style={{
            textAlign: "left",
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
          }}
        >
          <p
            style={{
              marginTop: 0,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            {text.lookup.result} {lookupResults.length}
            {text.lookup.count}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {lookupResults.map((item, index) => (
              <div
                key={item.id || index}
                style={{
                  padding: "14px",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  border: "1px solid #e5e7eb",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px 0",
                    color: "#333",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "inherit",
                  }}
                >
                  {text.lookup.item} {index + 1}
                </p>

                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    fontSize: "13px",
                    lineHeight: "1.6",
                    fontFamily: "inherit",
                  }}
                >
                  {text.lookup.status}:{" "}
                  {getStatusLabel(item.status)}
                  <br />

                  {text.lookup.inquiryText}:{" "}
                  {item.original_text}
                  <br />

                  {text.lookup.createdAt}:{" "}
                  {item.created_at ||
                    text.lookup.noInfo}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {isNotFound && (
        <div
          style={{
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "#fff7ed",
            borderRadius: "12px",
            border: "1px solid #fed7aa",
            color: "#9a3412",
            fontSize: "13px",
            fontFamily: "inherit",
            lineHeight: "1.5",
          }}
        >
          {text.lookup.notFound}
          <br />
          {text.lookup.checkAgain}
        </div>
      )}

      {lookupError && (
        <div
          style={{
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "#fff7ed",
            borderRadius: "12px",
            border: "1px solid #fed7aa",
            color: "#9a3412",
            fontSize: "13px",
            fontFamily: "inherit",
            lineHeight: "1.5",
          }}
        >
          {lookupError}
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "24px",
        }}
      >
        <button
          onClick={() => setStep("service")}
          disabled={lookupLoading}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            backgroundColor: "#ffffff",
            color: "#111",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: lookupLoading
              ? "not-allowed"
              : "pointer",
          }}
        >
          {text.lookup.previous}
        </button>

        <button
          onClick={resetForm}
          disabled={lookupLoading}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: lookupLoading
              ? "#cbd5e1"
              : "#2563eb",
            color: "white",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: lookupLoading
              ? "not-allowed"
              : "pointer",
          }}
        >
          {text.lookup.home}
        </button>
      </div>
    </>
  );
}

export default LookupStep;