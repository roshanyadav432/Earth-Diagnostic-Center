/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountUp from "react-countup";
function InfoCard({ head, count, text }) {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div
      className="card  mb-3 myInfoCard  "
      data-aos="fade-up-left"
      data-aos-delay="20"
    >
      <div className="card-header  myRadius">{head}</div>
      <div className="card-body  myRadius">
        <h5 className="card-title  myRadius">
          <CountUp
            className="numLoad"
            start={0}
            end={count}
            delay={0}
            duration={10}
            useEasing={true}
          />
          <b id="plus">+</b>
        </h5>
        <p className="card-text  myRadius">{text}</p>
      </div>
    </div>
  );
}

export default InfoCard;
{
  /* <CountUp
        className="numLoad"
        start={0}
        end={End}
        delay={0}
        duration={10}
        useEasing={true}
      /> */
}
