import React from 'react';

const About = () => {

  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-grow container mx-auto p-4">
        <div className='p-4'>
          <h1 className="text-justify text-3xl font-bold my-8">
            Lucumillo Tours
          </h1>
          <p className="text-justify dark:text-gray-300 mb-8">
          Ofrecemos tours personalizados para observar ballenas y ver el cielo nocturno en el norte de Chile.
          </p>
        </div>

        <div className='mb-8 p-4'>
          <h2 className='text-justify text-2xl font-bold'>Porqué Lucumillo?</h2>
          <p className='text-justify text-lg dark:text-gray-300'>
          El nombre Lucumillo proviene de Myrcianthes coquimbensis, un arbusto raro y en peligro de extinción, nativo de los desiertos costeros de Chile. Su distribución es muy limitada, abarcando solo unos pocos cientos de kilómetros en la región de Coquimbo, donde crece entre grandes rocas de granito, alimentado por las frescas y húmedas brisas del océano Pacífico. El arbusto Lucumillo está profundamente ligado a este ecosistema único, dependiendo de condiciones ambientales específicas y enfrentando amenazas debido a la pérdida de hábitat causada por el desarrollo urbano y el turismo.
          </p>
          <p className='text-justify text-lg dark:text-gray-300'>
          Elegimos este nombre para honrar la resistencia del Lucumillo, que, a pesar de su fragilidad, prospera en las duras condiciones del desierto costero chileno. Al adoptar este nombre, esperamos generar conciencia sobre la importancia de conservar tanto la especie como su delicado hábitat. De este modo, buscamos contribuir a la protección de esta extraordinaria parte del patrimonio natural de Chile.
          </p>
        </div>

        {/* OUR GUIDES */}

        <div className='mb-8 p-4'>
          <h2 className='text-justify text-2xl font-bold'>Nuestros Guías</h2>
          <p>Colaboramos principalmente con guías locales especializados proporcionados por los sitios que visitamos, asegurando que disfrutes de un conocimiento auténtico y privilegiado. Además, nuestro equipo incluye guías con diversas especialidades e intereses, desde entusiastas de la vida silvestre hasta expertos en astronomía, apasionados por compartir sus perspectivas y conocimientos únicos. Juntos, buscamos ofrecerte una conexión más profunda con los lugares que exploras.</p>
        </div>

      </main>


    </div>
  );
};

export default About;
