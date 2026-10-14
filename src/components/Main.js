export const Main = (
  specials,
  testimonials
) => {
  const Title = () => (
    <>
      <h1>Little Lemon</h1>
      <h3>Chicago</h3>
    </>
  )

  const Button = (text, onClick) => (
    <button
      className="main_btn"
      onClick={onClick}
    >
      {text}
    </button>
  )

  const SpecialDishItem = (dishName, price, description) => (
    <article>
      <img alt="Special dish" />
      <heaer>
        <h3>{dishName}</h3>
        <p>{price}</p>
      </heaer>
      <p>{description}</p>
      <button
        className="delivery_btn"
        onClick={() => { }}
      >
        Order a delivery
      </button>
    </article>
  )

  const TestimonialItem = (name, avatar, rate, comment) => (
    <article>
      <div>
        <img src={avatar} alt="Avatar" />
        <h5>{name}</h5>
      </div>
      <p>{`${rate}/10`}</p>
      <p>{comment}</p>
      <button
        className="open_comment_btn"
        onClick={() => { }}
      >
        Open comment
      </button>
    </article>
  )

  return (
    <main>
      <section className="hero">
        <article>
          <Title />
          <p className="brief_description">
            ndjcsd ncdsoiwiesmx rvjciwecsxm wjdcsadsc cdksamdc edhcasnc ejsndckjsdna ejcdjskac
          </p>
          <Button
            text="Book table online"
            onClick={() => { }}
          />
        </article>
        <img alt="Restaurant" />
      </section>

      <section className="specials">
        <header>
          <h2>Specials</h2>
          <Button
            text="All specials"
            onClick={() => { }}
          />
        </header>
        <div>
          {
            specials.main(dish => (
              <SpecialDishItem
                dishName={dish.dishName}
                price={dish.price}
                description={dish.description}
              />
            ))
          }
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div>
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

      <section className="about">
        <div>
          <Title />
          <p>
            fcjmcdkmdics jcsdkcsdcm erjcsdiksdk ksdcmdsckmc ejcdmdscm erjvcdsmczm ecdnsdncsc
          </p>
        </div>
        <div>
          <img alt="Restaurant" />
          <img alt="Restaurant" />
        </div>
      </section>
    </main>
  )
}