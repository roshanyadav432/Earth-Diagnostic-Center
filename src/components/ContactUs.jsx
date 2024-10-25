import { useEffect } from "react";
import Header from "./Header";
import location from "../assets/location_icon.png";
import call from "../assets/call_icon.png";
import mail from "../assets/mail_icon.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twit from "../assets/twitter.png";
import banner from "../assets/connect-us.png";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function ContactUs() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <>
      <Header />
      <div className="Contact-Us">
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
        <div className="greet">
          <p
            style={{
              fontSize: "17px",
              textAlign: "center",
              // backgroundColor: "aquamarine",
            }}
          >
            Thank you for reaching out! If you have any questions or need
            assistance, feel free to contact us using the information below.
          </p>
          <h2 style={{ textAlign: "center", color: "#333" }}>
            Our Contact Information
          </h2>
        </div>
        <div className="connect_banner" data-aos="fade-up">
          <img src={banner} alt="image" id="banner" />
        </div>
        <div className="contacts-info" data-aos="fade-right">
          <div className="call">
            <img src={call} alt="image" id="contact-img" />
            <a href="tel:+919119812125" id="link">
              <p id="link">9119812125 / 9594990555</p>
            </a>
          </div>
          {/* email */}
          <div className="call">
            <img src={mail} alt="image" id="contact-img" />
            <a href="mailto:diagnosticearth@gmail.com" id="link">
              <p id="link">diagnosticearth @gmail .com</p>
            </a>
          </div>
          {/* location */}
          <div className="call">
            <img src={location} alt="image" id="contact-img" />
            <a
              href="https://www.google.com/maps/place/Earth+Diagnostic+Centre/@19.2133567,72.9508435,822m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7b92e955da501:0xc3a0005093e33e14!8m2!3d19.2133567!4d72.9534184!16s%2Fg%2F11rb4sj1z4?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
              id="link"
              target="new"
            >
              <p id="link">Find location on google map</p>
            </a>
          </div>
        </div>
        {/*  social media*/}
        {/* <p>social media links</p> */}
        <div className="contacts-info" data-aos="fade-left">
          {/* instagram */}
          <div className="call">
            <img src={insta} alt="image" id="contact-img" />
            <a
              href="https://www.instagram.com/earth_diagnostic/"
              id="link"
              target="new"
            >
              <p id="link">Instagram</p>
            </a>
          </div>
          {/* facebook */}
          <div className="call">
            <img src={facebook} alt="image" id="contact-img" />
            <a
              href="https://www.facebiik.com/earth_diagnostic/"
              id="link"
              target="new"
            >
              <p id="link">Facebook</p>
            </a>
          </div>
          {/* twitter */}
          <div className="call">
            <img src={twit} alt="image" id="contact-img" />
            <a
              href="https://www.x.com/earth_diagnostic/"
              id="link"
              target="new"
            >
              <p id="link">Twitter</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
