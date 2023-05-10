import Image from "next/image";
import logo from "../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center">
      <hr className="w-11/12 h-0 bg-slate-400" />
      <div className="my-8 w-11/12 flex justify-between">
        <div>
          <Image src={logo} alt="freebies" width={100} height={200} />
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
};
