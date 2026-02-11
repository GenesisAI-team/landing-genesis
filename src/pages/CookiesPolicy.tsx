import React from "react";

const CookiesPolicy: React.FC = () => {
  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen py-32 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Política de Cookies
        </h1>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Una cookie es un fichero que se descarga en su ordenador al acceder
            a determinadas páginas web. Las cookies permiten a una página web,
            entre otras cosas, almacenar y recuperar información sobre los
            hábitos de navegación de un usuario o de su equipo y, dependiendo de
            la información que contengan y de la forma en que utilice su equipo,
            pueden utilizarse para reconocer al usuario.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-2">
            2. ¿Qué tipos de cookies utiliza esta página web?
          </h2>
          <p>Esta página web utiliza los siguientes tipos de cookies:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>Cookies de análisis:</strong> Son aquéllas que bien
              tratadas por nosotros o por terceros, nos permiten cuantificar el
              número de usuarios y así realizar la medición y análisis
              estadístico de la utilización que hacen los usuarios del servicio
              ofertado. Para ello se analiza su navegación en nuestra página web
              con el fin de mejorar la oferta de productos o servicios que le
              ofrecemos.
            </li>
            <li>
              <strong>Cookies técnicas:</strong> Son aquellas que permiten al
              usuario la navegación a través del área restringida y la
              utilización de sus diferentes funciones, como por ejemplo, llevar
              a cambio el proceso de compra de un artículo.
            </li>
          </ul>
        </section>

        {/* Puedes añadir más secciones aquí si es necesario */}
      </div>
    </div>
  );
};

export default CookiesPolicy;
