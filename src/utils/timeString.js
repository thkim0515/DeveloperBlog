export const timeString = (postdate) => {
  const match = postdate.match(/(\d{4}).(\d{2}).(\d{2})/);

  if (match) {
    const year = match[1].substr(-2);
    const month = match[2];
    const day = match[3];

    return `${year}.${month}.${day}`;
  }
};
