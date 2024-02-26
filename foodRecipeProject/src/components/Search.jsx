import { useState } from "react";
import { useEffect } from "react";
import styles from "./search.module.css"
const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "3e8171d64f95455eb774cc981cc68a4b";
export default function Search({foodData,setFoodData}) {
  const [query, setQuery] = useState("");
  //Syntax of useEffect Hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      // console.log(data.results);
      setFoodData(data.results)
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter the recipe"
        className={styles.input}
      />
    </div>
  );
}
