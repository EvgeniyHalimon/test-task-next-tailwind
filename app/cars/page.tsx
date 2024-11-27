'use client';

import { useEffect, useState } from 'react';
import { fetchData } from '@/utils';
import { Car, Loader } from '@/components';
import { ICar } from '@/types/types';

export default function Cars() {
  const [cars, setCars] = useState<ICar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getCars = async () => {
    const cars = await fetchData();
    setCars(cars);
    setLoading(false);
  };

  useEffect(() => {
    getCars();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex gap-10 flex-wrap px-6 py-10">
      {cars.map((car) => (
        <Car car={car} key={car.id} />
      ))}
    </div>
  );
}
