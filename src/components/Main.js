import styles from "./Main.module.css";

export const Main = ({
  specials,
  testimonials
}) => {
  const Title = () => (
    <div className={styles.title}>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
    </div>
  )

  const Button = ({ text, onClick }) => (
    <button
      className={styles.main_btn}
      onClick={onClick}
    >
      {text}
    </button>
  )

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

  const TestimonialItem = ({ name, avatar, rate, comment }) => (
    <article className={styles.testimonial}>
      <div className={styles.user_info}>
        <div className={styles.avatar}>
          <img src={avatar} alt="Avatar" />
        </div>
        <h5>{name}</h5>
      </div>
      <div>
        <div className={styles.rate}>
          <p>{`${rate}/10`}</p>
        </div>
        <p>{comment}</p>
        <button
          onClick={() => { }}
        >
          Open comment
        </button>
      </div>
    </article>
  )

  return (
    <main>
      <section className={styles.hero}>
        <article>
          <Title />
          <p className="brief_description">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist
          </p>
          <Button
            text="Reserve a table"
            onClick={() => { }}
          />
        </article>
        <div>
          <div className={styles.hero_img}>
            <img src="/assets/restauranfood.jpg" alt="Restaurant" />
          </div>
        </div>
      </section>

      <section className={styles.specials}>
        <header>
          <h2>This week specials!</h2>
          <Button
            text="All specials"
            onClick={() => { }}
          />
        </header>
        <div>
          {
            specials.map(dish => (
              <SpecialDishItem
                img={dish.img}
                dishName={dish.dishName}
                price={dish.price}
                description={dish.description}
              />
            ))
          }
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>Testimonials</h2>
        <div className={styles.items}>
          {
            testimonials.map(item => (
              <TestimonialItem
                name={item.name}
                avatar={item.avatar}
                rate={item.rate}
                comment={item.comment}
              />
            ))
          }
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.about_content}>
          <Title />
          <p>
            fcjmcdkmdics jcsdkcsdcm erjcsdiksdk ksdcmdsckmc ejcdmdscm erjvcdsmczm ecdnsdncsc
          </p>
        </div>
        <div className={styles.imgs}>
          <div className={styles.overflow}>
            <img src="/assets/cooks1.jpg" alt="Mario and Adrian" />
          </div>
          <div className={styles.behind}>
            <img src="/assets/cooks2.jpg" alt="Mario and Adrian" />
          </div>
        </div>
      </section>
    </main>
  )
}