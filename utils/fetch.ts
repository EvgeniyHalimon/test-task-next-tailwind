import path from 'path';
import fs from 'fs';
import { ICar } from '@/types/types';

export const fetchData = async (): Promise<ICar[]> => {
  if (typeof window !== 'undefined') {
    const res = await fetch('/data.json');
    const { cars } = await res.json();
    return cars;
  } else {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { cars } = JSON.parse(fileContents);
    return cars;
  }
};

export const fetchCarById = async (id: number): Promise<ICar | undefined> => {
  const cars = await fetchData();
  return cars.find((car) => car.id === id);
};
