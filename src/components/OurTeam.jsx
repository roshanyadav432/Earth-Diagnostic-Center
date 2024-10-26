import Header from "./Header";
import img1 from "../assets/vishal.png";
import img2 from "../assets/aniket.png";
import img3 from "../assets/roshan.png";
import Footer from "./Footer";
function OurTeam() {
  const TeamInfo = [
    {
      name: "Vishal Yadav",
      position: "Lab Technician",
      exprience: 12,
      contact: 8779254398,
      img: img1,
      qualification: "DMLT (Diploma in Medical Laboratory Technology)",
      bio: "Vishal Yadav is a dedicated Lab Technician with over 12 years of experience in medical laboratory technology. Holding a Diploma in Medical Laboratory Technology (DMLT), Vishal specializes in various diagnostic procedures, ensuring accuracy and efficiency in every test conducted. His extensive background in the field has equipped him with a keen eye for detail and a commitment to quality patient care. Vishal is passionate about continuous learning and staying updated with the latest advancements in laboratory practices. Outside of work, he enjoys reading and exploring new technologies that can enhance diagnostic processes.",
    },
    {
      name: "Aniket Yadav",
      position: "Lab Technician",
      exprience: 7,
      contact: 9594990555,
      img: img2,
      qualification: "DMLT (Diploma in Medical Laboratory Technology)",
      bio: "Aniket Yadav is a skilled Lab Technician with 7 years of hands-on experience in medical laboratory technology. He holds a Diploma in Medical Laboratory Technology (DMLT) and is proficient in a wide range of diagnostic tests and procedures. Aniket is committed to delivering high-quality results while ensuring patient safety and satisfaction. His passion for technology drives him to continuously enhance his skills and stay updated with the latest advancements in the field. In his spare time, Aniket enjoys playing sports and volunteering in community health initiatives. ",
    },
    {
      name: "Roshan Yadav",
      position: "IT Department",
      exprience: "0",
      contact: 9119812125,
      img: img3,
      qualification: "BSc IT (Bachelor of Science in Information Technology)",
      bio: "Roshan Yadav is a recent graduate with a Bachelor of Science in Information Technology (BSc IT), stepping into his roles in both the Advertising and IT Departments as a fresher. He brings a unique blend of technical skills and creative thinking, eager to contribute to innovative advertising campaigns while providing IT support.",
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
                    Exprience: <b>{member.exprience} yrs</b>
                  </p>
                  <p>
                    Contact No: <b>{member.contact}</b>
                  </p>
                  <div className="aboutDocs">{member.bio}</div>
                </div>
              </div>
              {/* about doctors */}
            </div>
          );
        })}
      </div>

      <div className="team-footer">
        <Footer />
      </div>
    </div>
  );
}

export default OurTeam;
