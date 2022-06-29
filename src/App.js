import { useEffect, useState } from 'react'
import Card from './Components/Card/Card'

const App = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then(res => res.json)
      .then(data => console.log(data))
  }, [])
  return (
    <Card>
      <div className="relative hover:scale-105 transition-all duration-300">
        <img src="https://source.unsplash.com/random" className="w-full " />
        <div className="py-4">
          <div className="font-bold text-blue-500 text-xl">
            Photo by Aman Mandal
          </div>
        </div>
        <ul className="flex ">
          <li className="mr-3">
            <strong>
              <i class="fa-solid fa-eye"> 14000</i>
            </strong>
          </li>
          <li className="mr-3">
            <strong>
              <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
            </strong>
          </li>
          <li>
            <strong>
              <i class="fa-solid fa-download"> 2000</i>
            </strong>
          </li>
        </ul>
        <div className="py-4">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag1
          </span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag2
          </span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #tag3
          </span>
        </div>
      </div>
    </Card>
  )
}
export default App
