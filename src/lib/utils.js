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

export function formatDateWithAge(dateString) {
  const birthDate = parseISO(dateString);
  const formattedDate = format(birthDate, "MMMM d, yyyy");
  const age = differenceInYears(new Date(), birthDate);
  return `${formattedDate} (${age} years old)`;
}

export const baseURL = "https://image.tmdb.org/t/p/w500";
