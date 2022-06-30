import Tags from './Tags'
import Icons from './Icons'
import User from './User'
import Card from '../Card/Card'

const ImageCard = props => {
  console.log(props)
  return (
    <Card>
      <div className="hover:scale-105 transition-all duration-300">
        <img src={props.image.webformatURL} className="w-full " />
        <User />
        <Icons />
        <Tags />
      </div>
    </Card>
  )
}

export default ImageCard
