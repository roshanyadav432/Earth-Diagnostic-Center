import Header from "./Header";
import img1 from "../assets/Support.png";
function OurTeam() {
  const TeamInfo = [
    {
      name: "Vishal Yadav",
      position: "HOD",
      exprience: 12,
      contact: 1234567890,
      img: img1,
    },
    {
      name: "abc Yadav",
      position: "HOD",
      exprience: 12,
      contact: 1234567890,
      img: img1,
    },
    {
      name: "xyz Yadav",
      position: "HOD",
      exprience: 12,
      contact: 1234567890,
      img: img1,
    },
    {
      name: "pqr Yadav",
      position: "HOD",
      exprience: 12,
      contact: 1234567890,
      img: img1,
    },
    {
      name: "mno Yadav",
      position: "HOD",
      exprience: 12,
      contact: 1234567890,
      img: img1,
    },
  ];
  return (
    <div>
      <Header />
      <div className="headSect">
        <h2 style={{ backgroundColor: "aquamarine" }}>MEET OUR TEAM</h2>
      </div>

      <div className="team">
        {TeamInfo.map((member) => {
          return (
            <div className="docs" key={member.name}>
              <div className="upper">
                <div className="docImg">
                  <img src={`${member.img}`} alt="image" id="docImage" />
                </div>
                <div className="docInfo">
                  <p>
                    Name: <b>{member.name}</b>
                  </p>
                  <p>
                    Position: <b>{member.position}</b>
                  </p>
                  <p>
                    Exprience: <b>{member.exprience}yrs</b>
                  </p>
                  <p>
                    Contact No: <b>{member.contact}</b>
                  </p>
                </div>
              </div>
              {/* about doctors */}
              <div className="aboutDocs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit illo, et repudiandae esse autem magnam ratione.
                Modi corporis recusandae explicabo atque libero qui adipisci
                aliquam? Dolore facilis eveniet rerum reiciendis?
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTeam;
