import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, X, Check, Terminal, Cpu } from "lucide-react";

// --- SERVICIOS (Data) ---
const services = [
  {
    title: "AGENTES DE ATENCIÓN IA",
    desc: "Tu primera línea de defensa comercial. Atiende, cualifica y vende 24/7 sin descanso.",
    details:
      "Implementamos asistentes virtuales entrenados con tu base de conocimiento empresarial. No son chatbots básicos; son agentes capaces de mantener conversaciones naturales, resolver dudas complejas de clientes, filtrar curiosos de compradores reales y agendar citas directamente en tu calendario.",
    features: [
      "Respuesta inmediata (< 3 seg)",
      "Cualificación de leads automática",
      "Atención omnicanal (Web/WhatsApp)",
      "Escalado infinito de conversaciones",
    ],
    gif: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/eef76b143584307.627d06916ce10.gif",
  },
  {
    title: "AUTOMATIZACIÓN DE PROCESOS",
    desc: "El motor invisible de tu empresa. Conectamos tus herramientas para que trabajen solas.",
    details:
      "Creamos el sistema nervioso de tu negocio. Agentes invisibles que conectan tu CRM, ERP, Email y Calendarios para ejecutar tareas repetitivas sin intervención humana. Desde la generación automática de facturas hasta el onboarding de nuevos clientes, eliminamos el error humano y liberamos a tu equipo.",
    features: [
      "Conexión total (API/Webhooks)",
      "Sincronización de datos en tiempo real",
      "Reducción de costes operativos",
      "Informes y alertas automáticas",
    ],
    gif: "https://cdnb.artstation.com/p/assets/images/images/014/281/887/original/brandon-ellis-cyber.gif?1543324220",
  },
  {
    title: "DESARROLLO WEB PREMIUM",
    desc: "Tu sede digital. Diseño de alto impacto que posiciona tu autoridad y convierte visitas en dinero.",
    details:
      "No hacemos webs genéricas. Desarrollamos plataformas digitales optimizadas para la velocidad y la conversión. Fusionamos estética 'Cyberpunk/Tech' con psicología de ventas para que tu web no solo sea bonita, sino que sea tu mejor comercial. Preparada para SEO y perfectamente adaptable a cualquier dispositivo.",
    features: [
      "Diseño UI/UX de vanguardia",
      "Optimización de velocidad extrema",
      "Estructura orientada a conversión",
      "Mantenimiento y seguridad SSL",
    ],
    gif: "https://i.pinimg.com/originals/90/70/32/9070324cdfc07c68d60eed0c39e77573.gif",
  },
];

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);
  const [scrollY, setScrollY] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Listener
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Auto-Scroll Logic for Mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current && window.innerWidth < 768) {
        const { current } = scrollContainerRef;
        const firstCard = current.children[0] as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.clientWidth;
        const gap = 24;
        const scrollAmount = cardWidth + gap;
        const maxScroll = current.scrollWidth - current.clientWidth;

        if (current.scrollLeft >= maxScroll - 10) {
          current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  // --- LÓGICA DE NAVEGACIÓN DESDE EL MODAL ---
  const handleRequestInfo = () => {
    // 1. Cerrar el modal
    setSelectedService(null);

    // 2. Esperar un momento (100ms) para que se cierre visualmente y luego scroll
    setTimeout(() => {
      document
        .getElementById("contacto")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section
      id="servicios"
      className="relative w-full px-4 sm:px-6 lg:px-8 pt-24 pb-12 bg-slate-950 overflow-hidden"
    >
      <style>{`
          @keyframes retro-scale {
            0% { transform: scale(0.95); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-retro-modal {
            animation: retro-scale 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          /* Card Scanner Effect */
          @keyframes scan-vertical {
            0% { top: -20%; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 120%; opacity: 0; }
          }
          .group:hover .scan-line {
            animation: scan-vertical 1.5s linear infinite;
          }
          
          /* Hide Scrollbar for Carousel */
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
          .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }

          /* Custom Scrollbar for Modal Content */
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #0f172a; 
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #334155; 
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #ff652e; 
          }
       `}</style>

      {/* --- ENHANCED BACKGROUND WITH MOTION & LIGHT --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(30,41,59,0.5)_0%,transparent_70%)]"></div>
        <div
          className="absolute inset-0 bg-grid-pattern opacity-50 animate-grid-flow-slow bg-fixed"
          style={{
            backgroundPosition: `0px ${scrollY * 0.1}px`,
          }}
        ></div>
        <div
          className="absolute inset-0 bg-grid-small opacity-60 mix-blend-overlay animate-grid-flow bg-fixed"
          style={{
            backgroundPosition: `0px ${scrollY * 0.2}px`,
          }}
        ></div>
      </div>

      {/* VISUAL SEPARATOR: Neon Line (Top) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-50 shadow-[0_0_10px_rgba(255,101,46,0.5)] z-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="font-inter font-black text-sm text-neon tracking-[0.2em] mb-4 uppercase">
            CÓMO TE AYUDAMOS
          </h3>
          <h2 className="font-inter font-black text-4xl md:text-5xl text-white uppercase tracking-tight drop-shadow-lg">
            NUESTROS SERVICIOS
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide"
          >
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(service)}
                className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-auto snap-center group relative 
                            bg-[#0B1121] border border-slate-800 rounded-xl p-6
                            shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
                            hover:shadow-[0_20px_40px_-10px_rgba(255,101,46,0.15)] hover:border-neon/50 hover:-translate-y-2 
                            transition-all duration-300 ease-out
                            flex flex-col h-full cursor-pointer overflow-hidden z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent via-neon/10 to-transparent opacity-0 scan-line pointer-events-none z-20"></div>

                {/* GIF Container */}
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg bg-black border border-white/5 z-10">
                  <div className="absolute inset-0 bg-slate-900/10 pointer-events-none z-10"></div>
                  <img
                    src={service.gif}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30"></div>
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow z-10 relative">
                  <h3 className="font-inter font-bold text-xl text-white uppercase mb-3 group-hover:text-neon transition-colors duration-300 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed font-inter font-normal mb-6 flex-grow">
                    {service.desc}
                  </p>

                  {/* CTA Link */}
                  <div className="mt-auto border-t border-white/5 pt-4 w-full flex justify-between items-center">
                    <span className="text-xs font-mono text-slate-500 group-hover:text-slate-400">
                      SYS_ID_0{index + 1}
                    </span>
                    <button className="inline-flex items-center text-xs sm:text-sm font-inter font-medium text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest">
                      VER MÁS{" "}
                      <ArrowUpRight className="ml-1 w-4 h-4 text-neon group-hover:rotate-45 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL (VERTICAL STACK LAYOUT) --- */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedService(null);
          }}
        >
          {/* Modal Box */}
          <div
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#020617] border border-neon rounded-sm shadow-[0_0_30px_rgba(255,101,46,0.2)] overflow-hidden animate-retro-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon/50 z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon/50 z-20 pointer-events-none"></div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 z-50 p-2 bg-slate-900/90 border border-white/20 text-slate-300 hover:text-white hover:bg-red-500/20 rounded-full shadow-lg backdrop-blur-sm transition-colors"
            >
              <X size={20} />
            </button>

            {/* SIDE A: VISUAL */}
            <div className="w-full h-56 md:h-80 relative bg-black border-b border-slate-800 flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,3px_100%] pointer-events-none"></div>
              <div className="absolute inset-0 bg-neon/5 mix-blend-overlay z-10"></div>
              <img
                src={selectedService.gif}
                alt={selectedService.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 border border-neon/50 backdrop-blur-md rounded-sm">
                  <span className="w-2 h-2 bg-neon animate-pulse rounded-full"></span>
                  <span className="font-mono text-xs text-neon uppercase font-bold">
                    SYSTEM_DIAGNOSTIC
                  </span>
                </div>
              </div>
            </div>

            {/* SIDE B: DATA */}
            <div className="w-full flex flex-col relative bg-[#020617] min-h-0 overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-900/30">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-2 overflow-hidden">
                    <Terminal
                      size={14}
                      className="text-slate-500 flex-shrink-0"
                    />
                    <span className="font-mono text-xs text-slate-500 tracking-widest uppercase truncate">
                      ROOT/SERVICES/{selectedService.title.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8 flex-grow overflow-y-auto custom-scrollbar">
                <h2 className="font-inter font-black text-2xl sm:text-3xl text-white uppercase mb-4 leading-none">
                  {selectedService.title}
                </h2>
                <p className="font-inter font-normal text-slate-300 text-base md:text-lg leading-relaxed mb-6 border-l-2 border-slate-800 pl-4">
                  {selectedService.details}
                </p>

                <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-sm">
                  <h4 className="font-inter font-semibold text-xs text-neon mb-3 uppercase tracking-widest flex items-center gap-2">
                    <Cpu size={16} /> SYSTEM_SPECS
                  </h4>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className="mt-0.5 min-w-[16px] h-4 rounded-sm bg-slate-800 flex items-center justify-center group-hover:bg-neon transition-colors">
                          <Check
                            size={12}
                            className="text-white opacity-50 group-hover:opacity-100"
                          />
                        </div>
                        <span className="font-inter font-normal md:font-medium text-sm md:text-base text-slate-300 group-hover:text-white transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTÓN SOLICITAR INFO - AHORA CONECTADO A CONTACTO */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    onClick={handleRequestInfo}
                    className="w-full px-6 py-4 bg-neon text-white font-inter font-medium text-sm md:text-base uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
                  >
                    SOLICITAR INFO {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
