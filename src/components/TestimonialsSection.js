import styles from "./TestimonialsSection.module.css";

export const TestimonialsSection = ({ testimonials }) => {
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
    <section className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles.items}>
        {
          testimonials.map(item => (
            <TestimonialItem
              key={item.name}
              name={item.name}
              avatar={item.avatar}
              rate={item.rate}
              comment={item.comment}
            />
          ))
        }
      </div>
    </section>
  )
}