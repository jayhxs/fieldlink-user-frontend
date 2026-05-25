function StadiumStep({
  selectedLanguage,
  selectedStadium,
  setSelectedStadium,
  setStep,
  stadiumButtonStyle,
}) {
  return (
    <>
      <p style={{ marginBottom: "8px", color: "#555" }}>경기장을 선택해주세요</p>
      <p style={{ marginBottom: "24px", color: "#777", fontSize: "14px" }}>
        선택된 언어: {selectedLanguage}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <button
          style={stadiumButtonStyle("서울종합운동장 야구장")}
          onClick={() => setSelectedStadium("서울종합운동장 야구장")}
        >
          서울종합운동장 야구장
        </button>

        <button
          style={stadiumButtonStyle("고척 스카이돔")}
          onClick={() => setSelectedStadium("고척 스카이돔")}
        >
          고척 스카이돔
        </button>

        <button
          style={stadiumButtonStyle("수원 케이티 위즈 파크")}
          onClick={() => setSelectedStadium("수원 케이티 위즈 파크")}
        >
          수원 케이티 위즈 파크
        </button>

        <button
          style={stadiumButtonStyle("인천 SSG 랜더스필드")}
          onClick={() => setSelectedStadium("인천 SSG 랜더스필드")}
        >
          인천 SSG 랜더스필드
        </button>

        <button
          style={stadiumButtonStyle("대전 한화생명 볼파크")}
          onClick={() => setSelectedStadium("대전 한화생명 볼파크")}
        >
          대전 한화생명 볼파크
        </button>

        <button
          style={stadiumButtonStyle("대구 삼성 라이온즈 파크")}
          onClick={() => setSelectedStadium("대구 삼성 라이온즈 파크")}
        >
          대구 삼성 라이온즈 파크
        </button>

        <button
          style={stadiumButtonStyle("광주-기아 챔피언스 필드")}
          onClick={() => setSelectedStadium("광주-기아 챔피언스 필드")}
        >
          광주-기아 챔피언스 필드
        </button>

        <button
          style={stadiumButtonStyle("창원NC파크")}
          onClick={() => setSelectedStadium("창원NC파크")}
        >
          창원NC파크
        </button>

        <button
          style={stadiumButtonStyle("사직 야구장")}
          onClick={() => setSelectedStadium("사직 야구장")}
        >
          사직 야구장
        </button>
      </div>

      <p style={{ marginTop: "24px", color: "#333" }}>
        선택된 경기장: {selectedStadium || "없음"}
      </p>

      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
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
          이전
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
          다음
        </button>
      </div>
    </>
  );
}

export default StadiumStep;