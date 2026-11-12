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
  },

  en: {
    language: {
      selectLanguage: "Please select a language",
      selectedLanguage: "Selected language",
      none: "None",
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
  },

  "zh-CN": {
    language: {
      selectLanguage: "请选择语言",
      selectedLanguage: "已选择的语言",
      none: "无",
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
  },
};

export const getTranslation = (selectedLanguage) => {
  const languageCode = getLanguageCode(selectedLanguage);

  return translations[languageCode] || translations.ko;
};