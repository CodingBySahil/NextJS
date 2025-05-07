import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-rose-100 via-orange-50 to-yellow-100 p-6">
      
      {/* Centered Recipe App Intro */}
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-orange-600">My First Recipe App</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Discover delicious recipes from around the world. Browse, cook, and enjoy!
        </p>
        <Link
          href="/all_recipes"
          className="inline-block mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-transform hover:scale-105"
        >
          🍲 Explore Recipes
        </Link>
      </main>

      {/* About Me Section at Bottom */}
      <section className="mt-20 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">👨‍💻 About Me</h2>
        <p className="text-gray-700 text-md">
          Hi, I&apos;m{" "}
          <a
            href="https://www.linkedin.com/in/codingbysahil"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-orange-600 underline hover:text-orange-700 transition"
          >
            Muhammad Sahil
          </a>, a passionate computer science student exploring the world of web and mobile app development.
          This project is part of my learning journey to build beautiful, functional user interfaces with Next.js and Tailwind CSS.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Muhammad Sahil — Built with ❤️ using Next.js & Tailwind CSS
      </footer>
    </div>
  );
}
