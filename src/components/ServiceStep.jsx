function ServiceStep({
  selectedLanguage,
  selectedStadium,
  selectedService,
  setSelectedService,
  setStep,
  setLookupName,
  setLookupPhone,
  setLookupSearched,
  setSelectedFaq,
  serviceButtonStyle,
  goToStadiumStep,
}) {
  return (
    <>
      <p style={{ marginBottom: "8px", color: "#555" }}>서비스를 선택해주세요</p>
      <p style={{ marginBottom: "8px", color: "#777", fontSize: "14px" }}>
        선택된 언어: {selectedLanguage}
      </p>
      <p style={{ marginBottom: "24px", color: "#777", fontSize: "14px" }}>
        선택된 경기장: {selectedStadium}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <button
          style={serviceButtonStyle("FAQ")}
          onClick={() => setSelectedService("FAQ")}
        >
          FAQ
        </button>

        <button
          style={serviceButtonStyle("문제/문의 접수")}
          onClick={() => setSelectedService("문제/문의 접수")}
        >
          문제/문의 접수
        </button>

        <button
          style={serviceButtonStyle("접수 조회")}
          onClick={() => setSelectedService("접수 조회")}
        >
          접수 조회
        </button>
      </div>

      <p style={{ marginTop: "24px", color: "#333" }}>
        선택된 서비스: {selectedService || "없음"}
      </p>

      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
        <button
          onClick={goToStadiumStep}
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
          onClick={() => {
            if (selectedService === "문제/문의 접수") {
              setStep("inquiry");
            } else if (selectedService === "접수 조회") {
              setLookupName("");
              setLookupPhone("");
              setLookupSearched(false);
              setStep("lookup");
            } else if (selectedService === "FAQ") {
              setSelectedFaq("");
              setStep("faq");
            }
          }}
          disabled={!selectedService}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: selectedService ? "#2563eb" : "#cbd5e1",
            color: "white",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: selectedService ? "pointer" : "not-allowed",
          }}
        >
          다음
        </button>
      </div>
    </>
  );
}

export default ServiceStep;