import "../styles/home.css";
import importSkills from "../data/skills.json";
import { Skill } from "../types/SkillType";
import CardList from "../components/CardList";
import Header from "../components/ui/Header";
import { useEffect, useState } from "react";
//import Footer from "../components/ui/Footer";

export default function Home() {
  const skills: Skill[] = importSkills.map((skillItem) => {
    return {
      title: skillItem.title,
      skill: skillItem.skill,
      note: skillItem.note,
      url: skillItem.url,
      level: skillItem.level,
    };
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setCurrentTime(new Date());

    // Cleanup function to avoid memory leaks
    return () => {};
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const time = Number(formattedTime.slice(0, 2));

  let greeting = "";

  if (time >= 5 && time < 11) {
    greeting = "Good morning";
  } else if (time >= 11 && time < 14) {
    greeting = "Good day";
  } else if (time >= 14 && time < 17) {
    greeting = "Good afternoon";
  } else if (time >= 17 && time < 21) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  return (
    <div className="background">
      <Header />
      <main>
        <h1
          className="main-header"
          // style={{
          //   marginRight: "auto",
          //   marginLeft: "6px",
          //   marginTop: "50px",
          //   fontSize: "7rem",
          // }}
        >
          {greeting}
        </h1>
        {/* <div className="main-text"> */}
        <p
          style={{
            marginRight: "auto",
            marginLeft: "22px",
            marginTop: "12px",
            fontSize: "1rem",
          }}
        >
          Welcome to my page. I am an information systems of science student.
        </p>
        <p
          style={{
            marginRight: "auto",
            marginLeft: "22px",
            marginTop: "0px",
            fontSize: "1rem",
          }}
        >
          Looking for a new opportunity within the software engineering field.{" "}
          <br /> I have listed some of my skills below, <br />
          the other pages contains some of my work experience and education.{" "}
          <br /> <br />
          Feel free to get in touch <br />
          Best regards,
        </p>
        <img
          className="test"
          src="../../7_objects.png"
          style={{
            marginRight: "auto",
            marginLeft: "22px",
            marginTop: "0px",
            width: "100px",
          }}
        />
        {/* </div> */}
      </main>
      <CardList skills={skills} />
      {/* <Footer /> */}
    </div>
  );
}
