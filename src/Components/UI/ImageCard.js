import Tags from './Tags'
import Icons from './Icons'
import User from './User'

const ImageCard = () => {
  return (
    <>
      <div className="relative hover:scale-105 transition-all duration-300">
        <img src="https://source.unsplash.com/random" className="w-full " />
        <User />
        <Icons />
        <Tags />
      </div>
    </>
  )
}

export default ImageCard
