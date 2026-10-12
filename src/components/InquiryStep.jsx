import { useState } from "react";

function InquiryStep({
  selectedStadium,
  userName,
  setUserName,
  userPhone,
  setUserPhone,
  inquiryText,
  setInquiryText,
  selectedImage,
  setSelectedImage,
  analysisError,
  clearAnalysisError,
  isAnalyzing,
  setStep,
}) {
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [inquiryError, setInquiryError] = useState("");

  const canGoNext =
    userName.trim() &&
    userPhone.trim() &&
    inquiryText.trim() &&
    !isAnalyzing;

  const validateName = () => {
    const trimmedName = userName.trim();

    if (!trimmedName) {
      return "이름을 입력해주세요.";
    }

    if (trimmedName.length < 2) {
      return "이름은 2자 이상 입력해주세요.";
    }

    if (trimmedName.length > 30) {
      return "이름은 30자 이하로 입력해주세요.";
    }

    // 한글, 영문, 공백만 허용
    // 단독 자음/모음은 허용되지 않음
    if (!/^[가-힣a-zA-Z\s]+$/.test(trimmedName)) {
      return "이름에는 한글, 영문, 공백만 입력할 수 있습니다.";
    }

    // 같은 문자만 반복한 이름 차단
    const compactName = trimmedName.replace(/\s/g, "");

    if (/^(.)\1{2,}$/u.test(compactName)) {
      return "올바른 이름을 입력해주세요.";
    }

    return "";
  };

  const validatePhone = () => {
    const normalizedPhone = userPhone.replace(/[^0-9]/g, "");

    if (!normalizedPhone) {
      return "전화번호를 입력해주세요.";
    }

    // 010으로 시작하는 휴대전화 번호 11자리
    if (!/^010\d{8}$/.test(normalizedPhone)) {
      return "010으로 시작하는 휴대전화 번호 11자리를 입력해주세요.";
    }

    return "";
  };

  const validateInquiryText = () => {
    const trimmedText = inquiryText.trim();
    const compactText = trimmedText.replace(/\s/g, "");

    if (!trimmedText) {
      return "문의 내용을 입력해주세요.";
    }

    // 숫자로만 구성된 경우
    if (/^\d+$/.test(compactText)) {
      return "문의 내용을 이해하기 어렵습니다. 발생한 상황을 조금 더 구체적으로 입력해주세요.";
    }

    // 영문 알파벳만 무작위로 입력한 것으로 보이는 경우
    if (/^[a-zA-Z]+$/.test(compactText)) {
      return "문의 내용을 이해하기 어렵습니다. 발생한 상황을 조금 더 구체적으로 입력해주세요.";
    }

    // 특수문자로만 구성된 경우
    if (/^[^가-힣a-zA-Z0-9]+$/.test(compactText)) {
      return "문의 내용을 이해하기 어렵습니다. 발생한 상황을 조금 더 구체적으로 입력해주세요.";
    }

    // 같은 문자나 짧은 표현이 반복되는 경우
    if (/^(.)\1{2,}$/.test(compactText)) {
      return "문의 내용을 이해하기 어렵습니다. 발생한 상황을 조금 더 구체적으로 입력해주세요.";
    }

    return "";
  };

  const handleGoNext = () => {
    if (isAnalyzing) {
      return;
    }

    const nameValidationError = validateName();
    const phoneValidationError = validatePhone();
    const inquiryValidationError = validateInquiryText();

    setNameError(nameValidationError);
    setPhoneError(phoneValidationError);
    setInquiryError(inquiryValidationError);

    if (
      nameValidationError ||
      phoneValidationError ||
      inquiryValidationError
    ) {
      return;
    }

    setUserName(userName.trim());
    setNameError("");
    setPhoneError("");
    setInquiryError("");

    if (analysisError) {
      clearAnalysisError();
    }

    setStep("followup");
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);

    if (nameError) {
      setNameError("");
    }
  };

  const handlePhoneChange = (event) => {
    setUserPhone(event.target.value);

    if (phoneError) {
      setPhoneError("");
    }
  };

  const handleInquiryTextChange = (event) => {
    setInquiryText(event.target.value);

    if (inquiryError) {
      setInquiryError("");
    }

    if (analysisError) {
      clearAnalysisError();
    }
  };

  const visibleInquiryError =
    inquiryError || analysisError;

  return (
    <>
      <p style={{ marginBottom: "8px", color: "#555", fontWeight: "bold" }}>
        문의·불편사항 접수
      </p>

      <p
        style={{
          marginBottom: "16px",
          color: "#777",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        현재 선택 경기장: {selectedStadium}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "10px",
          textAlign: "left",
          marginBottom: "20px",
          padding: "14px",
          borderRadius: "12px",
          backgroundColor: "#fff7ed",
          border: "1px solid #fed7aa",
        }}
      >
        <span
          style={{
            fontSize: "18px",
            lineHeight: "1.4",
            flexShrink: 0,
          }}
        >
          ⚠
        </span>

        <div
          style={{
            color: "#9a3412",
            fontSize: "13px",
            lineHeight: "1.6",
          }}
        >
          <p style={{ margin: "0 0 4px 0", fontWeight: "bold" }}>
            정확한 현장 대응을 위해 실제 정보를 입력해주세요.
          </p>

          <p style={{ margin: 0 }}>
            이름, 전화번호 및 문의 내용에 허위 정보가 포함되거나 장난성 신고로
            판단될 경우 접수 처리에 제한이 있거나 법적 책임이 발생할 수
            있습니다.
          </p>
        </div>
      </div>

      <div style={{ textAlign: "left", marginBottom: "14px" }}>
        <p style={{ marginBottom: "8px", color: "#333", fontWeight: "bold" }}>
          이름
        </p>

        <input
          type="text"
          value={userName}
          onChange={handleNameChange}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: nameError
              ? "1px solid #f87171"
              : "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
            fontSize: "13px",
            fontFamily: "inherit",
            boxSizing: "border-box",
            color: "#111",
          }}
        />

        {nameError && (
          <div
            style={{
              marginTop: "8px",
              padding: "10px 12px",
              borderRadius: "10px",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#b91c1c",
              fontSize: "13px",
              lineHeight: "1.5",
            }}
          >
            {nameError}
          </div>
        )}
      </div>

      <div style={{ textAlign: "left", marginBottom: "14px" }}>
        <p style={{ marginBottom: "8px", color: "#333", fontWeight: "bold" }}>
          전화번호
        </p>

        <input
          type="tel"
          value={userPhone}
          onChange={handlePhoneChange}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: phoneError
              ? "1px solid #f87171"
              : "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
            fontSize: "13px",
            fontFamily: "inherit",
            boxSizing: "border-box",
            color: "#111",
          }}
        />

        {phoneError && (
          <div
            style={{
              marginTop: "8px",
              padding: "10px 12px",
              borderRadius: "10px",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#b91c1c",
              fontSize: "13px",
              lineHeight: "1.5",
            }}
          >
            {phoneError}
          </div>
        )}
      </div>

      <div style={{ textAlign: "left", marginBottom: "14px" }}>
        <p style={{ marginBottom: "8px", color: "#333", fontWeight: "bold" }}>
          문의 내용
        </p>

        <textarea
          value={inquiryText}
          onChange={handleInquiryTextChange}
          placeholder={`언제, 어디서, 어떤 문제가 발생하였는지 자유롭게 작성해주세요.
예: 현재 3루 내야 2층 화장실에 휴지가 부족합니다.`}
          style={{
            width: "100%",
            minHeight: "130px",
            padding: "14px",
            borderRadius: "12px",
            border: visibleInquiryError
              ? "1px solid #f87171"
              : "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
            fontSize: "13px",
            fontFamily: "inherit",
            resize: "none",
            boxSizing: "border-box",
            color: "#111",
            lineHeight: "1.5",
          }}
        />

        {visibleInquiryError && (
          <div
            style={{
              marginTop: "8px",
              padding: "10px 12px",
              borderRadius: "10px",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#b91c1c",
              fontSize: "13px",
              lineHeight: "1.5",
            }}
          >
            {visibleInquiryError}
          </div>
        )}
      </div>

      <div style={{ textAlign: "left", marginBottom: "18px" }}>
        <p style={{ marginBottom: "8px", color: "#333", fontWeight: "bold" }}>
          사진 첨부
        </p>

        <label
          htmlFor="imageUpload"
          style={{
            display: "inline-block",
            padding: "10px 14px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            backgroundColor: "#ffffff",
            color: "#111",
            fontSize: "13px",
            fontFamily: "inherit",
            cursor: "pointer",
          }}
        >
          사진 선택
        </label>

        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedImage(e.target.files[0] || null)}
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            opacity: 0,
            pointerEvents: "none",
          }}
        />

        <p
          style={{
            marginTop: "8px",
            color: "#777",
            fontSize: "13px",
            lineHeight: "1.5",
          }}
        >
          사진은 선택사항입니다.
        </p>

        {selectedImage ? (
          <div
            style={{
              marginTop: "8px",
              padding: "10px 12px",
              borderRadius: "10px",
              backgroundColor: "#eff6ff",
              border: "1px solid #bfdbfe",
              color: "#1e3a8a",
              fontSize: "13px",
              lineHeight: "1.5",
            }}
          >
            첨부된 파일: {selectedImage.name}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              style={{
                marginLeft: "8px",
                padding: "4px 8px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#dbeafe",
                color: "#1e3a8a",
                fontSize: "12px",
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              취소
            </button>
          </div>
        ) : (
          <p
            style={{
              marginTop: "8px",
              color: "#777",
              fontSize: "13px",
              lineHeight: "1.5",
            }}
          >
            첨부된 사진이 없습니다.
          </p>
        )}
      </div>

      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
        <button
          type="button"
          onClick={() => setStep("service")}
          disabled={isAnalyzing}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            backgroundColor: "#ffffff",
            color: "#111",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: isAnalyzing ? "not-allowed" : "pointer",
          }}
        >
          이전
        </button>

        <button
          type="button"
          onClick={handleGoNext}
          disabled={!canGoNext}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: canGoNext ? "#2563eb" : "#cbd5e1",
            color: "white",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: canGoNext ? "pointer" : "not-allowed",
          }}
        >
          {isAnalyzing ? "분석 중..." : "다음"}
        </button>
      </div>
    </>
  );
}

export default InquiryStep;