import Tags from "./Tags";
import Icons from "./Icons";
import User from "./User";

const ImageCard = (props) => {
  const tags = props.image.tags;

  console.log(props);
  return (
    <div className="hover:scale-105 transition-all duration-300">
      <img src={props.image.webformatURL} className="w-auto rounded-t-lg" />
      <div className="px-3 py-2 bg-slate-200 rounded-b-lg">
        <User
          username={props.image.user}
          userImage={props.image.userImageURL}
        />
        <Icons
          likes={props.image.likes}
          comments={props.image.comments}
          downloads={props.image.downloads}
        />
        <Tags tags={tags} />
      </div>
    </div>
  );
};

export default ImageCard;
