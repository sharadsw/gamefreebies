import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <hr className="w-11/12 h-0 bg-slate-400" />
      <div className="my-8 w-11/12 flex justify-between">
        <div>
          <Logo />
          <span>freebies.gg © {new Date().getFullYear()}</span>
        </div>
        <span>
          <a
            href="https://www.github.com"
            className="text-slate-800 hover:text-slate-600 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;