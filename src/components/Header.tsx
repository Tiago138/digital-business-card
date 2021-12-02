import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="img"></div>
      <h1 className="name">Laura Smith</h1>
      <p className="job">Frontend Developer</p>
      <p className="website">laurasmith.website</p>

      <button className="btn btn-email">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        Email
      </button>

      <button className="btn btn-linkedin">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        LinkedIn
      </button>
    </header>
  );
}

export default Header;
