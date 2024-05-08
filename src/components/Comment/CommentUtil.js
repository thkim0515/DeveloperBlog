import { useState } from "react";

/*----------부모 자식 재정렬------------*/
export const organizeComments = (comments) => {
  console.log(comments);
  comments.sort((a, b) => new Date(a.postdate) - new Date(b.postdate));

  let organizedComments = [];
  let lookup = {};

  comments.forEach((comment) => {
    lookup[comment._id] = comment;
    comment.children = [];
  });

  comments.forEach((comment) => {
    if (comment.parentId && lookup[comment.parentId]) {
      lookup[comment.parentId].children.push(comment);
    } else {
      organizedComments.push(comment);
    }
  });

  const flattenComments = (comment) => {
    return [comment, ...comment.children.flatMap(flattenComments)];
  };

  return organizedComments.flatMap(flattenComments);
};

/**페이지네이션 */

export const useCalculatePage = (PageCount, commentLists) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastImage = currentPage * PageCount;
  const indexOfFirstImage = indexOfLastImage - PageCount;
  const currentComments = commentLists.slice(
    indexOfFirstImage,
    indexOfLastImage
  );
  const totalPages = Math.ceil(commentLists.length / PageCount);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const firstPage = () => setCurrentPage(1);
  const lastPage = () => setCurrentPage(totalPages);

  return {
    currentComments,
    currentPage,
    setCurrentPage,
    totalPages,
    paginate,
    nextPage,
    prevPage,
    firstPage,
    lastPage,
  };
};
