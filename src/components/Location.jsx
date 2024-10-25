import { useEffect } from "react";
import location from "../assets/location.jpg";
import locationIcon from "../assets/LocationIcon.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Location() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="locationdiv">
      <h2 className="names">
        <b>Location</b>
        <img src={`${locationIcon}`} alt="image" style={{ height: "60px" }} />:
      </h2>

      <div className="location" data-aos="flip-left" data-aos-delay="20">
        <a
          href="https://www.google.com/maps/place/Earth+Diagnostic+Centre/@19.2133567,72.9508435,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b92e955da501:0xc3a0005093e33e14!8m2!3d19.2133567!4d72.9534184!16s%2Fg%2F11rb4sj1z4?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          <img id="location_Img" src={`${location}`} alt="image" />
        </a>
        <p>
          <b>Click the Image to find Location on map</b>
        </p>
      </div>
    </div>
  );
}

export default Location;
