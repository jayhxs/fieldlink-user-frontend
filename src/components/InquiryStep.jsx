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
  setStep,
}) {
  const canGoNext =
    userName.trim() && userPhone.trim() && inquiryText.trim();

  return (
    <>
      <p style={{ marginBottom: "8px", color: "#555", fontWeight: "bold" }}>
        문제/문의 접수
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
          onChange={(e) => setUserName(e.target.value)}
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

      <div style={{ textAlign: "left", marginBottom: "14px" }}>
        <p style={{ marginBottom: "8px", color: "#333", fontWeight: "bold" }}>
          전화번호
        </p>
        <input
          type="tel"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
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

      <div style={{ textAlign: "left", marginBottom: "14px" }}>
        <p style={{ marginBottom: "8px", color: "#333", fontWeight: "bold" }}>
          문의 내용
        </p>
        <textarea
          value={inquiryText}
          onChange={(e) => setInquiryText(e.target.value)}
          placeholder={`언제, 어디서, 어떤 문제가 발생하였는지 자유롭게 작성해주세요.
예: 현재 3루 내야 2층 화장실에 휴지가 부족합니다.`}
          style={{
            width: "100%",
            minHeight: "130px",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
            fontSize: "13px",
            fontFamily: "inherit",
            resize: "none",
            boxSizing: "border-box",
            color: "#111",
            lineHeight: "1.5",
          }}
        />
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
          onClick={() => setStep("service")}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            backgroundColor: "#ffffff",
            color: "#111",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: "pointer",
          }}
        >
          이전
        </button>

        <button
          onClick={() => setStep("followup")}
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
          다음
        </button>
      </div>
    </>
  );
}

export default InquiryStep;