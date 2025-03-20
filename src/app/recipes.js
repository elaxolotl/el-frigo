import { useRouter } from 'next/navigation';

const RecipesGallery = ({ recipes, setShowRecipes}) => {
  const router = useRouter();

  return (
    <div className='items-center'>
        <div className="flex justify-center">       
          <button type="button"
            className="block mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mb-10"
            onClick={() => setShowRecipes(false)}
            >
            Go back
            <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1 M1 5L5 1 M1 5L5 9"/>
            </svg>
          </button>
        </div>
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