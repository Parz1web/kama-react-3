const Post = (props) => {
  return (
    <div className="post">
      <div className="postUserAvatar">
        <img
          src="https://sun9-79.userapi.com/impf/yJo1dFlZsrlfMmdUneVDAbglhpWiE9qqVDYgow/Ozg6_CG8VdU.jpg?size=1440x1440&quality=95&sign=79c5b2d477237e298eb1b464bc8000cc&type=album"
          alt=""
          className="w-[40px] rounded-[100%]"
        />
      </div>
      <div className="postContent">
        <div className="postUserName text-blue-700">Имя</div>
        <div className="postText border-y-2 border-gray-700">
          <div>
            <p>{props.message}</p>
          </div>
          <div className="flex justify-end">
            <p>Likes: {props.likesCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
