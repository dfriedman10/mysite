import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navBar"
      style={{ display: "flex", flexDirection: "row", justifyContent: "right" }}
    >
      <NavLink
        exact
        className={({ isActive }) =>
          isActive ? "activeNavButton" : "navBarButton"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "activeNavButton" : "navBarButton"
        }
        to="experience"
      >
        Experience
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "activeNavButton" : "navBarButton"
        }
        to="projects"
      >
        Projects
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "activeNavButton" : "navBarButton"
        }
        to="coaching-sports"
      >
        Coaching & Sports
      </NavLink>
    </nav>
  );
};

export default NavBar;
