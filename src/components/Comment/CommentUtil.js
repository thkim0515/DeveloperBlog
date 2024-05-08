import { useState} from "react";

/*----------부모 자식 재정렬------------*/
export const organizeComments = (comments) => {
  comments.sort((a,b) => new Date(b.postdate) - new Date(a.postdate));

  let organizedComments = [];
  const parents = comments.filter((noParents) => !noParents.parentId);
  const children = {};

  comments.forEach((comment) => {
    if (comment.parentId) {
      if (!children[comment.parentId]) {
        children[comment.parentId] = [];
      }
      children[comment.parentId].push(comment);
    }
  });

  parents.forEach((parent) => {
    organizedComments.push(parent);
    if (children[parent._id]) {
      organizedComments = organizedComments.concat(children[parent._id]);
    }
  });

  return organizedComments;
};

/**페이지네이션 */

export const useCalculatePage = (PageCount, commentLists ) => {

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
