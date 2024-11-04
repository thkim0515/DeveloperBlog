import { decryptData } from "../../utils/secure";

export const filterImages = async (images, searchTerm, value, selectedIcon) => {
  let filterimages = [];

  // 일반 필터 > 기본적으로 적용
  if (images) {
    filterimages = images.filter(content => content.publicPrivate === true);
  }

  // 검색필터 if 검색어에 따른 필터 검색어가 아닌 아이콘이 들어오면 아이콘필터
  if (searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    filterimages = images.filter(
      content =>
        content.title.toLowerCase().includes(lowerCaseSearchTerm) ||
        content.userId.nickname.toLowerCase().includes(lowerCaseSearchTerm)
    );
  } else if (selectedIcon && `${selectedIcon}.svg`) {
    if (!(selectedIcon === "back")) {
      filterimages = images.filter(content => `${content.language}.svg` === `${selectedIcon}.svg`);
    }
  } else {
    filterimages = images;
  }

  const userItem = await decryptData("user", sessionStorage);
  console.log(userItem);
  // 내 코드 필터 if > mainCode 필터 if if > 내 코드 필터
  if (userItem) {
    const nickname = userItem.nickname;
    if (value.value === "my") {
      filterimages = images.filter(content => content.userId.nickname === nickname);

      if (searchTerm && value.value === "my") {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        filterimages = images.filter(
          content => content.title.toLowerCase().includes(lowerCaseSearchTerm) && content.userId.nickname === nickname
        );
      }
    }
  }

  return filterimages.sort((a, b) => b.pid - a.pid);
};
