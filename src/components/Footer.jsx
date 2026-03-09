import Logo from "../assets/logo2.png";

function Footer() {
  return (
    <footer className=" bg-[#2B1E5A] py-5 px-6 md:px-14 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
      <div className="text-center">
        <h1 className="flex items-center justify-center md:justify-start text-gray-50 font-semibold text-lg md:text-xl">
          <img src={Logo} className="w-10 mr-2" alt="logo" />
          Angélica Oliveira
        </h1>
        <p className="text-gray-300 text-sm">
          Desenvolvedora Front-End com foco em UX
        </p>
      </div>

      <div>
        <p className="text-gray-300">
          © 2026 Angélica Oliveira. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
