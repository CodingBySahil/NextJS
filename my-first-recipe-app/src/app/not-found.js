import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 p-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    );
  }
  