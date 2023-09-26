import experience from "./ExperienceData";
import { useState } from "react";

const Experience = () => {
  return (
    <div className="experienceBody">
      {experience.map((job) => (
        <>
          <ExperienceElement key={job.company} job={job} />

          <hr style={{ marginRight: "2vw", marginLeft: "2vw" }}></hr>
        </>
      ))}
    </div>
  );
};

const ExperienceElement = ({ job }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="experienceElement">
      <div className="experienceHeader" onClick={() => setSelected(!selected)}>
        <h1>{job.company}</h1>
        <h2>{job.position}</h2>
        {selected && <h2>{job.date}</h2>}
      </div>
      {selected && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div>
            {job.roles.map((role) => (
              <>
                <p className="experienceItemHeader" key={role.title}>
                  {role.title}
                </p>
                <ul className="experienceList">
                  {role.duties.map((duty) => (
                    <li key={duty} className="experienceItem">
                      {duty}
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </div>
          {Object.hasOwn(job, "image") ? (
            <img
              style={{
                filter:
                  job.image === "KingsPic2.JPG"
                    ? "brightness(1.25)"
                    : "brightness(1)",
              }}
              className="classPic"
              alt="class picture"
              src={require(`./${job.image}`)}
            />
          ) : (
            // <div className="videoContainer">
            <video
              className="robotVideo"
              alt="stMarksRobotics"
              controls
              src={require("./stMarksRobotics.mp4")}
            />
            // </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Experience;
