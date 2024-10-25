import { useEffect } from "react";
import Header from "./Header";
import about from "../assets/AboutUs.png";
import AOS from "aos";
import "aos/dist/aos.css";
import who from "../assets/who are we.png";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import servicesImg from "../assets/services.png";
import quality from "../assets/Safety.png";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  const services = [
    {
      img: mission,
      title: "Mission",
      desc: "Our Mission At Earth Diagnostic Center , our mission is to provide accurate and timely diagnostic services to support your health and well-being. We are committed to ensuring that every patient receives the highest standard of care in a comfortable and welcoming environment.",
    },
    {
      img: vision,
      title: "Vision",
      desc: " We envision a healthier community through reliable diagnostics and personalized care. Our goal is to be a trusted partner in yourhealthcare journey, empowering you with the information you need to make informed decisions.",
    },
    {
      img: who,
      title: "Who are we",
      desc: " We Are Founded in [Year], we are a team of experienced professionals dedicated to excellence in diagnostics. Our center is equipped with the latest technology and staffed by skilled technicians and healthcare providers who are passionate about patient care.",
    },
    {
      img: servicesImg,
      title: "Our Services",
      desc: " Our Services We offer a wide range of diagnostic services, including [Blood Test,Urine Test ,Ecg Test, Liver Profile, Lipid Profile, Kidney Profile, Pancreas Profile, Heart Profile, TB Profile, Stool Test, Sputum Test, Hepatitis Profile, Thyroid Profile, Arthritis Profile, Swine Flu, HBSAG Test] Test all tailored to meet the needs of our patients. Ourstate-of-the-art facilities ensure accurate results and quick turnaround times.",
    },
    {
      img: quality,
      title: "Commitment to Quality",
      desc: " Commitment to Quality We adhere to the highest standards of quality and safety in all our procedures. Our protocols are designed to ensure that you receive reliable results while  maintaining your comfort and privacy.",
    },
  ];
  return (
    <>
      {/* Notice */}

      <div>
        <Header />
        <div className="about">
          <div className="abouImg" data-aos="fade-up">
            <img id="AboutUsImg" src={`${about}`} alt="" />
          </div>
          <div className="content-About">
            {services.map((service) => {
              return (
                <div
                  className=" bord"
                  data-aos="fade-right"
                  key={service.title}
                >
                  <h2>{service.title}</h2>
                  <div className="imgAbout">
                    <img src={service.img} alt="image" id="pictures_about" />
                  </div>
                  <p>{service.desc}</p>
                </div>
              );
            })}
          </div>
          {/* Notice */}
          <div className="my-alert" data-aos="fade-up">
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <p
                style={{
                  backgroundColor: "#e6c1d4",
                  fontSize: "larger",
                  width: "max-content",
                  color: "black",
                }}
              >
                Message:
              </p>
              Dear Users, We are committed to continually improving our
              application to enhance your experience. While we are currently
              working on upgrades, we appreciate your patience and understanding
              during this time. Thank you for your support! Best regards, [EARTH
              DIAGNOSTIC CENTER]
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
