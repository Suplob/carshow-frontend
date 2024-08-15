import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero></Hero>
      <Services></Services>
    </div>
  );
}
