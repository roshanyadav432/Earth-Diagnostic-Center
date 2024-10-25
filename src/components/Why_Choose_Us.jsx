import { useEffect } from "react";
import advance from "../assets/Adv_Tech.png";
import Affordable from "../assets/Affordable.png";
import Communication from "../assets/communication.png";
import Expert from "../assets/Expert.png";
import Quality from "../assets/quality.png";
import Rapid from "../assets/Rapid.png";
import Safety from "../assets/Safety.png";
import Support from "../assets/Support.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Why_Choose_Us() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  let imgArray = [
    { img: Expert, text: "Skilled Expertise" },
    { img: advance, text: "Advance Technology" },
    { img: Quality, text: "Quality Results" },
    { img: Rapid, text: "Rapid Turnaround" },
    { img: Support, text: "Personalized Support" },
    { img: Safety, text: "Commitment to Safety" },
    { img: Communication, text: "Clear Communication " },
    { img: Affordable, text: "Affordable Price" },
  ];
  return (
    <div className="Choose">
      <h2 className="names">
        <b>WHY TO CHOOSE US:</b>
      </h2>
      <div className="chooseSection">
        {imgArray.map((item) => {
          return (
            <div
              className="choose-content"
              key={item}
              data-aos="flip-up"
              data-aos-delay="20"
            >
              <img
                src={`${item.img}`}
                alt="image"
                style={{ height: "100px" }}
              />
              <b>{item.text}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Why_Choose_Us;
