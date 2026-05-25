import { useState } from "react";
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

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedIssueType, setSelectedIssueType] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [extraDetail, setExtraDetail] = useState("");

  const [lookupName, setLookupName] = useState("");
  const [lookupPhone, setLookupPhone] = useState("");
  const [lookupSearched, setLookupSearched] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState("");

  const [submittedInquiries, setSubmittedInquiries] = useState([]);
  const [stadiumCounters, setStadiumCounters] = useState({});
  const [latestSubmittedInquiry, setLatestSubmittedInquiry] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const languageButtonStyle = (language) => ({
    padding: "14px",
    borderRadius: "12px",
    border:
      selectedLanguage === language ? "2px solid #2563eb" : "1px solid #ddd",
    backgroundColor: selectedLanguage === language ? "#eff6ff" : "#ffffff",
    color: "#111",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: selectedLanguage === language ? "bold" : "normal",
  });

  const stadiumButtonStyle = (stadium) => ({
    padding: "14px",
    borderRadius: "12px",
    border:
      selectedStadium === stadium ? "2px solid #2563eb" : "1px solid #ddd",
    backgroundColor: selectedStadium === stadium ? "#eff6ff" : "#ffffff",
    color: "#111",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: selectedStadium === stadium ? "bold" : "normal",
  });

  const serviceButtonStyle = (service) => ({
    padding: "14px",
    borderRadius: "12px",
    border:
      selectedService === service ? "2px solid #2563eb" : "1px solid #ddd",
    backgroundColor: selectedService === service ? "#eff6ff" : "#ffffff",
    color: "#111",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: selectedService === service ? "bold" : "normal",
  });

  const optionButtonStyle = (selectedValue, currentValue) => ({
    padding: "10px 12px",
    borderRadius: "10px",
    border:
      selectedValue === currentValue ? "2px solid #2563eb" : "1px solid #ddd",
    backgroundColor: selectedValue === currentValue ? "#eff6ff" : "#ffffff",
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
    창원NC파크: "cw",
    "사직 야구장": "sj",
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
    setSelectedService("");
    setSelectedFaq("");
    setLookupName("");
    setLookupPhone("");
    setLookupSearched(false);
    setIsSubmitting(false);
    setSubmitError("");
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
    setLookupName("");
    setLookupPhone("");
    setLookupSearched(false);
    setSelectedFaq("");
    setIsSubmitting(false);
    setSubmitError("");
  };

  const handleChangeStadium = (stadiumName) => {
    setSelectedStadium(stadiumName);
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

      const zoneIdMap = {
        "서울종합운동장 야구장": 1,
        "고척 스카이돔": 2,
        "수원 케이티 위즈 파크": 3,
        "인천 SSG 랜더스필드": 4,
        "대전 한화생명 볼파크": 5,
        "대구 삼성 라이온즈 파크": 6,
        "광주-기아 챔피언스 필드": 7,
        창원NC파크: 8,
        "사직 야구장": 9,
      };

      const zoneId = zoneIdMap[selectedStadium];

      const summaryText = `경기장: ${selectedStadium}
문의 유형: ${selectedIssueType || "없음"}
위치: ${selectedLocation || "없음"}
발생 시점: ${selectedTime || "없음"}
현재 상태 여부: ${selectedStatus || "없음"}
추가 설명: ${extraDetail || "없음"}`;

      const formData = new FormData();

      formData.append("original_text", inquiryText);
      formData.append("zone_id", String(zoneId));
      formData.append("user_name", userName.trim());
      formData.append("user_phone", normalizePhone(userPhone));

      formData.append("issue_type", selectedIssueType || "");
      formData.append("location", selectedLocation || "");
      formData.append("occurred_at", selectedTime || "");
      formData.append("current_status", selectedStatus || "");
      formData.append("extra_detail", extraDetail || "");
      formData.append("summary", summaryText);

      if (selectedImage instanceof File) {
        formData.append("image", selectedImage);
      }

      const controller = new AbortController();

      timeoutId = setTimeout(() => {
        controller.abort();
      }, 8000);

      const response = await fetch("/api/inquiries", {
        method: "POST",
        body: formData,
        signal: controller.signal,
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
          extraDetail,
        },
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

      if (error.name === "AbortError") {
        setSubmitError(
          "접수 전송 시간이 초과되었습니다. 네트워크 상태 또는 서버 연결 상태를 확인한 뒤 다시 시도해주세요."
        );
      } else {
        setSubmitError(
          "접수 전송에 실패했습니다. 네트워크 상태 또는 서버 연결 상태를 확인한 뒤 다시 시도해주세요."
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
        alignItems: "center",
        backgroundColor: "#f5f7fb",
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
            setStep={setStep}
          />
        )}

        {step === "followup" && (
          <FollowupStep
            inquiryText={inquiryText}
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