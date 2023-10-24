import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <hr className="w-11/12 h-0 bg-slate-400" />
      <div className="my-8 w-11/12 flex justify-between">
        <div>
          <Logo />
          <span>freebies © {new Date().getFullYear()}</span>
        </div>
        <span>
          <Link
            href="https://github.com/sharadsw/gamefreebies"
            className="text-slate-700 hover:text-slate-900 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
