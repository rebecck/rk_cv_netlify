import ImageSlider from "../components/ImageSlider";
import Header from "../components/ui/Header";
import "../styles/home.css";
import "../styles/slider.css";
import { Slide } from "../types/SlideType";
import importWork from "../data/work.json";

export default function Work() {
  const workSlides: Slide[] = importWork.map((workItem) => {
    return {
      title: workItem.title,
      url: workItem.url,
      description: workItem.description,
    };
  });

  return (
    <div className="background">
      <Header />
      <div className="parent-slider-container">
        <ImageSlider slides={workSlides} />
      </div>
    </div>
  );
}
