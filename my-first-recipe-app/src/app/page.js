import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 via-orange-50 to-yellow-100 p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 text-center">
        Welcome to <span className="text-orange-600">My First Recipe App</span>
      </h1>

      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Discover delicious recipes from around the world. Browse, cook, and enjoy!
      </p>

      <Link
        href="/all_recipes"
        className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-transform hover:scale-105"
      >
        🍲 Explore Recipes
      </Link>
    </div>
  );
}
