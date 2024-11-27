import { ICar } from '@/types/types';

export const fetchData = async (): Promise<ICar[]> => {
  const res = await fetch('/data.json');
  const { cars } = await res.json();
  return cars;
};

export const fetchCarById = async (id: number): Promise<ICar | undefined> => {
  const cars = await fetchData();
  return cars.find((car) => car.id === id);
};
