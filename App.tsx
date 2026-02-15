import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import CalculatorSection from "./components/CalculatorSection";
import ProcessSection from "./components/ProcessSection";
import ContactFooter from "./components/ContactFooter";

// Importar las páginas legales
// NOTA: Asegúrate de que los archivos estén en src/pages/ y se llamen así
import LegalNotice from "./src/pages/LegalNotice";
import PrivacyPolicy from "./src/pages/PrivacePolicy";
import CookiesPolicy from "./src/pages/CookiesPolicy";
import { SEO } from "./components/SEO";

// Componente para la página principal (Home)
// Incluye el Footer aquí para que sea parte del flujo natural de la Home
const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CalculatorSection />
      <ProcessSection />
      <ContactFooter />
    </>
  );
};

// Componente principal de la lógica
const AppContent: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation(); // Obtenemos el objeto location completo
  const { pathname } = location;

  // 1. Scroll al inicio siempre que cambie la ruta (al entrar a Aviso Legal, por ejemplo)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 2. LÓGICA CRÍTICA: Scroll a la sección específica al volver a la Home
  // Esto lee el estado enviado por el Navbar (navigate("/", { state: { scrollTo: "servicios" } }))
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Un pequeño timeout asegura que el DOM esté listo
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      // Limpiamos el estado para evitar saltos al refrescar
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // 3. Barra de progreso de scroll (Solo visual)
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden text-white font-mono selection:bg-neon selection:text-black">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-neon z-[60] shadow-[0_0_10px_#ff652e]"
        style={{
          width: `${scrollProgress * 100}%`,
          transition: "width 0.1s linear",
        }}
      ></div>

      {/* CRT Scanline Overlay - Kept Global */}
      <div className="fixed inset-0 z-50 pointer-events-none scanlines opacity-30"></div>

      {/* Content Layer */}
      <div className="relative z-20 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={
              <>
                <SEO
                  title="Génesis Navarra | Agencia de automatización e IA en Navarra"
                  description="Generamos ecosistemas digitales autónomos: agentes IA 24/7, automatización de procesos y desarrollo web premium. Menos tareas manuales, más rentabilidad."/>
                <Home />
              </>
            } />
            <Route path="/aviso-legal" element={
              <>
                <SEO 
                  title="Aviso Legal | Génesis Navarra"
                  description="Información legal de Génesis Innovación Digital: titularidad del sitio, condiciones de uso, responsabilidades y datos de contacto."/>
                <LegalNotice />
              </>
            } />
            <Route path="/privacidad" element={
              <>
                <SEO 
                  title="Política de Privacidad | Génesis Navarra"
                  description="Cómo tratamos tus datos personales: qué datos recogemos, para qué los usamos, legitimación, cesiones y tus derechos."/>
                <PrivacyPolicy />
              </>
            } />
            <Route path="/cookies" element={
              <>
                <SEO 
                   title="Política de Cookies | Génesis Navarra"
                description="Información sobre el uso de cookies en la web, tipos de cookies, finalidad y cómo gestionarlas desde tu navegador."/>
                <CookiesPolicy />
              </>
            } />
          </Routes>
        </main>

        {/* El Footer se muestra aquí SOLO si NO estamos en Home 
            (porque Home ya tiene su propio footer dentro) */}
        {pathname !== "/" && <ContactFooter />}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
