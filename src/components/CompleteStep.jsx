function CompleteStep({ latestSubmittedInquiry, resetForm }) {
  if (!latestSubmittedInquiry) {
    return null;
  }

  return (
    <>
      <p style={{ marginBottom: "8px", color: "#2563eb", fontWeight: "bold" }}>
        접수가 완료되었습니다
      </p>

      <p
        style={{
          marginBottom: "20px",
          color: "#555",
          fontSize: "13px",
          fontFamily: "inherit",
          lineHeight: "1.5",
        }}
      >
        입력하신 이름과 전화번호로 접수 내역을 조회할 수 있습니다.
      </p>

      <div
        style={{
          textAlign: "left",
          marginTop: "20px",
          padding: "16px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
        }}
      >
        <p style={{ marginTop: 0, color: "#333", fontWeight: "bold" }}>
          원문 내용
        </p>
        <p
          style={{
            color: "#555",
            fontSize: "14px",
            fontFamily: "inherit",
            lineHeight: "1.6",
            marginBottom: 0,
          }}
        >
          {latestSubmittedInquiry.inquiryText}
        </p>
      </div>

      <div
        style={{
          textAlign: "left",
          padding: "16px",
          backgroundColor: "#f8fafc",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          marginTop: "20px",
        }}
      >
        <p style={{ marginTop: 0, color: "#333", fontWeight: "bold" }}>
          접수 요약
        </p>
        <p
          style={{
            color: "#555",
            fontSize: "14px",
            fontFamily: "inherit",
            lineHeight: "1.6",
          }}
        >
          경기장: {latestSubmittedInquiry.stadium}
          <br />
          문의 유형: {latestSubmittedInquiry.followup.issueType}
          <br />
          위치: {latestSubmittedInquiry.followup.location}
          <br />
          발생 시점: {latestSubmittedInquiry.followup.occurredAt}
          <br />
          현재 상태: {latestSubmittedInquiry.followup.currentStatus}
          <br />
          추가 설명: {latestSubmittedInquiry.followup.extraDetail || "없음"}
        </p>
      </div>

      <button
        onClick={resetForm}
        style={{
          marginTop: "24px",
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "white",
          fontSize: "16px",
          fontFamily: "inherit",
          cursor: "pointer",
        }}
      >
        처음으로
      </button>
    </>
  );
}

export default CompleteStep;