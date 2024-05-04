/*----------부모 자식 재정렬------------*/
export const organizeComments = (comments) => {
  comments.sort((b, a) => new Date(b.postdate) - new Date(a.postdate));

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
