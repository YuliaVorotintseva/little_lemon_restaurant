import { v4 as uuidv4 } from "uuid";

import styles from "./SpecialsSection.module.css";

import { Button } from "./ui";

export const SpecialsSection = ({ specials }) => {
  const SpecialDishItem = ({ img, dishName, price, description }) => (
    <article className={styles.dish_item}>
      <div className={styles.dish_img}>
        <img src={img} alt="Special dish" />
      </div>
      <div className={styles.dish_content}>
        <div>
          <h3>{dishName}</h3>
          <p>{price}</p>
        </div>
        <p>{description}</p>
        <button
          className="delivery_btn"
          onClick={() => { }}
        >
          Order a delivery
        </button>
      </div>
    </article>
  )

  return (
    <section className={styles.specials}>
      <div className={styles.header}>
        <h2>This week specials!</h2>
        <Button
          text="All specials"
          onClick={() => { }}
        />
      </div>
      <div className={styles.dishes}>
        {
          specials.map(dish => (
            <SpecialDishItem
              key={uuidv4()}
              img={dish.img}
              dishName={dish.dishName}
              price={dish.price}
              description={dish.description}
            />
          ))
        }
      </div>
    </section>
  )
}