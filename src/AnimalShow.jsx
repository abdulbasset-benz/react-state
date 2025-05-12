import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import { useState } from "react";

const animalMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  const [scale, setScale] = useState(1);

  const handleClick = () => {
    setScale(scale + scale * 0.1);
  };
  const animalImg = animalMap[type];
  return (
    <div className="flex justify-between ">
      <div className="relative mr-20">
        <img
          src={animalImg}
          alt=""
          className="w-30 h-30"
          onClick={handleClick}
        />
        <img
          src={heart}
          alt=""
          style={{ transform: `scale(${scale})` }}
          className="w-10 h-10 absolute bottom-0 -right-10 cursor-pointer transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default AnimalShow;
