import CardProjeto from "../components/CardProjeto";
import Projeto1 from "../assets/projeto1.png";
import Projeto2 from "../assets/projeto2.png";
import Projeto3 from "../assets/projeto3.png";
import { FiArrowRight } from "react-icons/fi";

function Projetos() {
  const projetos = [
    {
      id: 1,
      imagem: Projeto1,
      titulo: "Meu Saldo",
      descricao:
        "Aplicação web para controle de finanças pessoais, permitindo registrar entradas e despesas com cálculo automático de saldo e persistência de dados no navegador.",
      tecnologias: ["React", "JavaScript", "Tailwind CSS", "LocalStorage"],
      linkProjeto: "https://meu-saldo.netlify.app/",
      linkCodigo: "https://github.com/Angellica06/controle-de-gastos",
    },
    {
      id: 2,
      imagem: Projeto2,
      titulo: "ImovelHome",
      descricao:
        "Site institucional para imobiliária fictícia, com foco em navegação intuitiva, organização das informações e layout totalmente responsivo.",
      tecnologias: ["React","JavaScript", "Tailwind CSS"],
      linkProjeto: "https://imovel-home.netlify.app/",
      linkCodigo: "https://github.com/Angellica06/ImovelHome",
    },
    {
      id: 3,
      imagem: Projeto3,
      titulo: "FilmBox",
      descricao:
        "Aplicação web que exibe filmes e séries populares, permitindo busca por títulos e visualização de detalhes como descrição, data de lançamento e avaliação, com navegação fluida entre as páginas.",
      tecnologias: ["Vue", "JavaScript", "Bootstrap", "TMDb API"],
      linkProjeto: "https://filmbox1.netlify.app/",
      linkCodigo: "https://github.com/Angellica06/FilmBox",
    },
  ];

  return (
    <section
      id="projetos"
      className="flex flex-col bg-[#F4ECFF] px-6 md:px-22 py-14 md:py-18"
    >
      <div className="text-[#3D2D69]">
        <p className="text-[#C308D0] font-medium">PROJETOS</p>
        <h1 className="font-semibold text-4xl w-80">Em Destaques.</h1>

        {projetos.map((projeto) => (
          <CardProjeto
            key={projeto.id}
            imagem={projeto.imagem}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            tecnologias={projeto.tecnologias}
            linkProjeto={projeto.linkProjeto}
            linkCodigo={projeto.linkCodigo}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://github.com/Angellica06?tab=repositories"
          target="_blank"
          className="group flex items-center justify-center gap-1 underline text-[#3D2D69] font-medium hover:text-[#b907c6] transition"
        >
          Ver mais projetos no GitHub
          <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

export default Projetos;
