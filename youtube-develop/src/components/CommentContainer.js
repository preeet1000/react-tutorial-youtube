import Comment from "./Comment";
import { COMMENT_MOCK_DATA } from "./Constants";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment?.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="">
      <h1 className="text-lg font-bold">Comments:</h1>
      <div>
        {/* <Comment data={COMMENT_MOCK_DATA[0]} /> */}
        <CommentList comments={COMMENT_MOCK_DATA} />
      </div>
    </div>
  );
};

export default CommentContainer;
