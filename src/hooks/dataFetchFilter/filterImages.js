export const filterImages = (images, searchTerm, value, selectedIcon) => {
  console.log(images);
  console.log(searchTerm);

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

  const userItem = sessionStorage.getItem("user");
  if (userItem) {
    const nickname = JSON.parse(userItem).nickname;
    if (value.value === "my" && userItem) {
      filterimages = images.filter((img) => img.nickname === nickname);
      //.sort((a, b) => b.pid - a.pid);
    }
  }

  return filterimages.sort((a, b) => b.pid - a.pid);

  // if (selectInfo === "img" && `${selectedIcon}.svg`) {
  //   if (!(selectedIcon === "back")) {
  //     setFilteredImages(
  //       images
  //         .filter((img) => `${img.language}.svg` === `${selectedIcon}.svg`)
  //         .sort((a, b) => b.pid - a.pid)
  //     );
  //   } else {
  //     setFilteredImages(images.sort((a, b) => b.pid - a.pid));
  //   }
  // } else if (selectInfo === "searchbox") {
  //   if (searchTerm) {
  //     setFilteredImages(
  //       images
  //         .filter(
  //           (image) =>
  //             image.title.includes(searchTerm) ||
  //             image.nickname.includes(searchTerm)
  //         )
  //         .sort((a, b) => b.pid - a.pid)
  //     );
  //   }
  // }
};
