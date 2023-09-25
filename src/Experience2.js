import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const Experience2 = ({ db }) => {
  async function countVisit() {
    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      const date = mm + "/" + dd + "/" + yyyy;
      const docRef = await addDoc(collection(db, "expVisits"), {
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
    <div className="experienceBody">
      <ThacherExperience />
      <hr style={{ marginRight: "2vw", marginLeft: "2vw" }} />
      <StMarksExperience />
      <hr style={{ marginRight: "2vw", marginLeft: "2vw" }} />
      <KingsExperience />
      <hr style={{ marginRight: "2vw", marginLeft: "2vw" }} />
    </div>
  );
};

const KingsExperience = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="experienceElement">
      <div className="experienceHeader" onClick={() => setSelected(!selected)}>
        <h1 style={{ fontSize: "min(30px,3.5vw)" }}>King's Academy</h1>
        <h2 style={{ fontSize: "min(24px,2.5vw)" }}>Programming Instructor</h2>
        {selected && <h2 style={{ fontSize: "min(24px,2.5vw)" }}>2017-2020</h2>}
      </div>
      {selected && (
        <div className="experienceContent">
          <h3>Teaching: Python, AP CS A, Advanced Topics in Programming</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p style={{ maxWidth: "50vw" }}>
              At King's, Iearned the only perfect course review in school's
              history (AP CS A, 2019). Fostering interest and inclusivity in
              programming courses, over 3 years enrollment in AP CS increased
              from 22 students to 47, and female enrollment rose from 2 to 18.
            </p>
            <img
              className="teamPic"
              alt="kingspic1"
              src={require("./KingsPic1.JPG")}
            />
          </div>
          <h3>Head of CS Course Development (2019-2020)</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              className="teamPic"
              alt="kingspic2"
              src={require("./KingsPic2.JPG")}
              style={{ filter: "brightness(1.3)" }}
            />
            <p style={{ maxWidth: "50vw" }}>
              In this role, I was tasked with setting the direction for school's
              CS program. I shifted the school's AP CS P and introductory
              programming courses away from block programming, while introducing
              two new classes (Advanced Topics and Web Development)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const StMarksExperience = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="experienceElement">
      <div className="experienceHeader" onClick={() => setSelected(!selected)}>
        <h1 style={{ fontSize: "min(30px,3.5vw)" }}>St. Mark's School</h1>
        <h2 style={{ fontSize: "min(24px,2.5vw)" }}>Programming Instructor</h2>
        {selected && <h2 style={{ fontSize: "min(24px,2.5vw)" }}>2020-2022</h2>}
      </div>
      {selected && (
        <div className="experienceContent">
          <h3>Teaching: Python I/II, Java I/II, Advanced Computer Science</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p
              style={{
                maxWidth: "50vw",
                height: "100%",
                verticalAlign: "middle",
              }}
            >
              During my time at St. Mark's, I designed a new introductory Python
              class, oriented twoards seniors considering taking college coding
              courses. Among my Java II students, 84% received a 4 or 5 on the
              AP CS A exam. In Advanced CS, I mentored students on 3 month
              independent tasks, aiding/debugging projects on vision, app
              development, game design, and more
            </p>
            <img
              className="teamPic"
              alt="stMarksCSPic"
              src={require("./stMarksCSpic.jpg")}
            />
          </div>
          <h3>Mentor: FIRST Robotics</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <video
              className="teamPic"
              alt="stMarksRobotics"
              controls
              src={require("./stMarksRobotics.mp4")}
            />
            <p style={{ maxWidth: "50vw" }}>
              As the mentor for the programming team, we wrote code for robot
              control, vision, and automation (Java, Python). We won the New
              England Regional Autonomous Award (see left to watch our bot shoot
              some hoops autonomously)
            </p>
          </div>
          {/* <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "2" }}>
              <h3>Mentor: School Event App, Competitive Coding Club</h3>
              <p>
                Aided and debugged two students' development of a school event
                organization app (Swift). Prepared students for programming
                competitions (USACO)
              </p>
            </div>
            <h3 style={{ flex: "1" }}>Coach: XC, Track & Field</h3>
          </div> */}
        </div>
      )}
    </div>
  );
};

const ThacherExperience = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="experienceElement">
      <div className="experienceHeader" onClick={() => setSelected(!selected)}>
        <h1 style={{ fontSize: "min(30px,3.5vw)" }}>The Thacher School</h1>
        <h2 style={{ fontSize: "min(24px,2.5vw)" }}>Programming Instructor</h2>
        {selected && <h2 style={{ fontSize: "min(24px,2.5vw)" }}>2022-2023</h2>}
      </div>
      {selected && (
        <div className="experienceContent">
          <h3>
            Teaching: Advanced Computer Science, Data Structures & Algorithms
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p style={{ maxWidth: "50vw" }}>
              At Thacher, I built frameworks for student projects, including
              <a
                className="projectLink"
                target="_blank"
                href="https://github.com/dfriedman10/Angry-Birds"
              >
                {" "}
                Pygame graphics
              </a>{" "}
              for game design,{" "}
              <a
                className="projectLink"
                target="_blank"
                href="https://github.com/dfriedman10/TextCompression"
              >
                {"bit readers/writers "}
              </a>
              for compression, an{" "}
              <a
                className="projectLink"
                target="_blank"
                href="https://github.com/dfriedman10/Photoshop"
              >
                image reader/writer
              </a>{" "}
              for photo manipulation, and Swing graphics for a{" "}
              <a
                className="projectLink"
                target="_blank"
                href="https://github.com/dfriedman10/PokemonBattler"
              >
                Pokemon lookalike
              </a>
              . I integrated trees, graphs, and maps (Java),{" "}
              <a
                className="projectLink"
                target="_blank"
                href="https://github.com/dfriedman10/WWI-InfoMap"
              >
                web scraping
              </a>{" "}
              and analysis (Python),{" "}
              <a
                className="projectLink"
                target="_blank"
                href="https://pokeguesser-665bb.web.app/"
              >
                front end design
              </a>{" "}
              (React.js, HTML, CSS), and GitHub usage into the curriculum
            </p>
            <img
              className="teamPic"
              alt="thacherCSclass"
              src={require("./thacherCSpic.jpg")}
            />
          </div>
          <h3>Teaching: Robotics</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              className="teamPic"
              alt="thacherRobotics"
              src={require("./roboticsPic1.jpg")}
            />
            <p style={{ maxWidth: "50vw" }}>
              I also designed a new robotics class, including the research and
              organization of purchasing all required tools, hardware, and
              software. We programmed our bots using Arduinos (C++)
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <h3>Mentor: School Event App, Competitive Coding Club</h3>
              <p>
                In this role, I aided and debugged two students' development of
                a school event organization app (Swift), which launched in
                Spring 2023. I also prepared students for programming
                competitions (USACO), in which two reached gold level
              </p>
            </div>
            {/* <h3 style={{ flex: "1" }}>Coach: XC, Track & Field</h3> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience2;
