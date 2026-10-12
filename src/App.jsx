import { useEffect, useState } from "react";

import LanguageStep from "./components/LanguageStep";

import StadiumStep from "./components/StadiumStep";

import ServiceStep from "./components/ServiceStep";

import InquiryStep from "./components/InquiryStep";

import FollowupStep from "./components/FollowupStep";

import FaqStep from "./components/FaqStep";

import LookupStep from "./components/LookupStep";

import CompleteStep from "./components/CompleteStep";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [step, setStep] = useState("language");
  const [selectedStadium, setSelectedStadium] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [inquiryText, setInquiryText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  /*
    기존 백엔드 전송 형식을 유지하기 위한 상태
  */
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedIssueType, setSelectedIssueType] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [extraDetail, setExtraDetail] = useState("");

  /*
    동적으로 생성된 보완질문
  */
  const [followupQuestions, setFollowupQuestions] = useState([]);

  /*
    질문 ID별 답변 저장
  */
  const [followupAnswers, setFollowupAnswers] = useState({});

  /*
    AI 분석 상태
  */
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState("");

  const [lookupName, setLookupName] = useState("");
  const [lookupPhone, setLookupPhone] = useState("");
  const [lookupSearched, setLookupSearched] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState("");

  const [submittedInquiries, setSubmittedInquiries] = useState([]);
  const [stadiumCounters, setStadiumCounters] = useState({});
  const [latestSubmittedInquiry, setLatestSubmittedInquiry] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [step]);

  const languageButtonStyle = (language) => ({
    padding: "14px",
    borderRadius: "12px",
    border:
      selectedLanguage === language
        ? "2px solid #2563eb"
        : "1px solid #ddd",
    backgroundColor:
      selectedLanguage === language ? "#eff6ff" : "#ffffff",
    color: "#111",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: selectedLanguage === language ? "bold" : "normal",
  });

  const stadiumButtonStyle = (stadium) => ({
    padding: "14px",
    borderRadius: "12px",
    border:
      selectedStadium === stadium
        ? "2px solid #2563eb"
        : "1px solid #ddd",
    backgroundColor:
      selectedStadium === stadium ? "#eff6ff" : "#ffffff",
    color: "#111",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: selectedStadium === stadium ? "bold" : "normal",
  });

  const serviceButtonStyle = (service) => ({
    padding: "14px",
    borderRadius: "12px",
    border:
      selectedService === service
        ? "2px solid #2563eb"
        : "1px solid #ddd",
    backgroundColor:
      selectedService === service ? "#eff6ff" : "#ffffff",
    color: "#111",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: selectedService === service ? "bold" : "normal",
  });

  const optionButtonStyle = (selectedValue, currentValue) => ({
    padding: "10px 12px",
    borderRadius: "10px",
    border:
      selectedValue === currentValue
        ? "2px solid #2563eb"
        : "1px solid #ddd",
    backgroundColor:
      selectedValue === currentValue ? "#eff6ff" : "#ffffff",
    color: "#111",
    fontSize: "14px",
    fontFamily: "inherit",
    cursor: "pointer",
    fontWeight: selectedValue === currentValue ? "bold" : "normal",
  });

  const stadiumCodeMap = {
    "서울종합운동장 야구장": "js",
    "고척 스카이돔": "gc",
    "수원 케이티 위즈 파크": "sw",
    "인천 SSG 랜더스필드": "ic",
    "대전 한화생명 볼파크": "dj",
    "대구 삼성 라이온즈 파크": "dg",
    "광주-기아 챔피언스 필드": "gj",
    "창원NC파크": "cw",
    "사직 야구장": "sj",
  };

  const zoneIdMap = {
    "서울종합운동장 야구장": 1,
    "고척 스카이돔": 2,
    "수원 케이티 위즈 파크": 3,
    "인천 SSG 랜더스필드": 4,
    "대전 한화생명 볼파크": 5,
    "대구 삼성 라이온즈 파크": 6,
    "광주-기아 챔피언스 필드": 7,
    "창원NC파크": 8,
    "사직 야구장": 9,
  };

  const normalizePhone = (phone) => {
    return phone.replace(/[^0-9]/g, "");
  };

  const getFormattedDate = () => {
    const today = new Date();
    const year = String(today.getFullYear()).slice(2);
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");

    return `${year}${month}${date}`;
  };

  const getStadiumCode = (stadiumName) => {
    return stadiumCodeMap[stadiumName] || "xx";
  };

  /*
    기존 임시 mock 분석 함수
    현재 실제 AI API 연결 후에는 사용하지 않지만,
    테스트가 완전히 끝날 때까지 일단 유지한다.
  */
  const createMockFollowupAnalysis = (text) => {
    const normalizedText = text.replace(/\s/g, "").toLowerCase();

    const saysCurrentTime =
      normalizedText.includes("지금") ||
      normalizedText.includes("현재") ||
      normalizedText.includes("방금");

    const isRestroomIssue =
      normalizedText.includes("화장실") ||
      normalizedText.includes("휴지") ||
      normalizedText.includes("변기");

    const isDisturbanceIssue =
      normalizedText.includes("난동") ||
      normalizedText.includes("싸움") ||
      normalizedText.includes("폭행") ||
      normalizedText.includes("위협");

    if (isRestroomIssue) {
      let inferredIssueType = "시설 문제";

      if (normalizedText.includes("휴지")) {
        inferredIssueType = "휴지 부족";
      } else if (
        normalizedText.includes("고장") ||
        normalizedText.includes("안내려") ||
        normalizedText.includes("막혔")
      ) {
        inferredIssueType = "고장";
      } else if (
        normalizedText.includes("냄새") ||
        normalizedText.includes("악취")
      ) {
        inferredIssueType = "냄새";
      } else if (
        normalizedText.includes("청소") ||
        normalizedText.includes("더러") ||
        normalizedText.includes("오염")
      ) {
        inferredIssueType = "청결";
      }

      const questions = [
        {
          id: "restroom_location",
          field: "location",
          question: "어느 구역에 있는 화장실인가요?",
          answerType: "single_choice",
          options: ["1루", "3루", "외야", "중앙", "잘 모르겠음"],
          required: true,
        },
        {
          id: "nearby_gate",
          field: "extraDetail",
          question: "가까운 게이트 번호를 알고 있다면 입력해주세요.",
          answerType: "number",
          placeholder: "예: 12",
          suffix: "번 게이트",
          required: false,
        },
      ];

      if (!saysCurrentTime) {
        questions.push({
          id: "restroom_time",
          field: "occurredAt",
          question: "언제 문제를 확인했나요?",
          answerType: "single_choice",
          options: [
            "방금",
            "10분 이내",
            "30분 이내",
            "1시간 이상",
            "잘 모르겠음",
          ],
          required: true,
        });
      }

      questions.push({
        id: "restroom_status",
        field: "currentStatus",
        question: "현재도 같은 문제가 계속되고 있나요?",
        answerType: "single_choice",
        options: ["예", "아니오", "잘 모르겠음"],
        required: true,
      });

      return {
        inferredIssueType,
        inferredTime: saysCurrentTime ? "방금" : "",
        questions,
      };
    }

    if (isDisturbanceIssue) {
      const questions = [
        {
          id: "disturbance_location",
          field: "location",
          question: "어느 구역에서 발생하고 있나요?",
          answerType: "single_choice",
          options: ["1루", "3루", "외야", "중앙", "잘 모르겠음"],
          required: true,
        },
      ];

      if (!saysCurrentTime) {
        questions.push({
          id: "disturbance_time",
          field: "occurredAt",
          question: "언제 발생한 상황인가요?",
          answerType: "single_choice",
          options: [
            "방금",
            "10분 이내",
            "30분 이내",
            "1시간 이상",
            "잘 모르겠음",
          ],
          required: true,
        });
      }

      questions.push(
        {
          id: "danger_status",
          field: "currentStatus",
          question: "현재 다른 관람객에게 위협을 가하고 있나요?",
          answerType: "single_choice",
          options: ["예", "아니오", "잘 모르겠음"],
          required: true,
        },
        {
          id: "appearance",
          field: "extraDetail",
          question: "해당 사람의 복장이나 인상착의를 입력해주세요.",
          answerType: "text",
          placeholder:
            "예: 검은색 모자와 빨간색 유니폼을 착용한 사람",
          required: true,
        }
      );

      return {
        inferredIssueType: "안전·질서 문제",
        inferredTime: saysCurrentTime ? "방금" : "",
        questions,
      };
    }

    const generalQuestions = [
      {
        id: "general_location",
        field: "location",
        question: "문제가 발생한 구역을 선택해주세요.",
        answerType: "single_choice",
        options: ["1루", "3루", "외야", "중앙", "잘 모르겠음"],
        required: true,
      },
      {
        id: "general_issue_type",
        field: "issueType",
        question: "문의 내용과 가장 가까운 유형을 선택해주세요.",
        answerType: "single_choice",
        options: [
          "시설 문제",
          "안전 문제",
          "청결 문제",
          "분실물",
          "이용 문의",
          "기타",
        ],
        required: true,
      },
    ];

    if (!saysCurrentTime) {
      generalQuestions.push({
        id: "general_time",
        field: "occurredAt",
        question: "언제 발생했나요?",
        answerType: "single_choice",
        options: [
          "방금",
          "10분 이내",
          "30분 이내",
          "1시간 이상",
          "잘 모르겠음",
        ],
        required: true,
      });
    }

    generalQuestions.push({
      id: "general_detail",
      field: "extraDetail",
      question: "추가로 전달할 내용이 있다면 입력해주세요.",
      answerType: "text",
      placeholder: "필요한 경우에만 짧게 입력해주세요.",
      required: false,
    });

    return {
      inferredIssueType: "",
      inferredTime: saysCurrentTime ? "방금" : "",
      questions: generalQuestions,
    };
  };

  /*
    실제 AI 분석 API 호출
  */
  const handlePrepareFollowup = async () => {
    if (isAnalyzing) return;

    setIsAnalyzing(true);
    setAnalysisError("");
    setSubmitError("");

    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 30000);

    try {
      const zoneId = zoneIdMap[selectedStadium];

      const response = await fetch(
        "https://fieldlink-api.onrender.com/api/inquiries/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            original_text: inquiryText,
            zone_id: zoneId,
          }),
          signal: controller.signal,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        console.error("AI 분석 실패 상태코드:", response.status);
        console.error("AI 분석 실패 응답본문:", errorText);

        throw new Error(`AI 분석 요청 실패: ${response.status}`);
      }

      const analysis = await response.json();

      console.log("AI 분석 결과:", analysis);

      if (!analysis.is_valid_inquiry) {
        setAnalysisError(
          analysis.message ||
            "문의 내용을 이해하기 어렵습니다. 발생한 상황을 조금 더 구체적으로 입력해주세요."
        );

        return;
      }

      setSelectedLocation("");
      setSelectedIssueType(analysis.inferred_issue_type || "");
      setSelectedTime(analysis.inferred_time || "");
      setSelectedStatus("");
      setExtraDetail("");

      setFollowupQuestions(
        Array.isArray(analysis.questions)
          ? analysis.questions
          : []
      );

      setFollowupAnswers({});

      setStep("followup");
    } catch (error) {
      console.error("AI 문의 분석 오류:", error);

      if (!navigator.onLine) {
        setAnalysisError(
          "네트워크 연결이 불안정합니다. 와이파이 또는 데이터를 확인한 뒤 다시 시도해주세요."
        );
      } else if (error.name === "AbortError") {
        setAnalysisError(
          "문의 분석 시간이 초과되었습니다. 잠시 후 다시 시도해주세요."
        );
      } else {
        setAnalysisError(
          "문의 분석 중 서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
        );
      }
    } finally {
      clearTimeout(timeoutId);
      setIsAnalyzing(false);
    }
  };

  const resetInquiryDraft = () => {
    setUserName("");
    setUserPhone("");
    setInquiryText("");
    setSelectedImage(null);

    setSelectedLocation("");
    setSelectedIssueType("");
    setSelectedTime("");
    setSelectedStatus("");
    setExtraDetail("");

    setFollowupQuestions([]);
    setFollowupAnswers({});

    setSelectedService("");
    setSelectedFaq("");

    setLookupName("");
    setLookupPhone("");
    setLookupSearched(false);

    setIsSubmitting(false);
    setSubmitError("");

    setIsAnalyzing(false);
    setAnalysisError("");
  };

  const handleGoToStadiumStep = () => {
    resetInquiryDraft();
    setStep("stadium");
  };

  const resetForm = () => {
    setStep("language");
    setSelectedLanguage("");
    setSelectedStadium("");
    setSelectedService("");

    setUserName("");
    setUserPhone("");
    setInquiryText("");
    setSelectedImage(null);

    setSelectedLocation("");
    setSelectedIssueType("");
    setSelectedTime("");
    setSelectedStatus("");
    setExtraDetail("");

    setFollowupQuestions([]);
    setFollowupAnswers({});

    setLookupName("");
    setLookupPhone("");
    setLookupSearched(false);

    setSelectedFaq("");

    setIsSubmitting(false);
    setSubmitError("");

    setIsAnalyzing(false);
    setAnalysisError("");
  };

  const handleChangeStadium = (stadiumName) => {
    setSelectedStadium(stadiumName);
  };

  const createFollowupAnswerList = () => {
    return followupQuestions.map((question) => ({
      question_id: question.id,
      field: question.field,
      question: question.question,
      answer: String(followupAnswers[question.id] || "").trim(),
    }));
  };

  const createFollowupSummary = () => {
    const answeredQuestions = createFollowupAnswerList().filter(
      (item) => item.answer
    );

    if (answeredQuestions.length === 0) {
      return "보완답변 없음";
    }

    return answeredQuestions
      .map((item) => `${item.question}: ${item.answer}`)
      .join("\n");
  };

  const createLegacyExtraDetail = () => {
    const extraAnswers = followupQuestions
      .filter((question) => question.field === "extraDetail")
      .map((question) => {
        const answer = String(followupAnswers[question.id] || "").trim();

        if (!answer) {
          return null;
        }

        if (question.suffix) {
          return `${question.question}: ${answer}${question.suffix}`;
        }

        return `${question.question}: ${answer}`;
      })
      .filter(Boolean);

    return extraAnswers.join("\n");
  };

  const handleSubmitInquiry = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    let timeoutId;

    try {
      const stadiumCode = getStadiumCode(selectedStadium);
      const formattedDate = getFormattedDate();

      const nextCount = (stadiumCounters[stadiumCode] || 0) + 1;
      const sequence = String(nextCount).padStart(4, "0");
      const receiptNumber = `${stadiumCode}-${formattedDate}-${sequence}`;

      const zoneId = zoneIdMap[selectedStadium];

      const followupAnswerList = createFollowupAnswerList();
      const followupSummary = createFollowupSummary();

      const aiExtraDetail = createLegacyExtraDetail();
      const manualExtraDetail = extraDetail.trim();

      const combinedExtraDetail = [
        aiExtraDetail,
        manualExtraDetail,
      ]
        .filter(Boolean)
        .join("\n");

      const summaryText = `경기장: ${selectedStadium}
문의 유형: ${selectedIssueType || "없음"}
위치: ${selectedLocation || "없음"}
발생 시점: ${selectedTime || "없음"}
현재 상태 여부: ${selectedStatus || "없음"}
보완질문 및 답변:
${followupSummary}`;

      const formData = new FormData();

      formData.append("original_text", inquiryText);
      formData.append("zone_id", String(zoneId));
      formData.append("user_name", userName.trim());
      formData.append("user_phone", normalizePhone(userPhone));

      formData.append("issue_type", selectedIssueType || "");
      formData.append("location", selectedLocation || "");
      formData.append("occurred_at", selectedTime || "");
      formData.append("current_status", selectedStatus || "");
      formData.append("extra_detail", combinedExtraDetail);
      formData.append("summary", summaryText);

      if (selectedImage instanceof File) {
        formData.append("image", selectedImage);
      }

      const controller = new AbortController();

      timeoutId = setTimeout(() => {
        controller.abort();
      }, 30000);

      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: formData,
        signal: controller.signal,
        headers: {
          "ngrok-skip-browser-warning": "69420",
          Accept: "application/json",
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();

        console.error("전송 실패 상태코드:", response.status);
        console.error("전송 실패 응답본문:", errorText);

        throw new Error(`백엔드 전송 실패: ${response.status}`);
      }

      const submittedInquiry = {
        receiptNumber,
        stadium: selectedStadium,
        userName,
        userPhone,
        status: "접수됨",
        inquiryText,

        followup: {
          location: selectedLocation,
          issueType: selectedIssueType,
          occurredAt: selectedTime,
          currentStatus: selectedStatus,
          extraDetail: combinedExtraDetail,
        },

        followupQuestions,
        followupAnswers,
        followupAnswerList,
      };

      setStadiumCounters((prev) => ({
        ...prev,
        [stadiumCode]: nextCount,
      }));

      setSubmittedInquiries((prev) => [...prev, submittedInquiry]);
      setLatestSubmittedInquiry(submittedInquiry);
      setStep("complete");
    } catch (error) {
      console.error("민원 접수 오류:", error);

      if (!navigator.onLine) {
        setSubmitError(
          "네트워크 연결이 불안정합니다. 와이파이 또는 데이터를 확인한 뒤 다시 시도해주세요."
        );
      } else if (error.name === "AbortError") {
        setSubmitError(
          "접수 결과 확인이 지연되고 있습니다. 중복 접수를 방지하기 위해 잠시 후 접수 조회에서 확인해주세요."
        );
      } else {
        setSubmitError(
          "접수 처리 중 서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
        );
      }
    } finally {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#f5f7fb",
        paddingTop: "32px",
        paddingBottom: "32px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          backgroundColor: "white",
          padding: "40px 24px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "32px", color: "#111" }}>FieldLink</h1>

        {step === "language" && (
          <LanguageStep
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            setStep={setStep}
            languageButtonStyle={languageButtonStyle}
          />
        )}

        {step === "stadium" && (
          <StadiumStep
            selectedLanguage={selectedLanguage}
            selectedStadium={selectedStadium}
            setSelectedStadium={handleChangeStadium}
            setStep={setStep}
            stadiumButtonStyle={stadiumButtonStyle}
          />
        )}

        {step === "service" && (
          <ServiceStep
            selectedLanguage={selectedLanguage}
            selectedStadium={selectedStadium}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            setStep={setStep}
            setLookupName={setLookupName}
            setLookupPhone={setLookupPhone}
            setLookupSearched={setLookupSearched}
            setSelectedFaq={setSelectedFaq}
            serviceButtonStyle={serviceButtonStyle}
            goToStadiumStep={handleGoToStadiumStep}
          />
        )}

        {step === "inquiry" && (
          <InquiryStep
            selectedStadium={selectedStadium}
            userName={userName}
            setUserName={setUserName}
            userPhone={userPhone}
            setUserPhone={setUserPhone}
            inquiryText={inquiryText}
            setInquiryText={setInquiryText}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            analysisError={analysisError}
            clearAnalysisError={() => setAnalysisError("")}
            isAnalyzing={isAnalyzing}
            setStep={(nextStep) => {
              if (nextStep === "followup") {
                handlePrepareFollowup();
                return;
              }

              setStep(nextStep);
            }}
          />
        )}

        {step === "followup" && (
          <FollowupStep
            inquiryText={inquiryText}
            questions={followupQuestions}
            followupAnswers={followupAnswers}
            setFollowupAnswers={setFollowupAnswers}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedIssueType={selectedIssueType}
            setSelectedIssueType={setSelectedIssueType}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            extraDetail={extraDetail}
            setExtraDetail={setExtraDetail}
            setStep={setStep}
            optionButtonStyle={optionButtonStyle}
            handleSubmitInquiry={handleSubmitInquiry}
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        )}

        {step === "faq" && (
          <FaqStep
            selectedFaq={selectedFaq}
            setSelectedFaq={setSelectedFaq}
            selectedStadium={selectedStadium}
            setStep={setStep}
            resetForm={resetForm}
            serviceButtonStyle={serviceButtonStyle}
          />
        )}

        {step === "lookup" && (
          <LookupStep
            lookupName={lookupName}
            setLookupName={setLookupName}
            lookupPhone={lookupPhone}
            setLookupPhone={setLookupPhone}
            lookupSearched={lookupSearched}
            setLookupSearched={setLookupSearched}
            selectedStadium={selectedStadium}
            setStep={setStep}
            resetForm={resetForm}
          />
        )}

        {step === "complete" && (
          <CompleteStep
            latestSubmittedInquiry={latestSubmittedInquiry}
            resetForm={resetForm}
          />
        )}
      </div>
    </div>
  );
}

export default App;