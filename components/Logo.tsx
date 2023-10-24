import Image from "next/image";
import logo from "../public/logo.png";

const Logo = () => {
  return <Image src={logo} alt="freebies" width={100} height={200} />;
};

export default Logo;
