import {
  getStadiumLabel,
  getTranslation,
} from "../translations";

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
  const text = getTranslation(selectedLanguage);

  const getServiceLabel = (service) => {
    if (service === "FAQ") {
      return text.service.stadiumGuide;
    }

    if (service === "문제/문의 접수") {
      return text.service.inquiry;
    }

    if (service === "접수 조회") {
      return text.service.lookup;
    }

    return text.service.none;
  };

  return (
    <>
      <p style={{ marginBottom: "8px", color: "#555" }}>
        {text.service.selectService}
      </p>

      <p style={{ marginBottom: "8px", color: "#777", fontSize: "14px" }}>
        {text.service.selectedLanguage}: {selectedLanguage}
      </p>

      <p style={{ marginBottom: "24px", color: "#777", fontSize: "14px" }}>
        {text.service.selectedStadium}:{" "}
        {getStadiumLabel(selectedStadium, selectedLanguage)}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <button
          style={serviceButtonStyle("FAQ")}
          onClick={() => setSelectedService("FAQ")}
        >
          {text.service.stadiumGuide}
        </button>

        <button
          style={serviceButtonStyle("문제/문의 접수")}
          onClick={() => setSelectedService("문제/문의 접수")}
        >
          {text.service.inquiry}
        </button>

        <button
          style={serviceButtonStyle("접수 조회")}
          onClick={() => setSelectedService("접수 조회")}
        >
          {text.service.lookup}
        </button>
      </div>

      <p style={{ marginTop: "24px", color: "#333" }}>
        {text.service.selectedService}: {getServiceLabel(selectedService)}
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
          {text.service.previous}
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
          {text.service.next}
        </button>
      </div>
    </>
  );
}

export default ServiceStep;