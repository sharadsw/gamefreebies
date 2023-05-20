import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="shadow bg-gray-50">
      <div className="h-14 mx-auto px-5 flex items-center justify-between">
        <a
          className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
          href=""
        >
          <Logo />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
