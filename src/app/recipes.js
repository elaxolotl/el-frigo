import { useRouter } from 'next/navigation';

const RecipesGallery = ({ recipes }) => {
  const router = useRouter();

  return (
    <div>
      <h1>Recipes Gallery</h1>
      <div className="gallery">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesGallery;