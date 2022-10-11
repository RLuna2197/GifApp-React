import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories([...categories, "Warzone"]);
  };
  return (
    <>
      {/* titulo */}
      <h1>Gif Expert App</h1>

      {/* input */}
      <AddCategory  setCategories = { setCategories }/>

      {/* lista de categorias */}
      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((item) => {
          return <li key={item}> {item}</li>;
        })}
      </ol>
    </>
  );
};
