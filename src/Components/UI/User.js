const User = props => {
  return (
    <>
      <div className="py-4">
        <div className="flex">
          <img
            src={props.userImage}
            className="w-11 h-11 rounded-full "
          />
          <h3 className="flex px-2 font-bold text-blue-500 text-xl items-center">
            {props.username}
          </h3>
        </div>
      </div>
    </>
  )
}

export default User
