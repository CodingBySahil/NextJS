import Image from "next/image";
import Link from "next/link";

const fetchAllRecipes = async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    return data.recipes;
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    return [];
  }
};

export default async function AllRecipesPage() {
  const recipes = await fetchAllRecipes();

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">🍽️ All Recipes</h1>
        <p className="text-lg text-gray-500 mt-2">Explore a variety of delicious dishes from around the world.</p>
      </header>

      {recipes.length > 0 ? (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <Link href={`/all_recipes/${recipe.id}`} key={recipe.id}>
              <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <Image
                  src={recipe.image}
                  alt={`Image of ${recipe.name}`}
                  width={500}
                  height={300}
                  
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600">{recipe.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">{recipe.cuisine} • {recipe.difficulty}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    ⏱️ Prep: {recipe.prepTimeMinutes} min | Cook: {recipe.cookTimeMinutes} min
                  </p>
                  <p className="text-sm text-yellow-600 mt-1">
                    ⭐ {recipe.rating} ({recipe.reviewCount} reviews)
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="text-center text-gray-600 mt-10">
          <p>🍽️ No recipes found. Please try again later.</p>
        </div>
      )}
    </main>
  );
}
