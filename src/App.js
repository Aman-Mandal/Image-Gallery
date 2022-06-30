import { useEffect, useState } from "react";
import Loading from "./Components/Modal/Loading";
import ImageCard from "./Components/UI/ImageCard";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("cat");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto my-7">
      <div className="grid grid-cols-3 gap-6 md:">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};
export default App;
