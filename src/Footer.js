import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer>
      <a
        className="footerLink"
        target="_blank"
        href="https://github.com/dfriedman10/"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="footerLink"
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/david-friedman-85705526b/"
      >
        <FaLinkedin />
      </a>
      <a
        className="footerLink"
        rel="noreferrer"
        target="_blank"
        href="mailto:friedmandavid10@gmail.com"
      >
        <HiOutlineMail />
      </a>
    </footer>
  );
};

export default Footer;
