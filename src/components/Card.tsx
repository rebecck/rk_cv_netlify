import "../styles/component.css";
import { Skill } from "../types/SkillType";

interface Props {
  skill: Skill;
}

export default function Card({ skill }: Props) {
  const cubes = Array.from({ length: skill.level }, (_, index) => (
    <img
      key={index}
      className="cube"
      src="../../cube-solid.svg"
      alt={`Cube ${index + 1}`}
    />
  ));

  return (
    <div className="card-container">
      <div className="img-container">
        <img src={skill.url} className="skill-icon" />
      </div>
      <p className="card-title">{skill.title}</p>
      <div className="cubes">{cubes}</div>
      <p id="note" className="note">
        {skill.note}
      </p>
    </div>
  );
}
