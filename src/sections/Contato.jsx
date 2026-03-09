import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaBehance } from "react-icons/fa";

function Contato() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_fqsbwe8",
        "template_7ddyhjg",
        form.current,
        "-xU37bSsAE4tF92w-",
      );

      setToast("success");
      form.current.reset();
    } catch {
      setToast("error");
    } finally {
      setTimeout(() => {
        setToast(null);
      }, 3000);

      setLoading(false);
    }
  };

  return (
    <section
      id="contato"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#FDFDFD] px-8 md:px-12 lg:px-20 py-14 md:py-16"
    >
      <div className="text-[#3D2D69]">
        <p className="text-[#C308D0] font-medium">CONTATO</p>

        <h1 className="font-semibold text-3xl md:text-4xl mt-2">
          Vamos transformar ideias em{" "}
          <span className="text-[#b907c6]">experiências digitais</span>
        </h1>

        <p className="mt-4 text-[1rem] text-gray-600">
          Estou sempre aberta a novos projetos e oportunidades. Entre em contato
          e vamos conversar sobre como posso ajudar a transformar sua ideia em
          realidade.
        </p>

        <div className="flex items-center gap-2 text-gray-700 mt-5">
          <FaRegEnvelope className="text-lg" />
          <span className="text-[1rem]">angellica.anjos2@gmail.com</span>
        </div>

        <div className="flex gap-3 text-3xl mt-5">
          <a
            href="https://www.linkedin.com/in/angélica-anjos6/"
            target="_blank"
            className="hover:text-[#C308D0] transition-all duration-300 hover:scale-105"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Angellica06"
            target="_blank"
            className="hover:text-[#C308D0] transition-all duration-300 hover:scale-105"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.behance.net/angeloliveira7"
            target="_blank"
            className="hover:text-[#C308D0] transition-all duration-300 hover:scale-105"
          >
            <FaBehance />
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-xl bg-white border-2 border-gray-600 p-6 md:p-8 rounded-xl shadow"
        >
          <div className="flex flex-col">
            <label className="text-[#b907c6] text-sm font-medium">NOME</label>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              className="mt-1 border-2 border-gray-600 p-3 rounded-xl"
              required
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-[#b907c6] text-sm font-medium">EMAIL</label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              className="mt-1 border-2 border-gray-600 p-3 rounded-xl"
              required
            />
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-[#b907c6] text-sm font-medium">
              MENSAGEM
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Escreva sua mensagem aqui..."
              className="mt-1 border-2 border-gray-600 p-3 rounded-xl"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-[#b907c6] text-white py-3 rounded-xl font-medium cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>

      {toast === "success" && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
          <span>Mensagem enviada com sucesso!</span>

          <button
            onClick={() => setToast(null)}
            className="text-white font-bold ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}

      {toast === "error" && (
        <div className="fixed bottom-6 right-6 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg">
          <span>Erro ao enviar mensagem.</span>

          <button
            onClick={() => setToast(null)}
            className="text-white font-bold ml-2 cursor-pointer"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

export default Contato;
