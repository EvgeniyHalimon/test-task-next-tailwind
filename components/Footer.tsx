import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-yellow-500">CarShop</h1>
          <p className="mt-2 text-sm text-gray-400">
            Your trusted car marketplace.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/" className="hover:text-yellow-500 transition">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-yellow-500 transition">
            About Us
          </Link>
          <Link href="/cars" className="hover:text-yellow-500 transition">
            Cars
          </Link>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm">Contact us:</p>
          <p className="text-sm text-gray-400">Email: support@carshop.com</p>
          <p className="text-sm text-gray-400">Phone: +1 (800) 555-1234</p>
        </div>
      </div>

      <div className="mt-8 bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CarShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
