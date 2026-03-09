import NavBar from "./components/NavBar";
import Inicio from "./sections/Inicio";
import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";
import Contato from "./sections/Contato";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-[#E3CEFA]">
        <NavBar />
        <Inicio />
        <Sobre />
        <Projetos />
        <Contato />
        <Footer />
      </div>
    </>
  );
}

export default App;
