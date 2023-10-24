import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow bg-gray-50">
      <div className="h-14 mx-auto px-5 flex items-center justify-between">
        <Link
          className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
          href="/"
        >
          <Logo />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
