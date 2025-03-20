import { useRouter } from 'next/navigation';

const RecipesGallery = ({ recipes }) => {
  const router = useRouter();

  return (
    <div>
      <h1>Recipes Gallery</h1>
        {recipes.map((recipe) => (
        <div key={recipe.id}  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col items-center mb-4 p-4">
                <img className='w-24 h-24 mb-3 rounded-full shadow-lg' src={recipe.image} alt={recipe.title} />
                <h5 className="mb-1 text-xl font-medium text-gray-900 text-center">{recipe.title}</h5>
                <span class="text-sm text-gray-500">Used ingredients: {recipe.usedIngredientCount}</span>
                <span class="text-sm text-gray-500">Missed ingredients: {recipe.missedIngredientCount}</span>
        </div>
        ))}
    </div>
  );
};

export default RecipesGallery;