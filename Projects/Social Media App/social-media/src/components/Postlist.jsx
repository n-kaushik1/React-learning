import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListdata } from "../store/post-list-store";

const Postlist = () => {
  const { postList } = useContext(PostListdata);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Postlist;
