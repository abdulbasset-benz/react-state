import "./style.css";
import AnimalShow from "./AnimalShow";
import { useState } from "react";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const animalsArr = ["bird", "cat", "cow", "dog", "gator", "horse"];
  function getRandomAnimal() {
    return animalsArr[Math.floor(Math.random() * animalsArr.length)];
  }
  const handleClick = () => {
    const randomAnimal = getRandomAnimal(); // new value on each click
    setAnimals([...animals, randomAnimal]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className="bg-sky-400 py-3 px-6 rounded-lg my-4 text-2xl font-bold uppercase cursor-pointer"
        >
          add animal
        </button>
      </div>
      <div className="flex flex-wrap">{renderedAnimals}</div>
    </div>
  );
};
export default App;
