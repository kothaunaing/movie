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
