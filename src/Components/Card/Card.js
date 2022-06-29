const Card = (props) => {
  return (
    <div className="max-w-sm bg-gray-100 overflow-hidden rounded-lg shadow-lg p-6">
      {props.children}
    </div>
  );
};

export default Card;
