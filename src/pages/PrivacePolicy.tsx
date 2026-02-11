import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen py-32 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Política de Privacidad
        </h1>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            1. Información al usuario
          </h2>
          <p>
            GÉNESIS INNOVACIÓN DIGITAL es el Responsable del tratamiento de los
            datos personales del Usuario y le informa que estos datos serán
            tratados de conformidad con lo dispuesto en el Reglamento (UE)
            2016/679 de 27 de abril de 2016 (GDPR) relativo a la protección de
            las personas físicas en lo que respecta al tratamiento de datos
            personales y a la libre circulación de estos datos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            2. Finalidad del tratamiento
          </h2>
          <p>
            Mantener una relación comercial con el Usuario. Las operaciones
            previstas para realizar el tratamiento son:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Remisión de comunicaciones comerciales publicitarias por email,
              fax, SMS, MMS, comunidades sociales o cualquier otro medio
              electrónico o físico, presente o futuro, que posibilite realizar
              comunicaciones comerciales.
            </li>
            <li>Realizar estudios estadísticos.</li>
            <li>
              Tramitar encargos, solicitudes o cualquier tipo de petición que
              sea realizada por el usuario a través de cualquiera de las formas
              de contacto que se ponen a su disposición.
            </li>
          </ul>
        </section>

        {/* Puedes añadir más secciones aquí si es necesario */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
