function FollowupStep({
  inquiryText,
  selectedLocation,
  setSelectedLocation,
  selectedIssueType,
  setSelectedIssueType,
  selectedTime,
  setSelectedTime,
  selectedStatus,
  setSelectedStatus,
  extraDetail,
  setExtraDetail,
  setStep,
  optionButtonStyle,
  handleSubmitInquiry,
  isSubmitting,
  submitError,
}) {
  const canSubmit =
    selectedLocation &&
    selectedIssueType &&
    selectedTime &&
    selectedStatus &&
    !isSubmitting;

  return (
    <>
      <p style={{ marginBottom: "8px", color: "#555", fontWeight: "bold" }}>
        AI 보완 질문
      </p>

      <p
        style={{
          marginBottom: "20px",
          color: "#777",
          fontSize: "14px",
          fontFamily: "inherit",
          lineHeight: "1.5",
        }}
      >
        입력하신 내용을 바탕으로, 빠른 처리를 위해 몇 가지 정보를 추가로
        선택해주세요.
      </p>

      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <p style={{ marginBottom: "8px", color: "#333", fontWeight: "bold" }}>
          원문 내용
        </p>
        <div
          style={{
            padding: "14px",
            backgroundColor: "#f8fafc",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            color: "#111",
            fontSize: "13px",
            fontFamily: "inherit",
            lineHeight: "1.5",
          }}
        >
          {inquiryText}
        </div>
      </div>

      <div style={{ textAlign: "left", marginBottom: "18px" }}>
        <p style={{ marginBottom: "10px", color: "#333", fontWeight: "bold" }}>
          위치
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["1층", "2층", "3층", "북측", "남측", "잘 모르겠음"].map((item) => (
            <button
              key={item}
              style={optionButtonStyle(selectedLocation, item)}
              onClick={() => setSelectedLocation(item)}
              disabled={isSubmitting}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "left", marginBottom: "18px" }}>
        <p style={{ marginBottom: "10px", color: "#333", fontWeight: "bold" }}>
          문제 유형
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["청결", "냄새", "고장", "휴지 부족", "대기줄 과다", "기타"].map(
            (item) => (
              <button
                key={item}
                style={optionButtonStyle(selectedIssueType, item)}
                onClick={() => setSelectedIssueType(item)}
                disabled={isSubmitting}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      <div style={{ textAlign: "left", marginBottom: "18px" }}>
        <p style={{ marginBottom: "10px", color: "#333", fontWeight: "bold" }}>
          발생 시점
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["방금", "10분 이내", "30분 이내", "1시간 이상", "잘 모르겠음"].map(
            (item) => (
              <button
                key={item}
                style={optionButtonStyle(selectedTime, item)}
                onClick={() => setSelectedTime(item)}
                disabled={isSubmitting}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      <div style={{ textAlign: "left", marginBottom: "18px" }}>
        <p style={{ marginBottom: "10px", color: "#333", fontWeight: "bold" }}>
          현재도 같은 상태인가요?
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {["예", "아니오", "모르겠음"].map((item) => (
            <button
              key={item}
              style={optionButtonStyle(selectedStatus, item)}
              onClick={() => setSelectedStatus(item)}
              disabled={isSubmitting}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "left", marginBottom: "18px" }}>
        <p style={{ marginBottom: "10px", color: "#333", fontWeight: "bold" }}>
          추가 설명
        </p>
        <textarea
          value={extraDetail}
          onChange={(e) => setExtraDetail(e.target.value)}
          placeholder="필요한 경우에만 짧게 입력해주세요."
          disabled={isSubmitting}
          style={{
            width: "100%",
            minHeight: "90px",
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

      {submitError && (
        <div
          style={{
            marginBottom: "18px",
            padding: "14px",
            borderRadius: "12px",
            backgroundColor: "#fff7ed",
            border: "1px solid #fed7aa",
            color: "#9a3412",
            fontSize: "13px",
            fontFamily: "inherit",
            lineHeight: "1.5",
            textAlign: "left",
          }}
        >
          {submitError}
        </div>
      )}

      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
        <button
          onClick={() => setStep("inquiry")}
          disabled={isSubmitting}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            backgroundColor: "#ffffff",
            color: "#111",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          이전
        </button>

        <button
          onClick={handleSubmitInquiry}
          disabled={!canSubmit}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: canSubmit ? "#2563eb" : "#cbd5e1",
            color: "white",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: canSubmit ? "pointer" : "not-allowed",
          }}
        >
          {isSubmitting ? "접수 중..." : "접수하기"}
        </button>
      </div>
    </>
  );
}

export default FollowupStep;