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
    return `Unknown Date`;
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
    const arr = text.toLowerCase().split(" ");
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

export function getGenreNameById(genreId, type) {
  const newGenreId = genreId.split("-")[0];

  const MovieGenres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  const TVGenres = {
    10759: "Action & Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    10762: "Kids",
    9648: "Mystery",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi & Fantasy",
    10766: "Soap",
    10767: "Talk",
    10768: "War & Politics",
    37: "Western",
  };

  return type === "movies" ? MovieGenres[newGenreId] : TVGenres[newGenreId];
}

export const baseURL = "https://image.tmdb.org/t/p/w500";
