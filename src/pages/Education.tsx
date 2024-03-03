import Header from "../components/ui/Header";
import ImageSlider from "../components/ImageSlider";
import "../styles/home.css";
import "../styles/slider.css";
import { Slide } from "../types/SlideType";
import importEducation from "../data/education.json";

export default function Education() {
  const educationSlides: Slide[] = importEducation.map((educationItem) => {
    return {
      title: educationItem.title,
      url: educationItem.url,
      description: educationItem.description,
    };
  });

  return (
    <div className="background">
      <Header />
      <div className="parent-slider-container">
        <ImageSlider slides={educationSlides} />
      </div>
    </div>
  );
}
