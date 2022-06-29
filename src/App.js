import Card from "./Components/Card/Card";

const App = () => {
  return (
    <Card>
      <div className="relative hover:scale-105 transition-all duration-300">
        <img src="https://source.unsplash.com/random" className="w-full " />
        <div className="py-4">
          <div className="font-bold text-blue-500 text-xl">
            Photo by Aman Mandal
          </div>
        </div>
        <ul>
          <li>
            <strong>
              <i class="fa-solid fa-thumbs-up"> 4000</i>
            </strong>
          </li>
          <li>
            <strong>
              <i class="fa-solid fa-download"> 2000</i>
            </strong>
          </li>
        </ul>
      </div>
    </Card>
  );
};
export default App;
