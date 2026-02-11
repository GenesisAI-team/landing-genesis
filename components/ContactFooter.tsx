import React, { useState, useEffect } from "react";
import {
  Mail,
  Calendar,
  Linkedin,
  Twitter,
  Instagram,
  Terminal,
  MapPin,
  FileText,
  X,
} from "lucide-react";

// --- CONFIGURACIÓN ---
const EMAIL = "genesisnavarra.ai@gmail.com";
const CALENDAR_URL = "https://cal.com/genesis-ch8rkh/30min";

const ContactFooter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <section
        id="contacto"
        className="relative w-full pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#0B1121] to-black"
      >
        {/* --- 1. LASER BEAM SEPARATOR --- */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon to-transparent shadow-[0_0_20px_#ff652e] opacity-80 z-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neon rotate-45 shadow-[0_0_15px_#ff652e] z-20 border border-white/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          {/* --- PART A: CTA TERMINAL --- */}
          <div className="flex items-center gap-3 mb-8 opacity-90">
            <Terminal size={20} className="text-neon" />
            <span className="font-mono text-sm md:text-base text-neon tracking-[0.15em] uppercase font-bold">
              SYSTEM_SHUTDOWN // INITIATE_PROTOCOL
            </span>
          </div>

          <h2 className="font-inter font-black text-4xl md:text-6xl text-white tracking-tight mb-6 uppercase text-center max-w-4xl leading-tight drop-shadow-lg">
            ¿LISTO PARA INICIAR <br className="hidden md:block" /> EL SISTEMA?
          </h2>

          <p className="font-inter font-normal text-slate-400 text-lg mb-12 max-w-2xl mx-auto text-center leading-relaxed">
            Deja de perder tiempo en tareas manuales. Auditemos tu flujo de
            trabajo hoy mismo.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-20">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-neon text-white font-inter font-bold hover:bg-white hover:text-black transition-all px-8 py-4 rounded-sm shadow-[0_0_20px_rgba(255,101,46,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1"
            >
              <Calendar
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              AGENDAR AUDITORÍA
            </button>

            <a
              href={`mailto:${EMAIL}`}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border border-slate-700 text-slate-300 hover:border-white hover:text-white transition-all px-8 py-4 rounded-sm font-inter font-medium hover:bg-white/5"
            >
              <Mail
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              ENVIAR EMAIL
            </a>
          </div>

          {/* --- PART B: META-COMPLIANT FOOTER --- */}
          <div className="w-full border-t border-white/5 pt-16">
            {/* CORRECCIÓN: Flex container centrado para las columnas */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-24 w-full max-w-6xl mx-auto">
              {/* Column 1: Identity */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs">
                <span className="font-inter font-black text-xl text-white tracking-tight uppercase mb-4 block">
                  GÉNESIS
                </span>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Automatización inteligente para empresas que escalan.
                  Transformamos operaciones manuales en ecosistemas digitales
                  autónomos.
                </p>
              </div>

              {/* Column 2: Contact */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[200px]">
                <h4 className="font-inter font-bold text-xs text-slate-200 mb-6 tracking-widest uppercase">
                  CONTACTO
                </h4>
                <div className="flex flex-col gap-3 items-center md:items-start">
                  <div className="flex items-start gap-3 text-slate-500 text-xs">
                    <MapPin size={14} className="mt-0.5 shrink-0" />
                    <span>
                      Calle los Arcos, 4 Izquierda
                      <br />
                      España
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-500 text-xs">
                    <FileText size={14} className="mt-0.5 shrink-0" />
                    <span>NIF: G71XXXXXX</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-500 text-xs hover:text-white transition-colors">
                    <Mail size={14} className="mt-0.5 shrink-0" />
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </div>
                </div>
              </div>

              {/* Column 3: Legal */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[200px]">
                <h4 className="font-inter font-bold text-xs text-slate-200 mb-6 tracking-widest uppercase">
                  LEGAL
                </h4>
                <ul className="flex flex-col gap-3 text-xs text-slate-500 items-center md:items-start">
                  <li>
                    <a
                      href="/aviso-legal"
                      className="hover:text-neon transition-colors"
                    >
                      Aviso Legal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacidad"
                      className="hover:text-neon transition-colors"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cookies"
                      className="hover:text-neon transition-colors"
                    >
                      Política de Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="w-full border-t border-white/5 pt-8 text-center mt-12">
              <p className="text-slate-600 text-[10px] font-mono uppercase tracking-wider">
                © {new Date().getFullYear()} GÉNESIS INNOVACIÓN DIGITAL. Todos
                los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL CALENDARIO (POPUP) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#0B1121] border border-slate-700 rounded-lg shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#020617]">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-neon" />
                <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
                  SECURE_CHANNEL // SCHEDULE_MEETING
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-grow w-full bg-white">
              <iframe
                src={CALENDAR_URL}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Calendario"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFooter;
