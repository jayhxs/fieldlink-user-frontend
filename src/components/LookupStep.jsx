import { useState } from "react";

function LookupStep({
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

  const canSearch = trimmedName && normalizedLookupPhone && !lookupLoading;

  const handleSearch = async () => {
    if (!canSearch) return;

    setLookupLoading(true);
    setLookupSearched(true);
    setLookupError("");
    setLookupResults([]);

    try {
      const params = new URLSearchParams({
        user_name: trimmedName,
        user_phone: normalizedLookupPhone,
        zone_id: String(zoneId),
      });

      const response = await fetch(`/api/inquiries/search?${params.toString()}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("조회 실패 상태코드:", response.status);
        console.error("조회 실패 응답본문:", errorText);
        throw new Error(`조회 실패: ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setLookupResults(data);
      } else {
        setLookupResults([]);
      }
    } catch (error) {
      console.error("접수 조회 오류:", error);
      setLookupError(
        "접수 내역 조회에 실패했습니다. 네트워크 상태 또는 서버 연결 상태를 확인해주세요."
      );
    } finally {
      setLookupLoading(false);
    }
  };

  const hasResults = lookupSearched && lookupResults.length > 0;
  const isNotFound =
    lookupSearched && !lookupLoading && !lookupError && lookupResults.length === 0;

  return (
    <>
      <p style={{ marginBottom: "8px", color: "#555", fontWeight: "bold" }}>
        접수 조회
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
        현재 선택 경기장: {selectedStadium}
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
        접수 시 입력한 이름과 전화번호로 접수 내역을 확인할 수 있습니다.
      </p>

      <div style={{ textAlign: "left", marginBottom: "14px" }}>
        <p style={{ marginBottom: "8px", color: "#333", fontWeight: "bold" }}>
          이름
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

      <div style={{ textAlign: "left", marginBottom: "16px" }}>
        <p style={{ marginBottom: "8px", color: "#333", fontWeight: "bold" }}>
          전화번호
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
          backgroundColor: canSearch ? "#2563eb" : "#cbd5e1",
          color: "white",
          fontSize: "16px",
          fontFamily: "inherit",
          cursor: canSearch ? "pointer" : "not-allowed",
        }}
      >
        {lookupLoading ? "조회 중..." : "조회하기"}
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
          <p style={{ marginTop: 0, color: "#333", fontWeight: "bold" }}>
            조회 결과 {lookupResults.length}건
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
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
                  접수 내역 {index + 1}
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
                  상태: {item.status}
                  <br />
                  문의 내용: {item.original_text}
                  <br />
                  접수 시간: {item.created_at || "정보 없음"}
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
          입력한 정보로 조회되는 접수 내역이 없습니다.
          <br />
          경기장 선택 또는 이름과 전화번호를 다시 한 번 확인해주세요.
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

      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
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
            cursor: lookupLoading ? "not-allowed" : "pointer",
          }}
        >
          이전
        </button>

        <button
          onClick={resetForm}
          disabled={lookupLoading}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: lookupLoading ? "#cbd5e1" : "#2563eb",
            color: "white",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: lookupLoading ? "not-allowed" : "pointer",
          }}
        >
          처음으로
        </button>
      </div>
    </>
  );
}

export default LookupStep;