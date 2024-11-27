'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Loader } from '@/components';
import { ICar } from '@/types/types';
import { fetchCarById } from '@/utils';

export default function CarPage() {
  const { id } = useParams();
  const [car, setCar] = useState<ICar | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getCar = async (id: number) => {
    const car = await fetchCarById(id);
    if (car) {
      setCar(car);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getCar(Number(id));
    }
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    car && (
      <div className="px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
        <div className="max-w-screen-lg mx-auto space-y-8">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src={car.img}
              alt={`${car.make}-${car.model}-img`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
              placeholder="blur"
              blurDataURL={car.img}
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold text-yellow-500">
              {car.make} {car.model}
            </h1>
            <p className="text-xl text-gray-600">{car.description}</p>
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4">
              <p className="text-lg font-semibold text-yellow-500">
                Price: {car.cost}
              </p>
              <button className="mt-4 sm:mt-0 bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-400 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
