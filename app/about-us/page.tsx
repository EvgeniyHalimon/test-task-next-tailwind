export default function AboutUs() {
  return (
    <section className="flex flex-col items-center sm:items-start px-6 py-10 gap-10 bg-slate-950 min-h-screen">
      <div className=" mx-auto ">
        <h1 className="text-4xl text-center  self-center font-bold mb-4 text-yellow-500">
          About Us
        </h1>
        <p className="text-gray-600 text-lg">
          Your trusted partner in finding the perfect car. From high-performance
          vehicles to eco-friendly options, we bring you the best the market has
          to offer.
        </p>
      </div>

      <div className="flex items-center mx-auto flex-col gap-10">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-3/4 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-600">
            At CarShop, our mission is to simplify the car-buying experience by
            offering a wide range of quality vehicles, competitive prices, and
            exceptional customer service.
          </p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-lg w-full sm:w-3/4 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Join Us on the Road Ahead</h2>
          <p>Contact us today to find your dream car or partner with us!</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-3/4 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Values
          </h2>
          <p className="text-gray-600">
            Integrity, transparency, and a commitment to customer satisfaction
            are at the heart of everything we do.
          </p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-lg w-full sm:w-3/4 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Why Choose Us?
          </h2>
          <p>
            We offer the best selection of cars, backed by expert advice and a
            seamless buying experience. Trust us to help you make the right
            choice.
          </p>
        </div>
      </div>
    </section>
  );
}
