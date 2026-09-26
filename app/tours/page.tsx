// app/page.tsx
import React from 'react';

import { tours } from '../../data/tours'
import ToursGrid from '@/components/ToursGrid';
import Link from 'next/link';

const HomePage = () => {

  return (
    <div className="min-h-screen flex flex-col">
      


      <main className="flex-grow container mx-auto p-4">
        <div>
          <Link href='/'>Back to home</Link>
        </div>
        <h1 className="text-4xl font-bold text-center my-8">
          Tours
        </h1>
        <p className="text-center dark:text-gray-300 mb-8">
        We offer personalized tours for whale watching and stargazing in northern Chile.
        </p>
        <ToursGrid tours={tours} />
      </main>


    </div>
  );
};

export default HomePage;
