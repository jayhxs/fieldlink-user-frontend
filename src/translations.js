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

    inquiry: {
      title: "문의·불편사항 접수",
      currentStadium: "현재 선택 경기장",
      warningTitle: "정확한 현장 대응을 위해 실제 정보를 입력해주세요.",
      warningText:
        "이름, 전화번호 및 문의 내용에 허위 정보가 포함되거나 장난성 신고로 판단될 경우 접수 처리에 제한이 있거나 법적 책임이 발생할 수 있습니다.",
      name: "이름",
      phone: "전화번호",
      inquiryText: "문의 내용",
      inquiryPlaceholder:
        "언제, 어디서, 어떤 문제가 발생하였는지 자유롭게 작성해주세요.\n예: 현재 3루 내야 2층 화장실에 휴지가 부족합니다.",
      image: "사진 첨부",
      selectImage: "사진 선택",
      imageOptional: "사진은 선택사항입니다.",
      attachedFile: "첨부된 파일",
      cancel: "취소",
      noImage: "첨부된 사진이 없습니다.",
      previous: "이전",
      next: "다음",
      analyzing: "분석 중...",
      nameRequired: "이름을 입력해주세요.",
      nameTooShort: "이름은 2자 이상 입력해주세요.",
      nameTooLong: "이름은 30자 이하로 입력해주세요.",
      nameInvalid: "올바른 이름을 입력해주세요.",
      nameRepeated: "올바른 이름을 입력해주세요.",
      phoneRequired: "전화번호를 입력해주세요.",
      phoneInvalid:
        "010으로 시작하는 휴대전화 번호 11자리를 입력해주세요.",
      inquiryRequired: "문의 내용을 입력해주세요.",
      inquiryInvalid:
        "문의 내용을 이해하기 어렵습니다. 발생한 상황을 조금 더 구체적으로 입력해주세요.",
    },

    followup: {
      title: "추가 정보 입력",
      description:
        "문의 내용을 바탕으로 현장 대응에 필요한 정보를 추가로 입력해주세요.",
      writtenInquiry: "작성한 문의 내용",
      extraDetail:
        "추가로 전달할 내용이 있다면 입력해주세요. (선택)",
      extraDetailPlaceholder: "추가로 전달할 내용을 입력해주세요.",
      previous: "이전",
      submit: "접수하기",
      submitting: "접수 중...",
    },

    lookup: {
      title: "접수 내역 확인",
      currentStadium: "현재 선택 경기장",
      description:
        "접수 시 입력한 이름과 전화번호로 접수 내역을 확인할 수 있습니다.",
      name: "이름",
      phone: "전화번호",
      search: "조회하기",
      searching: "조회 중...",
      result: "조회 결과",
      count: "건",
      item: "접수 내역",
      status: "상태",
      inquiryText: "문의 내용",
      createdAt: "접수 시간",
      noInfo: "정보 없음",
      notFound:
        "입력한 정보로 조회되는 접수 내역이 없습니다.",
      checkAgain:
        "경기장 선택 또는 이름과 전화번호를 다시 한 번 확인해주세요.",
      networkError:
        "인터넷 연결이 끊어졌습니다. 와이파이 또는 데이터를 확인한 뒤 다시 시도해주세요.",
      timeoutError:
        "서버 응답 시간이 초과되었습니다. 잠시 후 다시 시도해주세요.",
      serverError:
        "접수 내역을 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      previous: "이전",
      home: "처음으로",
      statusReceived: "접수됨",
      statusProcessing: "처리 중",
      statusComplete: "처리 완료",
    },

    complete: {
      title: "접수가 완료되었습니다",
      description:
        "입력하신 이름과 전화번호로 접수 내역을 조회할 수 있습니다.",
      original: "원문 내용",
      summary: "접수 요약",
      stadium: "경기장",
      issueType: "문의 유형",
      location: "위치",
      occurredAt: "발생 시점",
      currentStatus: "현재 상태",
      extraDetail: "추가 설명",
      none: "없음",
      home: "처음으로",
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

    inquiry: {
      title: "Submit an Inquiry",
      currentStadium: "Selected stadium",
      warningTitle:
        "Please enter accurate information for proper on-site assistance.",
      warningText:
        "False information or prank reports may result in restrictions on processing and may lead to legal responsibility.",
      name: "Name",
      phone: "Phone number",
      inquiryText: "Inquiry details",
      inquiryPlaceholder:
        "Please describe when, where, and what happened.\nExample: There is no toilet paper in the restroom on the second floor near third base.",
      image: "Attach Photo",
      selectImage: "Select Photo",
      imageOptional: "Attaching a photo is optional.",
      attachedFile: "Attached file",
      cancel: "Cancel",
      noImage: "No photo attached.",
      previous: "Back",
      next: "Next",
      analyzing: "Analyzing...",
      nameRequired: "Please enter your name.",
      nameTooShort: "Please enter at least 2 characters for your name.",
      nameTooLong: "Please enter no more than 30 characters for your name.",
      nameInvalid: "Please enter a valid name.",
      nameRepeated: "Please enter a valid name.",
      phoneRequired: "Please enter your phone number.",
      phoneInvalid:
        "Please enter an 11-digit Korean mobile number starting with 010.",
      inquiryRequired: "Please enter your inquiry.",
      inquiryInvalid:
        "The inquiry is difficult to understand. Please describe the situation in more detail.",
    },

    followup: {
      title: "Additional Information",
      description:
        "Please provide any additional information needed for on-site assistance.",
      writtenInquiry: "Your inquiry",
      extraDetail:
        "Please enter any additional information you would like to provide. (Optional)",
      extraDetailPlaceholder: "Enter additional information.",
      previous: "Back",
      submit: "Submit",
      submitting: "Submitting...",
    },

    lookup: {
      title: "Check Inquiry Status",
      currentStadium: "Selected stadium",
      description:
        "You can check your inquiry using the name and phone number entered when submitting it.",
      name: "Name",
      phone: "Phone number",
      search: "Search",
      searching: "Searching...",
      result: "Search results",
      count: "",
      item: "Inquiry",
      status: "Status",
      inquiryText: "Inquiry",
      createdAt: "Submitted at",
      noInfo: "No information",
      notFound:
        "No inquiry was found with the information entered.",
      checkAgain:
        "Please check the selected stadium, name, and phone number again.",
      networkError:
        "The internet connection has been lost. Check your Wi-Fi or mobile data and try again.",
      timeoutError:
        "The server response timed out. Please try again shortly.",
      serverError:
        "An error occurred while loading your inquiry. Please try again shortly.",
      previous: "Back",
      home: "Home",
      statusReceived: "Received",
      statusProcessing: "In Progress",
      statusComplete: "Completed",
    },

    complete: {
      title: "Your inquiry has been submitted",
      description:
        "You can check your inquiry using the name and phone number you entered.",
      original: "Original inquiry",
      summary: "Submission summary",
      stadium: "Stadium",
      issueType: "Inquiry type",
      location: "Location",
      occurredAt: "Time of occurrence",
      currentStatus: "Current status",
      extraDetail: "Additional details",
      none: "None",
      home: "Home",
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

    inquiry: {
      title: "お問い合わせ・不便事項の受付",
      currentStadium: "現在選択している球場",
      warningTitle:
        "正確な現場対応のため、正しい情報を入力してください。",
      warningText:
        "虚偽の情報やいたずら目的の申告と判断された場合、受付が制限されたり、法的責任が発生する場合があります。",
      name: "お名前",
      phone: "電話番号",
      inquiryText: "お問い合わせ内容",
      inquiryPlaceholder:
        "いつ、どこで、どのような問題が発生したか自由に入力してください。\n例：現在、3塁側内野2階のトイレでトイレットペーパーが不足しています。",
      image: "写真を添付",
      selectImage: "写真を選択",
      imageOptional: "写真の添付は任意です。",
      attachedFile: "添付ファイル",
      cancel: "取消",
      noImage: "添付された写真はありません。",
      previous: "戻る",
      next: "次へ",
      analyzing: "分析中...",
      nameRequired: "お名前を入力してください。",
      nameTooShort: "お名前は2文字以上入力してください。",
      nameTooLong: "お名前は30文字以内で入力してください。",
      nameInvalid: "正しいお名前を入力してください。",
      nameRepeated: "正しいお名前を入力してください。",
      phoneRequired: "電話番号を入力してください。",
      phoneInvalid:
        "010から始まる韓国の携帯電話番号11桁を入力してください。",
      inquiryRequired: "お問い合わせ内容を入力してください。",
      inquiryInvalid:
        "内容を理解することができません。発生した状況をもう少し詳しく入力してください。",
    },

    followup: {
      title: "追加情報の入力",
      description:
        "お問い合わせ内容をもとに、現場対応に必要な追加情報を入力してください。",
      writtenInquiry: "入力したお問い合わせ内容",
      extraDetail:
        "追加で伝えたい内容があれば入力してください。（任意）",
      extraDetailPlaceholder:
        "追加で伝えたい内容を入力してください。",
      previous: "戻る",
      submit: "受付する",
      submitting: "受付中...",
    },

    lookup: {
      title: "受付内容の確認",
      currentStadium: "現在選択している球場",
      description:
        "受付時に入力したお名前と電話番号で受付内容を確認できます。",
      name: "お名前",
      phone: "電話番号",
      search: "照会する",
      searching: "照会中...",
      result: "照会結果",
      count: "件",
      item: "受付内容",
      status: "状態",
      inquiryText: "お問い合わせ内容",
      createdAt: "受付時間",
      noInfo: "情報なし",
      notFound:
        "入力した情報に一致する受付内容がありません。",
      checkAgain:
        "球場の選択、お名前、電話番号をもう一度確認してください。",
      networkError:
        "インターネット接続が切断されています。Wi-Fiまたはモバイルデータを確認して再度お試しください。",
      timeoutError:
        "サーバーの応答時間を超過しました。しばらくしてから再度お試しください。",
      serverError:
        "受付内容の読み込み中にエラーが発生しました。しばらくしてから再度お試しください。",
      previous: "戻る",
      home: "最初へ",
      statusReceived: "受付済み",
      statusProcessing: "処理中",
      statusComplete: "処理完了",
    },

    complete: {
      title: "受付が完了しました",
      description:
        "入力したお名前と電話番号で受付内容を確認できます。",
      original: "お問い合わせ原文",
      summary: "受付概要",
      stadium: "球場",
      issueType: "お問い合わせ種類",
      location: "場所",
      occurredAt: "発生時点",
      currentStatus: "現在の状態",
      extraDetail: "追加説明",
      none: "なし",
      home: "最初へ",
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

    inquiry: {
      title: "提交咨询或不便事项",
      currentStadium: "当前选择的球场",
      warningTitle: "为了准确处理现场情况，请填写真实信息。",
      warningText:
        "如果姓名、电话号码或咨询内容包含虚假信息，或被判断为恶作剧举报，受理可能受到限制，并可能承担法律责任。",
      name: "姓名",
      phone: "电话号码",
      inquiryText: "咨询内容",
      inquiryPlaceholder:
        "请说明问题发生的时间、地点以及具体情况。\n例：目前三垒侧内野二层洗手间的卫生纸不足。",
      image: "附加照片",
      selectImage: "选择照片",
      imageOptional: "照片为可选项。",
      attachedFile: "已附加文件",
      cancel: "取消",
      noImage: "没有附加照片。",
      previous: "上一步",
      next: "下一步",
      analyzing: "分析中...",
      nameRequired: "请输入姓名。",
      nameTooShort: "姓名至少请输入2个字符。",
      nameTooLong: "姓名最多可输入30个字符。",
      nameInvalid: "请输入有效的姓名。",
      nameRepeated: "请输入有效的姓名。",
      phoneRequired: "请输入电话号码。",
      phoneInvalid: "请输入以010开头的11位韩国手机号码。",
      inquiryRequired: "请输入咨询内容。",
      inquiryInvalid:
        "无法理解您的咨询内容。请更具体地说明发生的情况。",
    },

    followup: {
      title: "填写补充信息",
      description:
        "请根据咨询内容填写现场处理所需的补充信息。",
      writtenInquiry: "您填写的咨询内容",
      extraDetail:
        "如有其他需要说明的内容，请填写。（可选）",
      extraDetailPlaceholder:
        "请输入其他需要说明的内容。",
      previous: "上一步",
      submit: "提交",
      submitting: "提交中...",
    },

    lookup: {
      title: "查看受理记录",
      currentStadium: "当前选择的球场",
      description:
        "可使用提交时填写的姓名和电话号码查看受理记录。",
      name: "姓名",
      phone: "电话号码",
      search: "查询",
      searching: "查询中...",
      result: "查询结果",
      count: "条",
      item: "受理记录",
      status: "状态",
      inquiryText: "咨询内容",
      createdAt: "受理时间",
      noInfo: "无信息",
      notFound:
        "未找到与输入信息相符的受理记录。",
      checkAgain:
        "请再次确认所选球场、姓名和电话号码。",
      networkError:
        "网络连接已断开。请检查Wi-Fi或移动数据后重试。",
      timeoutError:
        "服务器响应超时。请稍后重试。",
      serverError:
        "加载受理记录时发生错误。请稍后重试。",
      previous: "上一步",
      home: "返回首页",
      statusReceived: "已受理",
      statusProcessing: "处理中",
      statusComplete: "处理完成",
    },

    complete: {
      title: "提交成功",
      description:
        "可使用您填写的姓名和电话号码查看受理记录。",
      original: "原始咨询内容",
      summary: "受理摘要",
      stadium: "球场",
      issueType: "咨询类型",
      location: "位置",
      occurredAt: "发生时间",
      currentStatus: "当前状态",
      extraDetail: "补充说明",
      none: "无",
      home: "返回首页",
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

    inquiry: {
      title: "Enviar una consulta",
      currentStadium: "Estadio seleccionado",
      warningTitle:
        "Ingrese información real para permitir una respuesta adecuada.",
      warningText:
        "La información falsa o los reportes realizados como broma pueden provocar restricciones en la atención y posibles responsabilidades legales.",
      name: "Nombre",
      phone: "Número de teléfono",
      inquiryText: "Detalles de la consulta",
      inquiryPlaceholder:
        "Describa cuándo, dónde y qué problema ocurrió.\nEjemplo: Actualmente falta papel higiénico en el baño del segundo piso cerca de la tercera base.",
      image: "Adjuntar foto",
      selectImage: "Seleccionar foto",
      imageOptional: "Adjuntar una foto es opcional.",
      attachedFile: "Archivo adjunto",
      cancel: "Cancelar",
      noImage: "No hay ninguna foto adjunta.",
      previous: "Anterior",
      next: "Siguiente",
      analyzing: "Analizando...",
      nameRequired: "Ingrese su nombre.",
      nameTooShort: "El nombre debe tener al menos 2 caracteres.",
      nameTooLong: "El nombre debe tener un máximo de 30 caracteres.",
      nameInvalid: "Ingrese un nombre válido.",
      nameRepeated: "Ingrese un nombre válido.",
      phoneRequired: "Ingrese su número de teléfono.",
      phoneInvalid:
        "Ingrese un número de móvil coreano de 11 dígitos que comience por 010.",
      inquiryRequired: "Ingrese los detalles de su consulta.",
      inquiryInvalid:
        "No se puede comprender la consulta. Describa la situación con más detalle.",
    },

    followup: {
      title: "Información adicional",
      description:
        "Proporcione la información adicional necesaria para la atención en el lugar.",
      writtenInquiry: "Su consulta",
      extraDetail:
        "Ingrese cualquier información adicional que desee proporcionar. (Opcional)",
      extraDetailPlaceholder:
        "Ingrese información adicional.",
      previous: "Anterior",
      submit: "Enviar",
      submitting: "Enviando...",
    },

    lookup: {
      title: "Consultar solicitud",
      currentStadium: "Estadio seleccionado",
      description:
        "Puede consultar su solicitud con el nombre y número de teléfono utilizados al enviarla.",
      name: "Nombre",
      phone: "Número de teléfono",
      search: "Consultar",
      searching: "Consultando...",
      result: "Resultados",
      count: "",
      item: "Solicitud",
      status: "Estado",
      inquiryText: "Consulta",
      createdAt: "Fecha de recepción",
      noInfo: "Sin información",
      notFound:
        "No se encontró ninguna solicitud con la información introducida.",
      checkAgain:
        "Compruebe nuevamente el estadio, el nombre y el número de teléfono.",
      networkError:
        "Se perdió la conexión a Internet. Compruebe su Wi-Fi o datos móviles e inténtelo de nuevo.",
      timeoutError:
        "Se agotó el tiempo de respuesta del servidor. Inténtelo de nuevo en unos momentos.",
      serverError:
        "Se produjo un error al cargar la solicitud. Inténtelo de nuevo en unos momentos.",
      previous: "Anterior",
      home: "Inicio",
      statusReceived: "Recibida",
      statusProcessing: "En proceso",
      statusComplete: "Completada",
    },

    complete: {
      title: "La solicitud se ha enviado correctamente",
      description:
        "Puede consultar la solicitud con el nombre y número de teléfono introducidos.",
      original: "Consulta original",
      summary: "Resumen de la solicitud",
      stadium: "Estadio",
      issueType: "Tipo de consulta",
      location: "Ubicación",
      occurredAt: "Momento del incidente",
      currentStatus: "Estado actual",
      extraDetail: "Información adicional",
      none: "Ninguna",
      home: "Inicio",
    },
  },
};

export const stadiumLabels = {
  "서울종합운동장 야구장": {
    ko: "서울종합운동장 야구장",
    en: "Jamsil Baseball Stadium",
    ja: "蚕室野球場",
    "zh-CN": "蚕室棒球场",
    es: "Estadio de Béisbol de Jamsil",
  },

  "고척 스카이돔": {
    ko: "고척 스카이돔",
    en: "Gocheok Sky Dome",
    ja: "高尺スカイドーム",
    "zh-CN": "高尺天空巨蛋",
    es: "Gocheok Sky Dome",
  },

  "수원 케이티 위즈 파크": {
    ko: "수원 케이티 위즈 파크",
    en: "Suwon KT Wiz Park",
    ja: "水原KTウィズパーク",
    "zh-CN": "水原KT Wiz Park",
    es: "Suwon KT Wiz Park",
  },

  "인천 SSG 랜더스필드": {
    ko: "인천 SSG 랜더스필드",
    en: "Incheon SSG Landers Field",
    ja: "仁川SSGランダースフィールド",
    "zh-CN": "仁川SSG Landers Field",
    es: "Incheon SSG Landers Field",
  },

  "대전 한화생명 볼파크": {
    ko: "대전 한화생명 볼파크",
    en: "Daejeon Hanwha Life Ballpark",
    ja: "大田ハンファ生命ボールパーク",
    "zh-CN": "大田韩华生命棒球场",
    es: "Daejeon Hanwha Life Ballpark",
  },

  "대구 삼성 라이온즈 파크": {
    ko: "대구 삼성 라이온즈 파크",
    en: "Daegu Samsung Lions Park",
    ja: "大邱サムスン・ライオンズ・パーク",
    "zh-CN": "大邱三星狮子公园",
    es: "Daegu Samsung Lions Park",
  },

  "광주-기아 챔피언스 필드": {
    ko: "광주-기아 챔피언스 필드",
    en: "Gwangju-KIA Champions Field",
    ja: "光州KIAチャンピオンズフィールド",
    "zh-CN": "光州KIA冠军球场",
    es: "Gwangju-KIA Champions Field",
  },

  창원NC파크: {
    ko: "창원NC파크",
    en: "Changwon NC Park",
    ja: "昌原NCパーク",
    "zh-CN": "昌原NC公园",
    es: "Changwon NC Park",
  },

  "사직 야구장": {
    ko: "사직 야구장",
    en: "Sajik Baseball Stadium",
    ja: "社稷野球場",
    "zh-CN": "社稷棒球场",
    es: "Estadio de Béisbol de Sajik",
  },
};

export const getStadiumLabel = (stadiumName, selectedLanguage) => {
  const languageCode = getLanguageCode(selectedLanguage);

  return (
    stadiumLabels[stadiumName]?.[languageCode] ||
    stadiumLabels[stadiumName]?.ko ||
    stadiumName
  );
};

export const getTranslation = (selectedLanguage) => {
  const languageCode = getLanguageCode(selectedLanguage);

  return translations[languageCode] || translations.ko;
};