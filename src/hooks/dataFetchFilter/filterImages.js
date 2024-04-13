import { decryptData } from "../../js/secure";

export const filterImages = (images, searchTerm, value, selectedIcon) => {
  let filterimages = [];

  if (images) {
    filterimages = images.filter((img) => img.publicPrivate === true);
  }

  if (searchTerm) {
    filterimages = images.filter(
      (img) =>
        img.title.includes(searchTerm) || img.nickname.includes(searchTerm)
    );
  } else if (selectedIcon && `${selectedIcon}.svg`) {
    if (!(selectedIcon === "back")) {
      filterimages = images.filter(
        (img) => `${img.language}.svg` === `${selectedIcon}.svg`
      );
    }
  } else {
    filterimages = images;
  }

  const userItem = decryptData("user", sessionStorage);
  if (userItem) {
    const nickname = userItem.nickname;
    if (value.value === "my" && userItem) {
      filterimages = images.filter((img) => img.nickname === nickname);
    }
  }

  return filterimages.sort((a, b) => b.pid - a.pid);
};
