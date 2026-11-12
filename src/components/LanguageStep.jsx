import {
  getTranslation,
  languageOptions,
} from "./translations";

function LanguageStep({
  selectedLanguage,
  setSelectedLanguage,
  setStep,
  languageButtonStyle,
}) {
  const text = getTranslation(selectedLanguage);

  return (
    <>
      <p style={{ marginBottom: "32px", color: "#555" }}>
        {text.language.selectLanguage}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {languageOptions.map((language) => (
          <button
            key={language.code}
            style={languageButtonStyle(language.value)}
            onClick={() => setSelectedLanguage(language.value)}
          >
            {language.label}
          </button>
        ))}
      </div>

      <p style={{ marginTop: "24px", color: "#333" }}>
        {text.language.selectedLanguage}:{" "}
        {selectedLanguage || text.language.none}
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
        {text.language.next}
      </button>
    </>
  );
}

export default LanguageStep;