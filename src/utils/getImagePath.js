const IMAGE_URL = "https://d3kcrktwedekfj.cloudfront.net/";

export const getLanguageIcon = language => {
  return `${IMAGE_URL}svgs/${language}.svg`;
};

export const getProfileImg = imagePath => {
  return `${IMAGE_URL}profileImg/${imagePath}`;
};
