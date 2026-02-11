import React from "react";

const LegalNotice: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen py-32 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Aviso Legal
        </h1>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            1. Datos Identificativos
          </h2>
          <p>
            En cumplimiento con el deber de información recogido en artículo 10
            de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Información y del Comercio Electrónico, a continuación se reflejan
            los siguientes datos:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Titular:</strong> GÉNESIS INNOVACIÓN DIGITAL
            </li>
            <li>
              <strong>NIF:</strong> G71XXXXXX
            </li>
            <li>
              <strong>Domicilio:</strong> Calle los Arcos, 4 Izquierda, 31470 ,
              Noáin, España
            </li>
            <li>
              <strong>Email:</strong> genesisnavarra.ai@gmail.com
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">2. Usuarios</h2>
          <p>
            El acceso y/o uso de este portal de GÉNESIS INNOVACIÓN DIGITAL
            atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o
            uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas
            Condiciones serán de aplicación independientemente de las
            Condiciones Generales de Contratación que en su caso resulten de
            obligado cumplimiento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            3. Uso del Portal
          </h2>
          <p>
            www.genesisnavarra.com proporciona el acceso a multitud de
            informaciones, servicios, programas o datos (en adelante, "los
            contenidos") en Internet pertenecientes a GÉNESIS SYSTEMS o a sus
            licenciantes a los que el USUARIO pueda tener acceso. El USUARIO
            asume la responsabilidad del uso del portal.
          </p>
        </section>

        {/* Puedes añadir más secciones aquí si es necesario */}
      </div>
    </div>
  );
};

export default LegalNotice;
