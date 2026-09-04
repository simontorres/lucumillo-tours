import React from 'react';

import { tours } from '../../../data/tours'
import Link from 'next/link';


import { AnimatedGallery } from '@/components/AnimatedGallery';
import { formatCurrency } from '@/utils/formatCurrency';

export async function generateStaticParams() {
  return tours.map((tour) => ({ id: tour.id }))
}



export default async function Tours({ params, }: { params: Promise<{ id: string }> }) {

  const id = (await params).id

  const tour = tours.find((tour) => tour.id === id)

  if (!tour || !tour.enabled) {
    return (
      <div className='min-h-screen'>
        <p>Not found!</p>
      </div>)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto p-4">
        <div>
          <Link href='/tours'>Volver a los Tours</Link>
        </div>
        <h1 className="text-4xl font-bold text-center my-8">
          {tour.title}
        </h1>
        <div className="text-center dark:text-gray-300 mb-8">
          {tour.long_description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div>
          <p><b>Que se incluye:</b> { tour.includes }</p>

          { tour.price ? <p><b>Precio: </b> { formatCurrency(tour.price, 'es-CL', 'CLP')}</p>: <></>}
          
          <p><b>Asientos: </b> {tour.seats}</p>
          <p><b>Lugar de Partida:</b> {tour.departing_place}</p>
          <p><b>Hora de Partida:</b> { tour.departing_time ? tour.departing_time : 'Por definir' }</p>
        </div>
        <AnimatedGallery images={tour.gallery} subpath='tours'/>
      </main>
    </div>
  );
};
