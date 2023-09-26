import { useState } from "react";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";

const Running = () => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <h1 className="sportsHeader" onClick={() => setSelected(!selected)}>
        Running
      </h1>
      <div className="sportContent">
        {
          <>
            <p style={{ marginRight: "5vw" }}>
              I've run competitively since high school, and have coached since
              2017. Running's a part of my daily life, especially if I can find
              a good set of trails{" "}
            </p>
            <div className="sportSubcontent">
              <div className="teamContent">
                <h2>Thacher 2022-2023</h2>
                <p className="teamPicSubtitle">
                  I served as the head XC coach for Thacher, where we won the
                  Frontier League championship and placed 6th in California's
                  southern section. Our top runner won the league championships
                  individually, and another went on to run collegiately
                </p>
                <img
                  className="teamPic"
                  alt="thacherPic"
                  src={require("./thacherPic.jpg")}
                />
              </div>
              <div className="teamContent">
                <h2>St. Mark's 2020-2022</h2>
                <img
                  className="teamPic"
                  alt="stMarksPic"
                  src={require("./stMarksPic.jpg")}
                />
                <p className="teamPicSubtitle">
                  As an assistant XC coach for St. Mark's, I primarily worked
                  with our top runner. He broke 15:30 in the 5k and was a
                  recruited college runner
                </p>
              </div>
            </div>
          </>
        }
      </div>
    </>
  );
};

const Frisbee = () => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <h1 className="sportsHeader" onClick={() => setSelected(!selected)}>
        Ultimate Frisbee
      </h1>
      <div className="sportContent">
        {
          <>
            <p style={{ marginRight: "5vw" }}>
              I started playing ultimate at Dartmouth, where we placed top 15 in
              the country twice. It has been a mainstay for me ever since
            </p>
            <div className="sportSubcontent">
              <div className="teamContent">
                <h2>Boston Slow 2017-2021</h2>
                <p className="teamPicSubtitle">
                  The top mixed ultimate team in Boston and a perennial national
                  championship contender. We finished second at the World
                  Championships in 2018{" "}
                </p>
                <img
                  className="teamPic"
                  alt="slowTeamPic"
                  src={require("./slowTeamPic.jpg")}
                />
              </div>
              <div className="teamContent">
                <h2>Bedouin Falcons 2017-2020</h2>

                <img
                  className="teamPic"
                  alt="falconsTeamPic"
                  src={require("./falcons.jpg")}
                />
                <p className="teamPicSubtitle">
                  During my time overseas I played for the Falcons, Jordan's
                  national ultimate team. I captained the team from 2019-2020,
                  and we won the Middle Eastern Championships in 2019
                </p>
              </div>
            </div>
          </>
        }
      </div>
    </>
  );
};

const CoachingSports = ({ db }) => {
  async function countVisit() {
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      const date = mm + "/" + dd + "/" + yyyy;
      const docRef = await addDoc(collection(db, "sportsVisits"), {
        date: date,
        time: `${today.getHours() % 12} ${today.getHours() < 12 ? "am" : "pm"}`,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  useEffect(() => {
    countVisit();
  }, []);
  return (
    <div className="sportsPage">
      <Running />
      <hr style={{ marginRight: "2vw", marginLeft: "2vw" }}></hr>
      <Frisbee />
      <hr style={{ marginRight: "2vw", marginLeft: "2vw" }}></hr>
    </div>
  );
};

export default CoachingSports;
