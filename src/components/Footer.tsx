import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <a href="./#">
        <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
      </a>
      <a href="./#">
        <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
      </a>
      <a href="./#">
        <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
      </a>
      <a href="./#">
        <FontAwesomeIcon icon={faGithubSquare} className="icon" />
      </a>
    </footer>
  );
}

export default Footer;
