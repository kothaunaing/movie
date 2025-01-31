import { format, parseISO, differenceInYears } from "date-fns";

export function formatMinuteToHour(minutes) {
  const hour = Math.floor(minutes / 60);
  const minutesOutput = Math.round(minutes % 60);

  return `${hour ? hour + "h" : ""} ${
    minutesOutput ? minutesOutput + "m" : ""
  }`;
}

export function formatDate(date) {
  const [year, month, day] = date.split("-");

  return {
    year,
    month,
    day,
  };
}

export function prettyDate(dateString) {
  if (dateString) {
    const birthDate = parseISO(dateString);
    const formattedDate = format(birthDate, "MMMM d, yyyy");

    return formattedDate;
  } else {
    return `Unknown`;
  }
}
export function formatDateWithAge(dateString) {
  if (dateString) {
    const birthDate = parseISO(dateString);
    const formattedDate = format(birthDate, "MMMM d, yyyy");
    const age = differenceInYears(new Date(), birthDate);
    return `${formattedDate} (${age} years old)`;
  } else {
    return `Unknown`;
  }
}

export const convertToKabaeCase = (text) => {
  if (text) {
    const arr = text.split(" ");
    return arr.join("-");
  }
};

export function formatMoney(amount) {
  if (amount >= 1e9) {
    return `$${(amount / 1e9).toFixed(2)} Billion`;
  } else if (amount >= 1e6) {
    return `$${(amount / 1e6).toFixed(2)} Million`;
  } else if (amount >= 1e3) {
    return `$${(amount / 1e3).toFixed(2)}K`;
  } else {
    return `$${amount}`;
  }
}

export function getLanguageFullName(code) {
  const languages = {
    en: "English",
    fr: "French",
    my: "Burmese",
    es: "Spanish",
    de: "German",
    zh: "Chinese",
    ja: "Japanese",
    ru: "Russian",
    ko: "Korean",
    it: "Italian",
    pt: "Portuguese",
    ar: "Arabic",
    hi: "Hindi",
    bn: "Bengali",
    nl: "Dutch",
    tr: "Turkish",
    vi: "Vietnamese",
    th: "Thai",
    sv: "Swedish",
    no: "Norwegian",
    da: "Danish",
    fi: "Finnish",
    pl: "Polish",
    uk: "Ukrainian",
    he: "Hebrew",
    id: "Indonesian",
    ms: "Malay",
    fa: "Persian",
    ro: "Romanian",
    hu: "Hungarian",
    el: "Greek",
    cs: "Czech",
    sr: "Serbian",
    bg: "Bulgarian",
    hr: "Croatian",
    sk: "Slovak",
    sl: "Slovenian",
    lt: "Lithuanian",
    lv: "Latvian",
    et: "Estonian",
    mk: "Macedonian",
    ur: "Urdu",
    sw: "Swahili",
    ta: "Tamil",
    te: "Telugu",
    kn: "Kannada",
    ml: "Malayalam",
    pa: "Punjabi",
    gu: "Gujarati",
  };

  return languages[code] || "Unknown Language";
}

export const baseURL = "https://image.tmdb.org/t/p/w500";
