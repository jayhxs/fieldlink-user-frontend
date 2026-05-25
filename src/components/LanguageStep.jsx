function LanguageStep({
  selectedLanguage,
  setSelectedLanguage,
  setStep,
  languageButtonStyle,
}) {
  return (
    <>
      <p style={{ marginBottom: "32px", color: "#555" }}>언어를 선택해주세요</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <button
          style={languageButtonStyle("한국어")}
          onClick={() => setSelectedLanguage("한국어")}
        >
          한국어
        </button>
        <button
          style={languageButtonStyle("English")}
          onClick={() => setSelectedLanguage("English")}
        >
          English
        </button>
        <button
          style={languageButtonStyle("日本語")}
          onClick={() => setSelectedLanguage("日本語")}
        >
          日本語
        </button>
      </div>

      <p style={{ marginTop: "24px", color: "#333" }}>
        선택된 언어: {selectedLanguage || "없음"}
      </p>

      <button
        onClick={() => setStep("stadium")}
        disabled={!selectedLanguage}
        style={{
          marginTop: "24px",
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: selectedLanguage ? "#2563eb" : "#cbd5e1",
          color: "white",
          fontSize: "16px",
          cursor: selectedLanguage ? "pointer" : "not-allowed",
        }}
      >
        다음
      </button>
    </>
  );
}

export default LanguageStep;