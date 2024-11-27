import Image from 'next/image';

export const Main = () => {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center  px-6 py-8">
      <section className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl text-center font-bold text-yellow-500">
          Welcome to CarShop
        </h1>
        <p className="mt-2 text-gray-600 text-sm text-center sm:text-base">
          Explore the best deals on new and used cars. Drive your dream car
          today.
        </p>
      </section>

      <section className="flex flex-wrap gap-6 justify-center sm:justify-start px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-4 w-full sm:w-[500px] lg:w-[700px] xl:w-[800px]">
          <Image
            src="https://i.infocar.ua/i/12/5252/1400x700.jpg"
            alt="car"
            className="w-full h-[200px] sm:h-[300px] lg:h-[350px] xl:h-[400px] object-cover rounded-md"
            width={800}
            height={400}
          />
          <h2 className="mt-4 text-base sm:text-lg lg:text-xl font-semibold text-gray-800 text-center sm:text-left">
            Choose your dream!
          </h2>
          <p className="mt-2 text-sm sm:text-base lg:text-lg font-bold text-yellow-500 text-center sm:text-left">
            Buy today!
          </p>
        </div>
      </section>

      <section className="bg-yellow-500 text-white p-6 rounded-lg items-center text-center w-full sm:w-auto">
        <h2 className="text-2xl font-bold">Ready to Find Your Car?</h2>
        <p className="mt-2 text-sm">
          Sign up now and get access to exclusive deals and discounts!
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-yellow-500 rounded-lg font-bold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </main>
  );
};
