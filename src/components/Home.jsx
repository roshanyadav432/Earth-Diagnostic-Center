import InfoCard from "../InfoCard";
import Header from "./Header";
import MyCarousel from "./MyCarousel";
import Why_Choose_Us from "./Why_Choose_Us";
import Services from "./Services";
import Faqs from "./Faqs";
import Footer from "./Footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
function Home() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="Carousel">
        <MyCarousel />
      </div>

      <div className="info">
        <InfoCard
          head={"Trust"}
          count={100000}
          text={"test completed successfully"}
        />
        <InfoCard
          head={"Experience"}
          count={12}
          text={" Years of experience."}
        />
        <InfoCard
          head={"Celebrating"}
          count={100000}
          text={" Happy customers."}
        />
        <InfoCard head={"Partners"} count={10} text={"Partners"} />
      </div>

      <div className="service">
        <Services />
      </div>
      <div className="whyUs">
        <Why_Choose_Us />
      </div>
      <div className="faq">
        <Faqs />
      </div>
      <div className="appint-container">
        <div className="appoint">
          <SkeletonTheme
            className="skeleton"
            baseColor="aqua"
            highlightColor="#fff"
            width={200}
            height={50}
          >
            <Skeleton></Skeleton>
          </SkeletonTheme>
        </div>
        <div className="click-container">
          <button id="click">
            <a href="tel:+919960948975" id="call">
              Get an appointment
            </a>
          </button>
        </div>
      </div>
      <div className="footer_section">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
