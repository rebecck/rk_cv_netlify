import { Skill } from "../types/SkillType";
import Card from "./Card";
import "../styles/component.css";
import { useState } from "react";

interface Props {
  skills: Skill[];
}

export default function CardList({ skills }: Props) {
  const [currentIndexArray, setCurrentIndexArray] = useState([0, 1, 2]);

  const goToPrev = () => {
    const isFirstIndex = currentIndexArray[0] === 0 ? true : false;
    if (isFirstIndex) {
      const lastIndex = skills.length - 1;
      setCurrentIndexArray([lastIndex - 2, lastIndex - 1, lastIndex]);
    } else {
      setCurrentIndexArray((prevState) => prevState.map((item) => item - 1));
    }
  };

  const goToNext = () => {
    const isLastIndex =
      currentIndexArray[2] === skills.length - 1 ? true : false;
    if (isLastIndex) {
      setCurrentIndexArray([0, 1, 2]);
    } else {
      setCurrentIndexArray((prevState) => prevState.map((item) => item + 1));
    }
  };

  return (
    <div className="card-wrapper">
      <img
        src="../../chevron-left.svg"
        onClick={goToPrev}
        className="card-arrow"
      />
      <div className="cards-container">
        {skills.map((skill, skillIndex) =>
          currentIndexArray.map((currentIndex) => {
            if (currentIndex === skillIndex) {
              return <Card key={skillIndex} skill={skill} />;
            }
          })
        )}
      </div>
      <img
        src="../../chevron-right.svg"
        onClick={goToNext}
        className="card-arrow"
      />
    </div>
  );
}
