import Image from "next/image";
import IngredientInput from './ingredientInput';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <nav className="flex gap-4 items-center">
          <Image src="/ElFrigo.svg" alt="El Frigo logo" width={15} height={38} priority/>
          <p>El Frigo</p>
        </nav>
        
        <p className="description">Your favorite cooking partner.</p>
        <h1>Tell us what’s in your fridge, <br/>we’ll tell you what to cook!</h1>

        <IngredientInput/>        

        <button className="btn-primary">Get recipes</button>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>&copy; 2025 El Frigo. All rights reserved</p>
      </footer>
    </div>
  );
}
