import { createContext, useContext } from "react";

const PostContext = createContext();

export const PostProvider = ({ children, post }) => {
  return <PostContext.Provider value={post}>{children}</PostContext.Provider>;
};

export const usePost = () => {
  return useContext(PostContext);
};
