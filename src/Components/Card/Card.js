const Card = (props) => {
  return (
    <div className="w-4 h-5 bg-gray-100 overflow-hidden rounded-lg shadow-lg p-5">
      {props.children}
    </div>
  );
};

export default Card;
