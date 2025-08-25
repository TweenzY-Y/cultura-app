import PageLayout from "./components/PageLayout";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navElements = [
    { name: "Home", href: "/" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <PageLayout>
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} navElements={navElements}></Header>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} navElements={navElements} />
      <Hero></Hero>
    </PageLayout>
  );
}
