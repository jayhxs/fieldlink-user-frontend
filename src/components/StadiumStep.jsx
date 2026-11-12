import {
  getStadiumLabel,
  getTranslation,
} from "../translations";

function StadiumStep({
  selectedLanguage,
  selectedStadium,
  setSelectedStadium,
  setStep,
  stadiumButtonStyle,
}) {
  const text = getTranslation(selectedLanguage);

  const stadiums = [
    "서울종합운동장 야구장",
    "고척 스카이돔",
    "수원 케이티 위즈 파크",
    "인천 SSG 랜더스필드",
    "대전 한화생명 볼파크",
    "대구 삼성 라이온즈 파크",
    "광주-기아 챔피언스 필드",
    "창원NC파크",
    "사직 야구장",
  ];

  return (
    <>
      <p style={{ marginBottom: "8px", color: "#555" }}>
        {text.stadium.selectStadium}
      </p>

      <p
        style={{
          marginBottom: "24px",
          color: "#777",
          fontSize: "14px",
        }}
      >
        {text.stadium.selectedLanguage}: {selectedLanguage}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {stadiums.map((stadium) => (
          <button
            key={stadium}
            style={stadiumButtonStyle(stadium)}
            onClick={() => setSelectedStadium(stadium)}
          >
            {getStadiumLabel(stadium, selectedLanguage)}
          </button>
        ))}
      </div>

      <p style={{ marginTop: "24px", color: "#333" }}>
        {text.stadium.selectedStadium}:{" "}
        {selectedStadium
          ? getStadiumLabel(selectedStadium, selectedLanguage)
          : text.stadium.none}
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "24px",
        }}
      >
        <button
          onClick={() => setStep("language")}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            backgroundColor: "#ffffff",
            color: "#111",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {text.stadium.previous}
        </button>

        <button
          onClick={() => setStep("service")}
          disabled={!selectedStadium}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: selectedStadium ? "#2563eb" : "#cbd5e1",
            color: "white",
            fontSize: "16px",
            cursor: selectedStadium ? "pointer" : "not-allowed",
          }}
        >
          {text.stadium.next}
        </button>
      </div>
    </>
  );
}

export default StadiumStep;