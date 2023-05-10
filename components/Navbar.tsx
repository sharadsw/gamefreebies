import Image from "next/image";
import logo from "../public/logo.png";

export const Navbar = () => {
  return (
    <div className="shadow bg-gray-50">
      <div className="h-14 mx-auto px-5 flex items-center justify-between">
        <a
          className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
          href=""
        >
          <Image src={logo} alt="freebies" width={100} height={200} />
        </a>
      </div>
    </div>
  );
};
