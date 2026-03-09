import Avatar from "../assets/avatar2.png";

function Sobre() {
  const tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue",
    "Tailwind",
    "Bootstrap",
    "Git",
    "GitHub",
    "Figma",
  ];

  return (
    <section
      id="sobre"
      className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center bg-[#FDFDFD] px-8 md:px-22 py-14 md:py-20"
    >
      <div className="text-[#3D2D69]">
        <p className="text-[#C308D0] font-medium">SOBRE MIM</p>
        <h1 className="font-semibold text-4xl w-80">
          Design & código <span className="text-fuchsia-700">em harmonia.</span>
        </h1>

        <p className="mt-4">
          Sou Desenvolvedora Front-end formada em Análise e Desenvolvimento de
          Sistemas, com foco na criação de interfaces modernas, responsivas e
          centradas na experiência do usuário. Gosto de unir desenvolvimento e
          design para construir aplicações intuitivas e funcionais. Tenho
          experiência com HTML, CSS, JavaScript, React e Tailwind CSS, além de
          ferramentas como Git, GitHub e Figma, buscando sempre aplicar boas
          práticas de desenvolvimento e usabilidade. Atualmente, estou em busca
          de uma oportunidade para atuar como desenvolvedora front-end.
        </p>

        <div className="mt-6">
          <p className="text-sm font-medium text-[#3D2D69] mb-2">
            Tecnologias & Ferramentas
          </p>

          <div className="flex flex-wrap gap-3 text-gray-800">
            {tecnologias.map((tec, index) => (
              <div
                key={index}
                className="border-2 px-3 py-1 rounded-xl transition-all duration-300 hover:scale-105"
              >
                {tec}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-end justify-center h-full mt-8 md:mt-2">
        <img src={Avatar} loading="lazy" alt="avatar" />
      </div>
    </section>
  );
}

export default Sobre;
