import React from 'react';
import { Mail, Calendar, Linkedin, Twitter, Instagram, Terminal, MapPin, FileText } from 'lucide-react';

// Configuration Constants
const EMAIL = "hola@genesis-systems.ai";
const CALENDAR_URL = "https://calendly.com/";

const ContactFooter: React.FC = () => {
  return (
    <section 
      id="contacto" 
      className="relative w-full pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#0B1121] to-black"
    >
        
        {/* --- 1. LASER BEAM SEPARATOR --- */}
        {/* The Glowing Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon to-transparent shadow-[0_0_20px_#ff652e] opacity-80 z-20"></div>
        {/* The Circuit Node (Center Anchor) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neon rotate-45 shadow-[0_0_15px_#ff652e] z-20 border border-white/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
            
            {/* --- PART A: CTA TERMINAL --- */}
            
            {/* Terminal Header Decoration */}
            <div className="flex items-center gap-3 mb-8 opacity-90">
                <Terminal size={20} className="text-neon" />
                <span className="font-mono text-sm md:text-base text-neon tracking-[0.15em] uppercase font-bold">SYSTEM_SHUTDOWN // INITIATE_PROTOCOL</span>
            </div>

            {/* Headline */}
            <h2 className="font-inter font-black text-4xl md:text-6xl text-white tracking-tight mb-6 uppercase text-center max-w-4xl leading-tight drop-shadow-lg">
                ¿LISTO PARA INICIAR <br className="hidden md:block" /> EL SISTEMA?
            </h2>

            {/* Subtext */}
            <p className="font-inter font-normal text-slate-400 text-lg mb-12 max-w-2xl mx-auto text-center leading-relaxed">
                Deja de perder tiempo en tareas manuales. Auditemos tu flujo de trabajo hoy mismo.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mb-20">
                
                {/* Button 1: Calendar (Primary) */}
                <a 
                    href={CALENDAR_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-neon text-white font-inter font-bold hover:bg-white hover:text-black transition-all px-8 py-4 rounded-sm shadow-[0_0_20px_rgba(255,101,46,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1"
                >
                    <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                    AGENDAR AUDITORÍA
                </a>

                {/* Button 2: Email (Secondary) */}
                <a 
                    href={`mailto:${EMAIL}`}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border border-slate-700 text-slate-300 hover:border-white hover:text-white transition-all px-8 py-4 rounded-sm font-inter font-medium hover:bg-white/5"
                >
                    <Mail size={20} className="group-hover:scale-110 transition-transform" />
                    ENVIAR EMAIL
                </a>

            </div>

            {/* --- PART B: META-COMPLIANT FOOTER --- */}
            <div className="w-full border-t border-white/5 pt-16 flex flex-col">
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    
                    {/* Column 1: Identity */}
                    <div className="flex flex-col items-start">
                        <span className="font-inter font-black text-xl text-white tracking-tight uppercase mb-4 block">
                            GÉNESIS SYSTEMS
                        </span>
                        <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                            Automatización inteligente para empresas que escalan. Transformamos operaciones manuales en ecosistemas digitales autónomos.
                        </p>
                    </div>

                    {/* Column 2: Contact & Verification */}
                    <div className="flex flex-col items-start">
                        <h4 className="font-inter font-bold text-xs text-slate-200 mb-6 tracking-widest uppercase">
                            CONTACTO
                        </h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-3 text-slate-500 text-xs">
                                <MapPin size={14} className="mt-0.5 shrink-0" />
                                <span>Calle Ejemplo 123,<br/>28001 Madrid, España</span>
                            </div>
                            <div className="flex items-start gap-3 text-slate-500 text-xs">
                                <FileText size={14} className="mt-0.5 shrink-0" />
                                <span>VAT/NIF: ES-B12345678</span>
                            </div>
                            <div className="flex items-start gap-3 text-slate-500 text-xs hover:text-white transition-colors">
                                <Mail size={14} className="mt-0.5 shrink-0" />
                                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Legal */}
                    <div className="flex flex-col items-start">
                        <h4 className="font-inter font-bold text-xs text-slate-200 mb-6 tracking-widest uppercase">
                            LEGAL
                        </h4>
                        <ul className="flex flex-col gap-3 text-xs text-slate-500">
                            <li><a href="#" className="hover:text-neon transition-colors">Aviso Legal</a></li>
                            <li><a href="#" className="hover:text-neon transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-neon transition-colors">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-neon transition-colors">Política de Cookies</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Socials */}
                    <div className="flex flex-col items-start">
                        <h4 className="font-inter font-bold text-xs text-slate-200 mb-6 tracking-widest uppercase">
                            SÍGUENOS
                        </h4>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-sm border border-slate-800 text-slate-400 hover:text-white hover:border-neon hover:bg-neon/10 transition-all">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-sm border border-slate-800 text-slate-400 hover:text-white hover:border-neon hover:bg-neon/10 transition-all">
                                <span className="sr-only">Twitter</span>
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-sm border border-slate-800 text-slate-400 hover:text-white hover:border-neon hover:bg-neon/10 transition-all">
                                <span className="sr-only">Instagram</span>
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Row */}
                <div className="w-full border-t border-white/5 pt-8 text-center">
                    <p className="text-slate-600 text-[10px] font-mono uppercase tracking-wider">
                        © 2026 GÉNESIS AI. Todos los derechos reservados.
                    </p>
                </div>

            </div>

        </div>
    </section>
  );
};

export default ContactFooter;