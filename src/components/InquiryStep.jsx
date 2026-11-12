import { useState } from "react";

import {
  getStadiumLabel,
  getTranslation,
} from "../translations";

function InquiryStep({
  selectedLanguage,
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

  const text = getTranslation(selectedLanguage);

  const canGoNext =
    userName.trim() &&
    userPhone.trim() &&
    inquiryText.trim() &&
    !isAnalyzing;

  const validateName = () => {
    const trimmedName = userName.trim();

    if (!trimmedName) {
      return text.inquiry.nameRequired;
    }

    if (trimmedName.length < 2) {
      return text.inquiry.nameTooShort;
    }

    if (trimmedName.length > 30) {
      return text.inquiry.nameTooLong;
    }

    /*
      모든 언어의 문자(한글, 영어, 일본어, 중국어,
      스페인어 악센트 문자 등)를 허용한다.

      공백, 하이픈, 아포스트로피, 마침표, 가운데점도
      이름에서 사용할 수 있도록 허용한다.
    */
    if (!/^[\p{L}\p{M}\s.'’\-·]+$/u.test(trimmedName)) {
      return text.inquiry.nameInvalid;
    }

    const compactName = trimmedName.replace(/\s/g, "");

    /*
      같은 문자만 3회 이상 반복한 값 차단
      예: aaa, ㅋㅋㅋ 등
    */
    if (/^(.)\1{2,}$/u.test(compactName)) {
      return text.inquiry.nameRepeated;
    }

    return "";
  };

  const validatePhone = () => {
    const normalizedPhone = userPhone.replace(/[^0-9]/g, "");

    if (!normalizedPhone) {
      return text.inquiry.phoneRequired;
    }

    /*
      현재 FieldLink 정책:
      010으로 시작하는 한국 휴대전화 번호 11자리
    */
    if (!/^010\d{8}$/.test(normalizedPhone)) {
      return text.inquiry.phoneInvalid;
    }

    return "";
  };

  const validateInquiryText = () => {
    const trimmedText = inquiryText.trim();
    const compactText = trimmedText.replace(/\s/g, "");

    if (!trimmedText) {
      return text.inquiry.inquiryRequired;
    }

    /*
      숫자로만 구성된 문의 차단
    */
    if (/^\d+$/.test(compactText)) {
      return text.inquiry.inquiryInvalid;
    }

    /*
      문자나 숫자가 하나도 없고
      특수문자로만 구성된 문의 차단.

      Unicode 문자 기준이므로
      한글, 영어, 일본어, 중국어, 스페인어 모두 허용된다.
    */
    if (/^[^\p{L}\p{N}]+$/u.test(compactText)) {
      return text.inquiry.inquiryInvalid;
    }

    /*
      동일 문자만 반복된 비정상 입력 차단
    */
    if (/^(.)\1{2,}$/u.test(compactText)) {
      return text.inquiry.inquiryInvalid;
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
      <p
        style={{
          marginBottom: "8px",
          color: "#555",
          fontWeight: "bold",
        }}
      >
        {text.inquiry.title}
      </p>

      <p
        style={{
          marginBottom: "16px",
          color: "#777",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {text.inquiry.currentStadium}:{" "}
        {getStadiumLabel(selectedStadium, selectedLanguage)}
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
          <p
            style={{
              margin: "0 0 4px 0",
              fontWeight: "bold",
            }}
          >
            {text.inquiry.warningTitle}
          </p>

          <p style={{ margin: 0 }}>
            {text.inquiry.warningText}
          </p>
        </div>
      </div>

      <div style={{ textAlign: "left", marginBottom: "14px" }}>
        <p
          style={{
            marginBottom: "8px",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {text.inquiry.name}
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
        <p
          style={{
            marginBottom: "8px",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {text.inquiry.phone}
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
        <p
          style={{
            marginBottom: "8px",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {text.inquiry.inquiryText}
        </p>

        <textarea
          value={inquiryText}
          onChange={handleInquiryTextChange}
          placeholder={text.inquiry.inquiryPlaceholder}
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
        <p
          style={{
            marginBottom: "8px",
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {text.inquiry.image}
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
          {text.inquiry.selectImage}
        </label>

        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={(e) =>
            setSelectedImage(e.target.files[0] || null)
          }
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
          {text.inquiry.imageOptional}
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
            {text.inquiry.attachedFile}: {selectedImage.name}

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
              {text.inquiry.cancel}
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
            {text.inquiry.noImage}
          </p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "24px",
        }}
      >
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
          {text.inquiry.previous}
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
          {isAnalyzing
            ? text.inquiry.analyzing
            : text.inquiry.next}
        </button>
      </div>
    </>
  );
}

export default InquiryStep;