import { useNavigate } from "react-router";
import styles from "./HeroSection.module.css";

import { Title, Button } from "./ui";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <article>
        <Title />
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
        </p>
        <Button
          text="Reserve a table"
          onClick={() => navigate('/booking')}
        />
      </article>
      <div>
        <div className={styles.hero_img}>
          <img src="/assets/restauranfood.jpg" alt="Restaurant" />
        </div>
      </div>
    </section>
  )
}