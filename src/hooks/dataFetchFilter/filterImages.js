import { decryptData } from "../../utils/secure";

export const filterImages = async (images, searchTerm, value, selectedIcon) => {
  let filterimages = [];

  if (images) {
    filterimages = images.filter((content) => content.publicPrivate === true);
  }

  if (searchTerm) {
    filterimages = images.filter(
      (content) =>
        content.title.includes(searchTerm) ||
        content.userId.nickname.includes(searchTerm)
    );
  } else if (selectedIcon && `${selectedIcon}.svg`) {
    if (!(selectedIcon === "back")) {
      filterimages = images.filter(
        (content) => `${content.language}.svg` === `${selectedIcon}.svg`
      );
    }
  } else {
    filterimages = images;
  }

  const userItem = await decryptData("user", sessionStorage);

  if (userItem) {
    const nickname = userItem.nickname;
    if (value.value === "my") {
      filterimages = images.filter(
        (content) => content.userId.nickname === nickname
      );
    }
  }

  return filterimages.sort((a, b) => b.pid - a.pid);
};
