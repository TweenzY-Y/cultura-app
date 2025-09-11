import PageLayout from "./components/PageLayout";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import AuthModal from "./components/AuthModal";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("login");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = (tab) => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navElements = [
    { name: "Home", href: "/" },
    { name: "Community", href: "/community" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <PageLayout>
      <Header toggleMenu={toggleMenu} navElements={navElements} openModal={openModal} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} navElements={navElements} openModal={openModal} />
      <Hero />
      <AuthModal isOpen={modalOpen} modalTab={modalTab} openModal={openModal} closeModal={closeModal} />
    </PageLayout>
  );
}
