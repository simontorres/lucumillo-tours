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
          We offer personalized tours for whale watching and stargazing in northern Chile.
          </p>
        </div>

        <div className='mb-8 p-4'>
          <h2 className='text-justify text-2xl font-bold'>Why Lucumillo?</h2>
          <p className='text-justify text-lg dark:text-gray-300'>
          The name Lucumillo comes from Myrcianthes coquimbensis, a rare and endangered shrub native to Chile&apos;s coastal deserts. Its distribution is very limited, spanning only a few hundred kilometers in the Coquimbo region, where it grows among large granite boulders, nourished by the cool, moist breezes of the Pacific Ocean. The Lucumillo shrub is deeply tied to this unique ecosystem, depending on specific environmental conditions and facing threats from habitat loss caused by urban development and tourism.
          </p>
          <p className='text-justify text-lg dark:text-gray-300'>
          We chose this name to honor the resilience of the Lucumillo, which, despite its fragility, thrives in the harsh conditions of the Chilean coastal desert. By adopting this name, we hope to raise awareness about the importance of conserving both the species and its delicate habitat. In this way, we seek to contribute to the protection of this extraordinary part of Chile&apos;s natural heritage.
          </p>
        </div>

        {/* OUR GUIDES */}

        <div className='mb-8 p-4'>
          <h2 className='text-justify text-2xl font-bold'>Our Guides</h2>
          <p>We work primarily with specialized local guides provided by the sites we visit, ensuring you enjoy authentic, first-hand knowledge. In addition, our team includes guides with diverse specialties and interests, from wildlife enthusiasts to astronomy experts, all passionate about sharing their unique perspectives and knowledge. Together, we aim to offer you a deeper connection with the places you explore.</p>
        </div>

      </main>


    </div>
  );
};

export default About;