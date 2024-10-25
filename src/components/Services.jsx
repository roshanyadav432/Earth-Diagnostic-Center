import services from "./AllTestInfo";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Services() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div className="services">
      <h2 className="names">
        <b>Services:</b>
      </h2>
      <div className="service-content">
        {services.map((service) => {
          return (
            <div
              className="service_name"
              key={service.name}
              data-aos="fade-up"
              data-aos-delay="20"
            >
              <Link to={`/Test/${service.name}`} id="link">
                <img id="s_img" src={`${service.img} `} alt="" />
              </Link>

              <div className="about_Services">
                <h5>
                  <b>{service.name}</b>
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
