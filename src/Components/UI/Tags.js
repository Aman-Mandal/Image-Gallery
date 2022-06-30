const Tags = (props) => {
  const tags = props.tags.split(",");
  console.log(tags);

  return (
    <div className="py-4">
      {tags.map((tag) => {
        <span
          key={props.tags.id}
          className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          #{tag}
        </span>;
      })}
    </div>
  );
};

export default Tags;
