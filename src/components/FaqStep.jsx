import {
  getLanguageCode,
  getStadiumLabel,
} from "../translations";

function FaqStep({
  selectedLanguage,
  selectedStadium,
  setStep,
  resetForm,
}) {
  const languageCode = getLanguageCode(selectedLanguage);

  const faqTranslations = {
    ko: {
      title: "구장 안내",
      currentStadium: "현재 선택 경기장",
      guideSuffix: "안내",
      description:
        "좌석 배치, 편의시설, 교통 및 주차 정보는 구단별 공식 안내 페이지에서 확인할 수 있습니다.",
      officialGuide: "공식 구장 안내",
      externalNotice:
        "※ 버튼을 누르면 외부 공식 홈페이지로 이동합니다.",

      problemTitle: "현장에 문제가 있나요?",
      problemDescription:
        "시설 고장, 청결 문제, 이용 불편 등 경기장 안에서 발생한 문제는 FieldLink를 통해 접수해 주세요.",
      submitInquiry: "문의·불편사항 접수하기",

      departmentTitle: "FieldLink 관리부서",
      departmentDescription:
        "접수가 어렵거나 별도의 확인이 필요한 경우 관리부서로 연락해 주세요.",
      operatingHours:
        "운영시간: 경기 시작 1시간 전부터 경기 종료 후 30분까지",

      demoPhoneNotice: "※ 시연용 전화번호입니다.",
      realPhoneNotice:
        "※ 실제 서비스 운영 전 해당 경기장의 관리부서 전화번호로 변경해야 합니다.",

      notFoundTitle: "구장 안내 정보를 찾을 수 없습니다.",
      notFoundDescription:
        "이전 화면으로 돌아가 경기장을 다시 선택해 주세요.",

      previous: "이전",
      home: "처음으로",
    },

    en: {
      title: "Stadium Guide",
      currentStadium: "Selected stadium",
      guideSuffix: "Guide",
      description:
        "Seating, facilities, transportation, and parking information can be found on each team's official stadium page.",
      officialGuide: "Official Stadium Guide",
      externalNotice:
        "※ This button will open the team's official website.",

      problemTitle: "Is there a problem at the stadium?",
      problemDescription:
        "Please use FieldLink to report facility issues, cleanliness problems, or other inconveniences inside the stadium.",
      submitInquiry: "Submit an Inquiry",

      departmentTitle: "FieldLink Support",
      departmentDescription:
        "If you have difficulty submitting an inquiry or need additional assistance, please contact the support team.",
      operatingHours:
        "Operating hours: From 1 hour before the game until 30 minutes after the game ends",

      demoPhoneNotice: "※ This phone number is for demonstration purposes.",
      realPhoneNotice:
        "※ Before actual service operation, this number must be replaced with the stadium's official contact number.",

      notFoundTitle: "Stadium guide information could not be found.",
      notFoundDescription:
        "Please return to the previous screen and select the stadium again.",

      previous: "Back",
      home: "Home",
    },

    ja: {
      title: "球場案内",
      currentStadium: "現在選択している球場",
      guideSuffix: "案内",
      description:
        "座席配置、施設、交通、駐車場などの情報は、各球団の公式球場案内ページで確認できます。",
      officialGuide: "公式球場案内",
      externalNotice:
        "※ ボタンを押すと、球団の公式ホームページに移動します。",

      problemTitle: "球場内で問題がありますか？",
      problemDescription:
        "施設の故障、清掃上の問題、利用上の不便など、球場内で発生した問題はFieldLinkから受付してください。",
      submitInquiry: "お問い合わせを受付する",

      departmentTitle: "FieldLink 管理部門",
      departmentDescription:
        "受付が難しい場合や、別途確認が必要な場合は管理部門までご連絡ください。",
      operatingHours:
        "運営時間：試合開始1時間前から試合終了30分後まで",

      demoPhoneNotice: "※ デモ用の電話番号です。",
      realPhoneNotice:
        "※ 実際のサービス開始前に、各球場の管理部門の電話番号へ変更する必要があります。",

      notFoundTitle: "球場案内情報が見つかりません。",
      notFoundDescription:
        "前の画面に戻り、球場をもう一度選択してください。",

      previous: "戻る",
      home: "最初へ",
    },

    "zh-CN": {
      title: "球场指南",
      currentStadium: "当前选择的球场",
      guideSuffix: "指南",
      description:
        "座位分布、便利设施、交通及停车信息可在各球队的官方球场介绍页面中查看。",
      officialGuide: "官方球场指南",
      externalNotice:
        "※ 点击按钮将前往球队官方网站。",

      problemTitle: "球场内遇到问题了吗？",
      problemDescription:
        "如遇设施故障、清洁问题或其他使用不便，请通过FieldLink提交。",
      submitInquiry: "提交咨询或不便事项",

      departmentTitle: "FieldLink 管理部门",
      departmentDescription:
        "如无法正常提交，或需要其他帮助，请联系管理部门。",
      operatingHours:
        "服务时间：比赛开始前1小时至比赛结束后30分钟",

      demoPhoneNotice: "※ 此电话号码仅用于演示。",
      realPhoneNotice:
        "※ 正式运营前，应更换为相应球场管理部门的实际电话号码。",

      notFoundTitle: "无法找到球场指南信息。",
      notFoundDescription:
        "请返回上一页面并重新选择球场。",

      previous: "上一步",
      home: "返回首页",
    },

    es: {
      title: "Guía del estadio",
      currentStadium: "Estadio seleccionado",
      guideSuffix: "Guía oficial del estadio",
      description:
        "La distribución de asientos, las instalaciones, el transporte y el estacionamiento pueden consultarse en la página oficial de cada equipo.",
      officialGuide: "Guía oficial del estadio",
      externalNotice:
        "※ Al pulsar el botón se abrirá el sitio web oficial del equipo.",

      problemTitle: "¿Hay algún problema en el estadio?",
      problemDescription:
        "Utilice FieldLink para informar problemas de instalaciones, limpieza u otras molestias dentro del estadio.",
      submitInquiry: "Enviar una consulta",

      departmentTitle: "Soporte de FieldLink",
      departmentDescription:
        "Si tiene dificultades para enviar una consulta o necesita ayuda adicional, póngase en contacto con el equipo de soporte.",
      operatingHours:
        "Horario: desde 1 hora antes del partido hasta 30 minutos después de su finalización",

      demoPhoneNotice:
        "※ Este número de teléfono se utiliza únicamente para la demostración.",
      realPhoneNotice:
        "※ Antes de la operación real del servicio, deberá sustituirse por el número de contacto oficial del estadio.",

      notFoundTitle:
        "No se pudo encontrar la información del estadio.",
      notFoundDescription:
        "Regrese a la pantalla anterior y seleccione nuevamente el estadio.",

      previous: "Anterior",
      home: "Inicio",
    },
  };

  const text =
    faqTranslations[languageCode] ||
    faqTranslations.ko;

  const stadiumGuideData = {
    "서울종합운동장 야구장": {
      links: [
        {
          teamKo: "LG 트윈스",
          team: "LG Twins",
          url: "https://www.lgtwins.com/twins/about/homeGround?ground=seoul",
        },
        {
          teamKo: "두산 베어스",
          team: "Doosan Bears",
          url: "https://www.doosanbears.com/bears/stadium",
        },
      ],
      phone: "010-0000-0001",
    },

    "고척 스카이돔": {
      links: [
        {
          teamKo: "키움 히어로즈",
          team: "Kiwoom Heroes",
          url: "https://heroesbaseball.co.kr/heroes/stadium/skydome.do",
        },
      ],
      phone: "010-0000-0002",
    },

    "수원 케이티 위즈 파크": {
      links: [
        {
          teamKo: "KT 위즈",
          team: "KT Wiz",
          url: "https://www.ktwiz.co.kr/wizpark/intro",
        },
      ],
      phone: "010-0000-0003",
    },

    "인천 SSG 랜더스필드": {
      links: [
        {
          teamKo: "SSG 랜더스",
          team: "SSG Landers",
          url: "https://www.ssglanders.com/stadium/info",
        },
      ],
      phone: "010-0000-0004",
    },

    "대전 한화생명 볼파크": {
      links: [
        {
          teamKo: "한화 이글스",
          team: "Hanwha Eagles",
          url: "https://www.hanwhaeagles.co.kr/MN/EP/MNEPPI01.do",
        },
      ],
      phone: "010-0000-0005",
    },

    "대구 삼성 라이온즈 파크": {
      links: [
        {
          teamKo: "삼성 라이온즈",
          team: "Samsung Lions",
          url: "https://www.samsunglions.com/intro/intro05_4.asp",
        },
      ],
      phone: "010-0000-0006",
    },

    "광주-기아 챔피언스 필드": {
      links: [
        {
          teamKo: "KIA 타이거즈",
          team: "KIA Tigers",
          url: "https://tigers.co.kr/tigers/champions-field",
        },
      ],
      phone: "010-0000-0007",
    },

    창원NC파크: {
      links: [
        {
          teamKo: "NC 다이노스",
          team: "NC Dinos",
          url: "https://www.ncdinos.com/dinos/stadium.do",
        },
      ],
      phone: "010-0000-0008",
    },

    "사직 야구장": {
      links: [
        {
          teamKo: "롯데 자이언츠",
          team: "Lotte Giants",
          url: "https://www.giantsclub.com/html/?pcode=207",
        },
      ],
      phone: "010-0000-0009",
    },
  };

  const currentGuide =
    stadiumGuideData[selectedStadium];

  const getLinkLabel = (link) => {
    if (languageCode === "ko") {
      return `${link.teamKo} ${text.officialGuide}`;
    }

    return `${link.team} - ${text.officialGuide}`;
  };

  const linkButtonStyle = {
    display: "block",
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #dbeafe",
    backgroundColor: "#eff6ff",
    color: "#1d4ed8",
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "inherit",
    textAlign: "center",
    textDecoration: "none",
    boxSizing: "border-box",
    cursor: "pointer",
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
        {text.title}
      </p>

      <p
        style={{
          marginBottom: "20px",
          color: "#777",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {text.currentStadium}:{" "}
        {getStadiumLabel(
          selectedStadium,
          selectedLanguage
        )}
      </p>

      {currentGuide ? (
        <>
          <div
            style={{
              textAlign: "left",
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
            }}
          >
            <p
              style={{
                margin: "0 0 8px 0",
                color: "#333",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {getStadiumLabel(
                selectedStadium,
                selectedLanguage
              )}{" "}
              {text.guideSuffix}
            </p>

            <p
              style={{
                margin: "0 0 18px 0",
                color: "#666",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {text.description}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {currentGuide.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkButtonStyle}
                >
                  {getLinkLabel(link)}
                </a>
              ))}
            </div>

            <p
              style={{
                margin: "12px 0 0 0",
                color: "#888",
                fontSize: "12px",
                lineHeight: "1.5",
              }}
            >
              {text.externalNotice}
            </p>
          </div>

          <div
            style={{
              textAlign: "left",
              marginTop: "16px",
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #bfdbfe",
              backgroundColor: "#f8fbff",
            }}
          >
            <p
              style={{
                margin: "0 0 8px 0",
                color: "#1e3a8a",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {text.problemTitle}
            </p>

            <p
              style={{
                margin: "0 0 16px 0",
                color: "#555",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {text.problemDescription}
            </p>

            <button
              type="button"
              onClick={() => setStep("inquiry")}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#2563eb",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: "bold",
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              {text.submitInquiry}
            </button>
          </div>

          <div
            style={{
              textAlign: "left",
              marginTop: "16px",
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #e5e7eb",
              backgroundColor: "#f8fafc",
            }}
          >
            <p
              style={{
                margin: "0 0 8px 0",
                color: "#333",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {text.departmentTitle}
            </p>

            <p
              style={{
                margin: "0 0 10px 0",
                color: "#555",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              {text.departmentDescription}
            </p>

            <p
              style={{
                margin: "0 0 10px 0",
                color: "#555",
                fontSize: "13px",
                lineHeight: "1.6",
              }}
            >
              {text.operatingHours}
            </p>

            <p
              style={{
                margin: "0 0 8px 0",
                color: "#111",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {currentGuide.phone}
            </p>

            <p
              style={{
                margin: "0 0 4px 0",
                color: "#888",
                fontSize: "12px",
                lineHeight: "1.5",
              }}
            >
              {text.demoPhoneNotice}
            </p>

            <p
              style={{
                margin: 0,
                color: "#888",
                fontSize: "12px",
                lineHeight: "1.5",
              }}
            >
              {text.realPhoneNotice}
            </p>
          </div>
        </>
      ) : (
        <div
          style={{
            textAlign: "left",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #e5e7eb",
            backgroundColor: "#f8fafc",
          }}
        >
          <p
            style={{
              margin: "0 0 8px 0",
              color: "#333",
              fontWeight: "bold",
            }}
          >
            {text.notFoundTitle}
          </p>

          <p
            style={{
              margin: 0,
              color: "#666",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            {text.notFoundDescription}
          </p>
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
          onClick={() => setStep("service")}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            backgroundColor: "#ffffff",
            color: "#111",
            fontSize: "16px",
            fontFamily: "inherit",
            cursor: "pointer",
          }}
        >
          {text.previous}
        </button>

        <button
          type="button"
          onClick={resetForm}
          style={{
            flex: 1,
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
          {text.home}
        </button>
      </div>
    </>
  );
}

export default FaqStep;