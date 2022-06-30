const Card = (props) => {
  return (
    <div className="w-full h-full bg-gray-100 overflow-hidden rounded-lg shadow-lg p-5">
      {props.children}
    </div>
  );
};

export default Card;
