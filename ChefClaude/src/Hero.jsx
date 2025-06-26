import { useState } from "react";
import ClaudeRecipe from "./components/ClaudeRecipe";
import IngredientsList from "./components/IngredientsList";
import {getRecipeFromChefClaude,getRecipeFromMistral} from "./ChefAI"

export default function Hero() {
  const [ingredients, setIngredients] = useState([
    "Pasta",
    "Cabonara paste",
    "Chicken",
    "Main Spices",
  ]);
  const [recipe, setRecipe] = useState("");

  function addIngredient(formData) {
    // const formData=new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients([...ingredients, newIngredient]); // OR setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
  }

  async function getRecipe(){
    // getRecipeFromChefClaude(ingredients).then(...)
    const recipeMd=await getRecipeFromChefClaude(ingredients)
    setRecipe(recipeMd)
  }

  return (
    <main>
      <form
        action={addIngredient}
        /*onSubmit={handleSubmit}*/ className="add-ingredient-form"
      >
        <input
          type="text"
          name="ingredient"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
        />
        <button>Add Ingredient</button>
      </form>
      {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} /> }
      {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
  );
}
