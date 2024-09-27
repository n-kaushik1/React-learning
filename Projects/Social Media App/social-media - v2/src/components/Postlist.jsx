import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListdata } from "../store/post-list-store";
import WelcomeMessage from "./welcomemsg";
import LoadingSpinner from "./loadingspinner";
import { useLoaderData } from "react-router";

const Postlist = () => {
  const postList = useLoaderData();

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export const PostLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default Postlist;
