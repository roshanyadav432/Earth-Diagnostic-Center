import "react-responsive-carousel/lib/styles/carousel.min.css";
import one from "../assets/blood_check.mp4";
import two from "../assets/blood_shake.mp4";
import three from "../assets/injection.mp4";
import four from "../assets/research.mp4";
import five from "../assets/taking_blood.mp4";

// requires a loader
import { Carousel } from "react-responsive-carousel";
function MyCarousel() {
  return (
    <Carousel
      className="craousel"
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      interval={5000}
      transitionTime={1000}
    >
      <div>
        <video
          className="video"
          autoPlay={true}
          muted={true}
          type="video/mp4"
          loop={true}
          src={`${four}`}
        ></video>
      </div>
      <div>
        <video
          className="video"
          autoPlay={true}
          muted={true}
          type="video/mp4"
          loop={true}
          src={`${two}`}
        ></video>
      </div>
      <div>
        <video
          className="video"
          autoPlay={true}
          muted={true}
          type="video/mp4"
          loop={true}
          src={`${three}`}
        ></video>
      </div>
      <div>
        <video
          className="video"
          autoPlay={true}
          muted={true}
          type="video/mp4"
          loop={true}
          src={`${one}`}
        ></video>
      </div>
      <div>
        <video
          className="video"
          autoPlay={true}
          muted={true}
          type="video/mp4"
          loop={true}
          src={`${five}`}
        ></video>
      </div>
    </Carousel>
  );
}

export default MyCarousel;
