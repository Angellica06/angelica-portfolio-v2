import Avatar from "../assets/avatar.png";

function Inicio() {
  return (
    <section
      id="inicio"
      className="fade-in min-h-screen grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center bg-linear-to-b from-[#e5d1fa] to-[#c29efe] px-8 md:px-20 pt-32"
    >
      <div className="text-[#3D2D69]">
        <p className="text-[1rem] md:text-[1.25rem] text-[#b907c6]">
          Desenvolvedora Front-End com foco em UX
        </p>
        <h1 className="font-extrabold text-[2.8rem] md:text-[3.4rem] leading-tight">
          Criando experiências <span className="text-[#b907c6]">digitais</span>{" "}
          que encantam.
        </h1>
        <span className="text-[1rem] md:text-[1.1rem] leading-relaxed">
          Transformo ideias em interfaces elegantes e funcionais, unindo design
          centrado no usuário com código limpo e performático.
        </span>
        <div className="flex gap-3 my-4 mb-8 text-white fade-in delay-1">
          <a
            href="#projetos"
            className="bg-[#b907c6] p-3 rounded-xl font-medium cursor-pointer
             transition-all duration-300 hover:scale-105"
          >
            Ver Projetos
          </a>

          <a
            href="#contato"
            className="border-2 p-3 rounded-xl font-medium cursor-pointer
             transition-all duration-300 hover:scale-105"
          >
            Entrar em Contato
          </a>
        </div>
      </div>

      <div className="flex items-end justify-center h-full">
        <img src={Avatar} alt="avatar" loading="lazy" className="fade-in delay-2" />
      </div>
    </section>
  );
}

export default Inicio;
