import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbsUp,
  faDownload,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

const Icons = (props) => {
  console.log(props)
  return (
    <>
      <ul className="flex ">
        <li className="mr-3">
          <div>
            <FontAwesomeIcon className="px-2" icon={faThumbsUp} />
            <strong>{props.likes}</strong>
          </div>
        </li>
        <li className="mr-3">
          <div>
            <FontAwesomeIcon className="px-2" icon={faComment} />
            <strong>{props.comments}</strong>
          </div>
        </li>
        <li className="mr-3">
          <div>
            <FontAwesomeIcon className="px-2" icon={faDownload} />
            <strong>{props.downloads}</strong>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Icons
