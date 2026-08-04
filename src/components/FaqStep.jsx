function FaqStep({
  selectedStadium,
  setStep,
  resetForm,
}) {
  const stadiumGuideData = {
    "서울종합운동장 야구장": {
      links: [
        {
          label: "LG 트윈스 공식 구장 안내",
          url: "https://www.lgtwins.com/twins/about/homeGround?ground=seoul",
        },
        {
          label: "두산 베어스 공식 구장 안내",
          url: "https://www.doosanbears.com/bears/stadium",
        },
      ],
      phone: "010-0000-0001",
    },

    "고척 스카이돔": {
      links: [
        {
          label: "키움 히어로즈 공식 구장 안내",
          url: "https://heroesbaseball.co.kr/heroes/stadium/skydome.do",
        },
      ],
      phone: "010-0000-0002",
    },

    "수원 케이티 위즈 파크": {
      links: [
        {
          label: "KT 위즈 공식 구장 안내",
          url: "https://www.ktwiz.co.kr/wizpark/intro",
        },
      ],
      phone: "010-0000-0003",
    },

    "인천 SSG 랜더스필드": {
      links: [
        {
          label: "SSG 랜더스 공식 구장 안내",
          url: "https://www.ssglanders.com/stadium/info",
        },
      ],
      phone: "010-0000-0004",
    },

    "대전 한화생명 볼파크": {
      links: [
        {
          label: "한화 이글스 공식 구장 안내",
          url: "https://www.hanwhaeagles.co.kr/MN/EP/MNEPPI01.do",
        },
      ],
      phone: "010-0000-0005",
    },

    "대구 삼성 라이온즈 파크": {
      links: [
        {
          label: "삼성 라이온즈 공식 구장 안내",
          url: "https://www.samsunglions.com/intro/intro05_4.asp",
        },
      ],
      phone: "010-0000-0006",
    },

    "광주-기아 챔피언스 필드": {
      links: [
        {
          label: "KIA 타이거즈 공식 구장 안내",
          url: "https://tigers.co.kr/tigers/champions-field",
        },
      ],
      phone: "010-0000-0007",
    },

    창원NC파크: {
      links: [
        {
          label: "NC 다이노스 공식 구장 안내",
          url: "https://www.ncdinos.com/dinos/stadium.do",
        },
      ],
      phone: "010-0000-0008",
    },

    "사직 야구장": {
      links: [
        {
          label: "롯데 자이언츠 공식 구장 안내",
          url: "https://www.giantsclub.com/html/?pcode=207",
        },
      ],
      phone: "010-0000-0009",
    },
  };

  const currentGuide = stadiumGuideData[selectedStadium];

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
        구장 안내
      </p>

      <p
        style={{
          marginBottom: "20px",
          color: "#777",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        현재 선택 경기장: {selectedStadium}
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
              {selectedStadium} 안내
            </p>

            <p
              style={{
                margin: "0 0 18px 0",
                color: "#666",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              좌석 배치, 편의시설, 교통 및 주차 정보는 구단별 공식 안내
              페이지에서 확인할 수 있습니다.
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
                  {link.label}
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
              ※ 버튼을 누르면 외부 공식 홈페이지로 이동합니다.
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
              현장에 문제가 있나요?
            </p>

            <p
              style={{
                margin: "0 0 16px 0",
                color: "#555",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              시설 고장, 청결 문제, 이용 불편 등 경기장 안에서 발생한 문제는
              FieldLink를 통해 접수해 주세요.
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
              문의·불편사항 접수하기
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
              FieldLink 관리부서
            </p>

            <p
              style={{
                margin: "0 0 10px 0",
                color: "#555",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              접수가 어렵거나 별도의 확인이 필요한 경우 관리부서로 연락해
              주세요.
            </p>

            <p
              style={{
                margin: "0 0 10px 0",
                color: "#555",
                fontSize: "13px",
                lineHeight: "1.6",
              }}
            >
              운영시간: 경기 시작 1시간 전부터 경기 종료 후 30분까지
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
              ※ 시연용 전화번호입니다.
            </p>

            <p
              style={{
                margin: 0,
                color: "#888",
                fontSize: "12px",
                lineHeight: "1.5",
              }}
            >
              ※ 실제 서비스 운영 전 해당 경기장의 관리부서 전화번호로
              변경해야 합니다.
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
            구장 안내 정보를 찾을 수 없습니다.
          </p>

          <p
            style={{
              margin: 0,
              color: "#666",
              fontSize: "14px",
              lineHeight: "1.6",
            }}
          >
            이전 화면으로 돌아가 경기장을 다시 선택해 주세요.
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
          이전
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
          처음으로
        </button>
      </div>
    </>
  );
}

export default FaqStep;