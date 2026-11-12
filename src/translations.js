export const languageOptions = [
  {
    value: "한국어",
    code: "ko",
    label: "한국어",
  },
  {
    value: "English",
    code: "en",
    label: "English",
  },
  {
    value: "日本語",
    code: "ja",
    label: "日本語",
  },
  {
    value: "简体中文",
    code: "zh-CN",
    label: "简体中文",
  },
  {
    value: "Español",
    code: "es",
    label: "Español",
  },
];

export const languageCodeMap = {
  한국어: "ko",
  English: "en",
  日本語: "ja",
  简体中文: "zh-CN",
  Español: "es",
};

export const getLanguageCode = (selectedLanguage) => {
  return languageCodeMap[selectedLanguage] || "ko";
};

export const translations = {
  ko: {
    language: {
      selectLanguage: "언어를 선택해주세요",
      selectedLanguage: "선택된 언어",
      none: "없음",
      next: "다음",
    },

    stadium: {
      selectStadium: "경기장을 선택해주세요",
      selectedLanguage: "선택된 언어",
      selectedStadium: "선택된 경기장",
      none: "없음",
      previous: "이전",
      next: "다음",
    },

    service: {
      selectService: "서비스를 선택해주세요",
      selectedLanguage: "선택된 언어",
      selectedStadium: "선택된 경기장",
      selectedService: "선택된 서비스",
      stadiumGuide: "구장 안내",
      inquiry: "문의·불편사항 접수",
      lookup: "접수 내역 확인",
      none: "없음",
      previous: "이전",
      next: "다음",
    },
  },

  en: {
    language: {
      selectLanguage: "Please select a language",
      selectedLanguage: "Selected language",
      none: "None",
      next: "Next",
    },

    stadium: {
      selectStadium: "Please select a stadium",
      selectedLanguage: "Selected language",
      selectedStadium: "Selected stadium",
      none: "None",
      previous: "Back",
      next: "Next",
    },

    service: {
      selectService: "Please select a service",
      selectedLanguage: "Selected language",
      selectedStadium: "Selected stadium",
      selectedService: "Selected service",
      stadiumGuide: "Stadium Guide",
      inquiry: "Submit an Inquiry",
      lookup: "Check Inquiry Status",
      none: "None",
      previous: "Back",
      next: "Next",
    },
  },

  ja: {
    language: {
      selectLanguage: "言語を選択してください",
      selectedLanguage: "選択した言語",
      none: "なし",
      next: "次へ",
    },

    stadium: {
      selectStadium: "球場を選択してください",
      selectedLanguage: "選択した言語",
      selectedStadium: "選択した球場",
      none: "なし",
      previous: "戻る",
      next: "次へ",
    },

    service: {
      selectService: "サービスを選択してください",
      selectedLanguage: "選択した言語",
      selectedStadium: "選択した球場",
      selectedService: "選択したサービス",
      stadiumGuide: "球場案内",
      inquiry: "お問い合わせ・不便事項の受付",
      lookup: "受付内容の確認",
      none: "なし",
      previous: "戻る",
      next: "次へ",
    },
  },

  "zh-CN": {
    language: {
      selectLanguage: "请选择语言",
      selectedLanguage: "已选择的语言",
      none: "无",
      next: "下一步",
    },

    stadium: {
      selectStadium: "请选择球场",
      selectedLanguage: "已选择的语言",
      selectedStadium: "已选择的球场",
      none: "无",
      previous: "上一步",
      next: "下一步",
    },

    service: {
      selectService: "请选择服务",
      selectedLanguage: "已选择的语言",
      selectedStadium: "已选择的球场",
      selectedService: "已选择的服务",
      stadiumGuide: "球场指南",
      inquiry: "提交咨询或不便事项",
      lookup: "查看受理记录",
      none: "无",
      previous: "上一步",
      next: "下一步",
    },
  },

  es: {
    language: {
      selectLanguage: "Seleccione un idioma",
      selectedLanguage: "Idioma seleccionado",
      none: "Ninguno",
      next: "Siguiente",
    },

    stadium: {
      selectStadium: "Seleccione un estadio",
      selectedLanguage: "Idioma seleccionado",
      selectedStadium: "Estadio seleccionado",
      none: "Ninguno",
      previous: "Anterior",
      next: "Siguiente",
    },

    service: {
      selectService: "Seleccione un servicio",
      selectedLanguage: "Idioma seleccionado",
      selectedStadium: "Estadio seleccionado",
      selectedService: "Servicio seleccionado",
      stadiumGuide: "Guía del estadio",
      inquiry: "Enviar una consulta",
      lookup: "Consultar solicitud",
      none: "Ninguno",
      previous: "Anterior",
      next: "Siguiente",
    },
  },
};

export const getTranslation = (selectedLanguage) => {
  const languageCode = getLanguageCode(selectedLanguage);

  return translations[languageCode] || translations.ko;
};