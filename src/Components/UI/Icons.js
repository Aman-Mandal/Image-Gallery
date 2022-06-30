import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbsUp,
  faDownload,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

const Icons = () => {
  return (
    <>
      <ul className="flex ">
        <li className="mr-3">
          <div>
            <FontAwesomeIcon className="px-2" icon={faThumbsUp} />
            <strong>4000</strong>
          </div>
        </li>
        <li className="mr-3">
          <div>
            <FontAwesomeIcon className="px-2" icon={faComment} />
            <strong></strong>
          </div>
        </li>
        <li className="mr-3">
          <div>
            <FontAwesomeIcon className="px-2" icon={faDownload} />
            <strong>8000</strong>
          </div>
        </li>
      </ul>
    </>
  )
}

export default Icons
