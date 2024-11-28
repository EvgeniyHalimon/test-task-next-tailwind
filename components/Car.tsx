'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ICar } from '@/types/types';

export const Car = ({ car }: { car: ICar }) => {
  const { make, model, description, cost, img, id } = car;

  return (
    <div className="sm:max-w-lg max-w-sm mx-auto bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Image
        src={img}
        alt={`${make}-${model}-img`}
        width={700}
        height={350}
        loading="lazy"
        className="w-full h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[375px] object-cover rounded-t-lg"
        placeholder="blur"
        blurDataURL={img}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {make} - {model}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          {description || 'No description available'}
        </p>
        <p className="mt-4 text-xl font-bold text-gray-900">
          {cost ? `$${cost}` : 'Contact for price'}
        </p>
        <Link href={`/cars/${id}`}>
          <button className="mt-4 w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
