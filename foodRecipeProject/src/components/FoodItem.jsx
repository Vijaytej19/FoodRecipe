import styles from "./fooditem.module.css";
export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt="recipe image" className={styles.itemImage} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>

      <div className={styles.buttonContainer}>
      <button className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}
