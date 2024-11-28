import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { fetchCarById } from '@/utils';
import { Loader } from '@/components';

interface CarPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CarPageProps): Promise<Metadata> {
  const id = (await params).id;

  const car = await fetchCarById(Number(id));

  if (!car) {
    return {
      title: 'Car Not Found - CarShop',
      description: 'The car you are looking for could not be found.',
    };
  }

  return {
    title: `${car.make} ${car.model} - Details`,
    description: `Details about ${car.make} ${car.model}`,
    openGraph: {
      title: `${car.make} ${car.model}`,
      description: `Learn more about the ${car.make} ${car.model}`,
      images: [
        {
          url: car.img,
          alt: `${car.make} ${car.model}`,
        },
      ],
      type: 'website',
    },
  };
}

async function CarDetails({ id }: { id: string }) {
  const car = await fetchCarById(Number(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="px-4 py-8 sm:px-8 sm:py-12 lg:px-16 lg:py-16">
      <div className="max-w-screen-lg mx-auto space-y-8">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src={car.img}
            alt={`${car.make}-${car.model}-img`}
            width={1400}
            height={700}
            className="rounded-lg shadow-md object-cover"
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
  );
}

export default async function CarPage({ params }: CarPageProps) {
  const { id } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <CarDetails id={id} />
    </Suspense>
  );
}
