import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostLIst, action) => {
  let newPostList = currPostLIst;
  if (action.type === "DELETE_POST") {
    newPostList = currPostLIst.filter(
      (post) => post.id !== action.payLoad.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostLIst];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payLoad: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Going to mumbai for my vacations vsdfc  ewsf ",
    reactions: 2,
    userId: "user-9",
    tags: ["vacations", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "GLKIhn cxdaslhj vcdsxjnl vds",
    body: "vbfs  fgrw  wsfr  fw fsfv ewff wefdasfds cvdsv  fewf ",
    reactions: 15,
    userId: "user-12",
    tags: ["pass", "graduate", "Enjoying"],
  },
];
export default PostListProvider;
