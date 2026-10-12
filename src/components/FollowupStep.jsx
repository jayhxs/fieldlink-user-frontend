function FollowupStep({
  inquiryText,
  questions,
  followupAnswers,
  setFollowupAnswers,
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
  const getQuestionValue = (questionId) => {
    return followupAnswers[questionId] || "";
  };

  const setQuestionValue = (question, value) => {
    setFollowupAnswers((prev) => ({
      ...prev,
      [question.id]: value,
    }));

    if (question.field === "location") {
      setSelectedLocation(value);
    }

    if (question.field === "issueType") {
      setSelectedIssueType(value);
    }

    if (question.field === "occurredAt") {
      setSelectedTime(value);
    }

    if (question.field === "currentStatus") {
      setSelectedStatus(value);
    }

    if (question.field === "extraDetail") {
      setExtraDetail(value);
    }
  };

  const allRequiredAnswered = questions.every((question) => {
    if (!question.required) {
      return true;
    }

    return String(getQuestionValue(question.id)).trim() !== "";
  });

  const canSubmit =
    allRequiredAnswered && !isSubmitting;

  const renderQuestion = (question) => {
    const currentValue = getQuestionValue(question.id);

    if (question.answerType === "single_choice") {
      return (
        <div
          key={question.id}
          style={{
            textAlign: "left",
            marginBottom: "22px",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              color: "#333",
              fontWeight: "bold",
              lineHeight: "1.5",
            }}
          >
            {question.question}
            {question.required && (
              <span style={{ color: "#dc2626", marginLeft: "4px" }}>*</span>
            )}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {(question.options || []).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setQuestionValue(question, option)}
                style={optionButtonStyle(currentValue, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    if (question.answerType === "number") {
      return (
        <div
          key={question.id}
          style={{
            textAlign: "left",
            marginBottom: "22px",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              color: "#333",
              fontWeight: "bold",
              lineHeight: "1.5",
            }}
          >
            {question.question}
            {question.required && (
              <span style={{ color: "#dc2626", marginLeft: "4px" }}>*</span>
            )}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <input
              type="number"
              value={currentValue}
              onChange={(e) =>
                setQuestionValue(question, e.target.value)
              }
              placeholder={question.placeholder || ""}
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

            {question.suffix && (
              <span
                style={{
                  flexShrink: 0,
                  color: "#555",
                  fontSize: "13px",
                }}
              >
                {question.suffix}
              </span>
            )}
          </div>
        </div>
      );
    }

    if (question.answerType === "text") {
      return (
        <div
          key={question.id}
          style={{
            textAlign: "left",
            marginBottom: "22px",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              color: "#333",
              fontWeight: "bold",
              lineHeight: "1.5",
            }}
          >
            {question.question}
            {question.required && (
              <span style={{ color: "#dc2626", marginLeft: "4px" }}>*</span>
            )}
          </p>

          <textarea
            value={currentValue}
            onChange={(e) =>
              setQuestionValue(question, e.target.value)
            }
            placeholder={question.placeholder || ""}
            style={{
              width: "100%",
              minHeight: "100px",
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
      );
    }

    return null;
  };

  return (
    <>
      <p
        style={{
          marginBottom: "8px",
          color: "#555",
          fontWeight: "bold",
        }}
      >
        추가 정보 입력
      </p>

      <p
        style={{
          marginBottom: "20px",
          color: "#777",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        문의 내용을 바탕으로 현장 대응에 필요한 정보를 추가로 입력해주세요.
      </p>

      <div
        style={{
          textAlign: "left",
          marginBottom: "24px",
          padding: "14px",
          borderRadius: "12px",
          backgroundColor: "#f9fafb",
          border: "1px solid #e5e7eb",
        }}
      >
        <p
          style={{
            margin: "0 0 8px 0",
            color: "#555",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          작성한 문의 내용
        </p>

        <p
          style={{
            margin: 0,
            color: "#111",
            fontSize: "13px",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
          }}
        >
          {inquiryText}
        </p>
      </div>

      {questions.map((question) =>
        renderQuestion(question)
      )}

      {submitError && (
        <div
          style={{
            marginTop: "8px",
            marginBottom: "16px",
            padding: "10px 12px",
            borderRadius: "10px",
            backgroundColor: "#fef2f2",
            border: "1px solid #fecaca",
            color: "#b91c1c",
            fontSize: "13px",
            lineHeight: "1.5",
            textAlign: "left",
          }}
        >
          {submitError}
        </div>
      )}

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "24px",
        }}
      >
        <button
          type="button"
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
          type="button"
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