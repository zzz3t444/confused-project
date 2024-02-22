import React, { useState } from "react";
import "./App.css";
import BurgerButton from "./assets/BurgerButton.tsx";
import CrossButton from "./assets/CrossButton.tsx";
// AOS import
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
// section Import
import HeaderSection from "./section/Header/Header.tsx";
// tooling
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="mt-3 xl:mt-10">
        <div data-aos="fade-down" data-aos-id="super-duper" data-aos-duration="1500" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-between lg:justify-around px-3 xl:justify-around h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 block md:hidden lg:hidden xl:hidden">
                <a href="/" className="text-white tracking-widest font-bold">
                  ZEET
                  <span className="text-sky-400">/</span>A
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/" className="text-gray-200 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                    Home.
                  </a>
                  <a href="/" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                    About.
                  </a>
                  <a href="/" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-md font-medium">
                    Contact.
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <BurgerButton /> : <CrossButton />}
              </button>
            </div>
            <div className="flex-shrink-0 hidden md:block lg:block xl:block">
              <a href="/" className="text-white tracking-widest font-bold">
                ZEET
                <span className="text-sky-400">/</span>A
              </a>
            </div>
          </div>
        </div>
        {/* Mobile menu,*/}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Section Content  */}
      <section className="section-content -mt-20">
        {/* start Header */}
        <HeaderSection />
      </section>
    </>
  );
};

export default Navbar;
