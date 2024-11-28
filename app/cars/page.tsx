import { Suspense } from 'react';
import { Metadata } from 'next';
import { Car, Loader } from '@/components';
import { fetchData } from '@/utils';
import { ICar } from '@/types/types';

export const metadata: Metadata = {
  title: 'Cars - CarShop',
  description: 'Explore our wide range of cars, from high-performance vehicles to eco-friendly options.',
};

export default function CarsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <CarsList />
    </Suspense>
  );
}

async function CarsList() {
  const cars: ICar[] = await fetchData();

  return (
    <div className="flex gap-10 flex-wrap px-6 py-10">
      {cars.map((car) => (
        <Car car={car} key={car.id} />
      ))}
    </div>
  );
}

