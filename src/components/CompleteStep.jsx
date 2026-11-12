import {
  getStadiumLabel,
  getTranslation,
} from "../translations";

function CompleteStep({
  selectedLanguage,
  latestSubmittedInquiry,
  resetForm,
}) {
  if (!latestSubmittedInquiry) {
    return null;
  }

  const text = getTranslation(selectedLanguage);

  return (
    <>
      <p
        style={{
          marginBottom: "8px",
          color: "#2563eb",
          fontWeight: "bold",
        }}
      >
        {text.complete.title}
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
        {text.complete.description}
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
        <p
          style={{
            marginTop: 0,
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {text.complete.original}
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
        <p
          style={{
            marginTop: 0,
            color: "#333",
            fontWeight: "bold",
          }}
        >
          {text.complete.summary}
        </p>

        <p
          style={{
            color: "#555",
            fontSize: "14px",
            fontFamily: "inherit",
            lineHeight: "1.6",
          }}
        >
          {text.complete.stadium}:{" "}
          {getStadiumLabel(
            latestSubmittedInquiry.stadium,
            selectedLanguage
          )}
          <br />

          {text.complete.issueType}:{" "}
          {latestSubmittedInquiry.followup.issueType ||
            text.complete.none}
          <br />

          {text.complete.location}:{" "}
          {latestSubmittedInquiry.followup.location ||
            text.complete.none}
          <br />

          {text.complete.occurredAt}:{" "}
          {latestSubmittedInquiry.followup.occurredAt ||
            text.complete.none}
          <br />

          {text.complete.currentStatus}:{" "}
          {latestSubmittedInquiry.followup.currentStatus ||
            text.complete.none}
          <br />

          {text.complete.extraDetail}:{" "}
          {latestSubmittedInquiry.followup.extraDetail ||
            text.complete.none}
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
        {text.complete.home}
      </button>
    </>
  );
}

export default CompleteStep;