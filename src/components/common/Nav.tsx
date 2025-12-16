import{ useState } from "react";
import logo from "../../assets/logo/logo.png"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <section className="px-6  sticky top-0 z-50">
      <header className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl max-w-2xl mx-auto text-white shadow-blue">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl flex items-center gap-2 font-bold">
              <img src={logo} alt="" className="h-9" />
              <div>
                <span className="text-blue-400">Port</span>folio
              </div>
            </div>

            {/* Hamburger Menu Button - All Screens */}
            <button
              onClick={toggleMenu}
              className="flex flex-col space-y-1.5 w-8 h-9 justify-center items-center"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-8 h-1 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-1 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-1 rounded-full bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-3" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu - Sliding Down - All Screens */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 py-4 border-t border-slate-700">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white/70 transition-colors md:mb-0 duration-300 py-2 px-4 hover:bg-slate-800 rounded-full"
                >
                  {item}
                </a>
              ))}
              <button className="bg-[#1e253d] hover:bg-blue-600 px-6 py-2 rounded-full transition-all duration-300 ">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Nav;


