import Image from "next/image";
import Features from "./components/Features";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Landing() {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <div className="flex flex-col justify-center items-center">
        <NavBar />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
