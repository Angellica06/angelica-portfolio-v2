import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaBehance } from "react-icons/fa";
import Logo from "../assets/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full font-sans font-medium bg-[#E3CEFA] z-50">
      <nav className="container mx-auto flex justify-between items-center px-8 py-5 md:px-16">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={Logo} className="w-10" alt="Logo Angélica Oliveira" />
          <h1 className="text-[#3D2D69] font-semibold text-[1.4rem]">
            Angélica Oliveira
          </h1>
        </a>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-3">
          <li className="">
            <a
              href="#inicio"
              className="text-[#3D2D69] p-2 hover:rounded-xl hover:bg-fuchsia-400 hover:text-white hover:font-medium"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="text-[#3D2D69] p-2 hover:rounded-xl hover:bg-fuchsia-400 hover:text-white hover:font-medium"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              className="text-[#3D2D69] p-2 hover:rounded-xl hover:bg-fuchsia-400 hover:text-white hover:font-medium"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="text-[#3D2D69] p-2 hover:rounded-xl hover:bg-fuchsia-400 hover:text-white hover:font-medium"
            >
              Contato
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-[#3D2D69] text-2xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <FaBarsStaggered />
        </button>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Menu mobile */}
      <ul
        className={`fixed top-0 right-0 h-dvh w-80 md:hidden z-50 flex flex-col text-[#3D2D69] bg-[#F6F2FF] shadow-xl transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Botão fechar */}
        <div className="flex justify-end p-6">
          <button className=" cursor-pointer" onClick={closeMenu}>
            <FaXmark size={26} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-6 mt-2 text-xl font-medium">
          <li className="w-full text-center p-3 hover:bg-fuchsia-400 hover:text-white transition">
            <a href="#inicio" onClick={closeMenu}>
              Início
            </a>
          </li>

          <li className="w-full text-center p-3 hover:bg-fuchsia-400 hover:text-white transition">
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
          </li>

          <li className="w-full text-center p-3 hover:bg-fuchsia-400 hover:text-white transition">
            <a href="#projetos" onClick={closeMenu}>
              Projetos
            </a>
          </li>

          <li className="w-full text-center p-3 hover:bg-fuchsia-400 hover:text-white transition">
            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </li>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center gap-5 text-3xl mt-auto pb-12">
          <a
            href="https://www.linkedin.com/in/angélica-anjos6/"
            target="_blank"
            className="hover:text-[#C308D0] transition-all duration-300 hover:scale-110"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/Angellica06"
            target="_blank"
            className="hover:text-[#C308D0] transition-all duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.behance.net/angeloliveira7"
            target="_blank"
            className="hover:text-[#C308D0] transition-all duration-300 hover:scale-110"
          >
            <FaBehance />
          </a>
        </div>
      </ul>
    </header>
  );
}

export default NavBar;
