import Image from "next/image";
import IngredientInput from './ingredientInput';
export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center h-full justify-center">
        <nav className="flex gap-4 items-center">
          <Image src="/ElFrigo.svg" alt="El Frigo logo" width={15} height={38} priority />
          <p><b>El Frigo</b></p>
        </nav>
        
        <p className="description text-center">Your favorite cooking partner.</p>
        <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Tell us what’s in your fridge, <br />we’ll tell you what to cook!
        </h1>
        
        <IngredientInput/>
      </main>
    </div>
  );
}
