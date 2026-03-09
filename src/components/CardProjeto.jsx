function cardProjeto({
  imagem,
  titulo,
  descricao,
  tecnologias,
  linkProjeto,
  linkCodigo,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center border border-gray-400 bg-[#FFFAFF] p-4 md:p-6 rounded-xl shadow my-6 hover:border-fuchsia-300 transition-all duration-300 hover:scale-101">
      <div>
        <img
          className="border border-gray-300 rounded"
          src={imagem}
          alt="projeto"
          loading="lazy"
        />
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl font-semibold">{titulo}</h1>
        <p className="text-[#616161]">{descricao}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tecnologias.map((tecnologia, index) => (
            <span
              key={index}
              className="bg-[#E8D8FF] text-[#5b4d82] text-sm px-3 py-1 rounded-full"
            >
              {tecnologia}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a
            href={linkProjeto}
            target="_blank"
            className="bg-[#b907c6] text-white px-4 py-2 rounded-xl text-sm hover:opacity-90 transition"
          >
            Visualizar Projeto
          </a>

          <a
            href={linkCodigo}
            target="_blank"
            className="border border-[#b907c6] text-[#C308D0] px-4 py-2 rounded-xl text-sm transition"
          >
            Ver Código
          </a>
        </div>
      </div>
    </div>
  );
}

export default cardProjeto;
