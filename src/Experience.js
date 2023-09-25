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
        <h1 style={{ fontSize: "min(30px,3.5vw)" }}>{job.company}</h1>
        <h2 style={{ fontSize: "min(24px,2.5vw)" }}>{job.position}</h2>
        {selected && (
          <h2 style={{ fontSize: "min(24px,2.5vw)" }}>{job.date}</h2>
        )}
      </div>
      {selected && (
        <div className="experienceContent">
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
      )}
    </div>
  );
};

export default Experience;
