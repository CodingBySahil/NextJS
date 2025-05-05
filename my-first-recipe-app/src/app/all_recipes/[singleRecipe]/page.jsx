
const fetchSingleRecipe = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch recipe:", error);
    return null;
  }
};

export default async function SingleRecipePage({ params }) {
  const { singleRecipe } = params;
  const recipe = await fetchSingleRecipe(singleRecipe);

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-600">
        <h2 className="text-3xl font-semibold">Recipe not found</h2>
        <p className="mt-2">Please check the recipe ID or try again later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 animate-fade-in">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden transition-all hover:shadow-3xl">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="p-6 md:p-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {recipe.name}
          </h1>

          <div className="text-sm text-gray-600 mb-4 space-y-1">
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p>
              <strong>Difficulty:</strong> {recipe.difficulty} |{" "}
              <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins |{" "}
              <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
            </p>
            <p>
              <strong>Servings:</strong> {recipe.servings} |{" "}
              <strong>Calories:</strong> {recipe.caloriesPerServing}
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-1">
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
              {recipe.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
