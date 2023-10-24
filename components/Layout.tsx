import Navbar from "./Navbar";
import Footer from "./Footer";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
