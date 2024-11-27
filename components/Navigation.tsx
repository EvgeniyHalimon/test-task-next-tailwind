import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="flex flex-wrap justify-center gap-6 py-4 text-sm bg-gray-900">
      <Link
        href="/"
        className="hover:text-yellow-500 text-xl sm:text-3xl transition">
        Home
      </Link>
      <Link
        href="/about-us"
        className="hover:text-yellow-500 text-xl sm:text-3xl transition">
        About Us
      </Link>
      <Link
        href="/cars"
        className="hover:text-yellow-500 text-xl sm:text-3xl transition">
        Cars
      </Link>
    </nav>
  );
};
