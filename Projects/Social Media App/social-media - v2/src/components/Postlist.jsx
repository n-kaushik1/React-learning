import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListdata } from "../store/post-list-store";
import WelcomeMessage from "./welcomemsg";
import LoadingSpinner from "./loadingspinner";

const Postlist = () => {
  const { postList, addInitialPosts } = useContext(PostListdata);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", signal)
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default Postlist;
