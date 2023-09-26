import projects from "./ProjectsData";

const PersonalProjects = () => {
  return (
    <div style={{ marginTop: "4vh" }}>
      {projects.map((p) => (
        <div key={p.href}>
          <a href={p.href} target="_blank" className="projectLink">
            {p.title}
          </a>
          <p className="projectDesc">{p.desc}</p>
          <hr style={{ margin: "3vw" }}></hr>
        </div>
      ))}
    </div>
  );
};

export default PersonalProjects;
