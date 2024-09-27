import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-btn"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          <AiTwotoneLike />: {post.reactions.likes}
        </div>
        <div className="alert alert-danger reactions" role="alert">
          <AiTwotoneDislike />: {post.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
