export const timeString = (postdate) => {
  const match = postdate.match(/(\d{4}).(\d{2}).(\d{2})/);

  if (match) {
    const year = match[1].substr(-2);
    const month = match[2];
    const day = match[3];

    return `${year}.${month}.${day}`;
  }
};

export const timeStringWithHour = (postdate) => {
  const match = postdate.match(/(\d{4}).(\d{2}).(\d{2})T(\d{2}):(\d{2})/);

  if (match) {
    const year = match[1].substr(-2);
    const month = match[2];
    const day = match[3];
    const hours = match[4];
    const minutes = match[5];

    return `${year}-${month}-${day} / ${hours}:${minutes}`;
  }
};

export function timeStringWithKo() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "오후" : "오전";
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().padStart(2, "0");

  return `${ampm} ${hours}:${minutes}:${seconds}`;
}
