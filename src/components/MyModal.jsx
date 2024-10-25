import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import services from "./AllTestInfo";
import Footer from "./Footer";
import Header from "./Header";
function MyModal() {
  const { name } = useParams();
  // name && console.log(name);

  useEffect(() => {
    getInfo();
  }, [name]);

  const [testInfo, setTestInfo] = useState();

  function getInfo() {
    let newArray = services.find((service) => {
      if (service.name == name) {
        return service;
      }
    });
    // console.log(newArray);
    setTestInfo(newArray);
  }

  return (
    <>
      <Header />
      <div className="my-modal">
        {testInfo ? (
          <div className="testInfo">
            <div className="testImg">
              <img src={`${testInfo.img}`} alt="" style={{ width: "100%" }} />
            </div>
            <div className="testContent">
              <h4>
                <b>Test Name: {testInfo.name}</b>
              </h4>

              <p>
                <>{testInfo.about}</>
              </p>
              <h4>
                <b>
                  Price:
                  <span>{testInfo.price}</span>
                </b>
              </h4>
              <div className="order">
                <a href="tel:+919594990555" className=" btn btn-success">
                  Book Test
                </a>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading..</h1>
        )}
        {/* dimilar test block */}
        <div className="similarTest">
          <p style={{ fontSize: "larger" }}>
            <b>Similar Tests</b>
          </p>
          {services &&
            services.map((test) => {
              if (test?.name == testInfo?.name) {
                ("");
              } else {
                return (
                  <div className="similarQueue" key={test.name}>
                    <div className="similar_img">
                      <Link to={`/test/${test.name}`}>
                        <img src={test.img} alt="image" id="similarImg" />
                      </Link>
                    </div>
                    <p> {test.name}</p>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyModal;
