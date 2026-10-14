import './App.css';
import { Footer } from './components/Footer';

import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Reservations", href: "#" },
    { name: "Order online", href: "#" },
    { name: "Log in", href: "#" }
  ];

  const specials = [
    {
      dishName: "Dish1",
      price: "$50",
      description: "ncdjkacnx jsdncjkasndcx jdscjkasdc"
    },
    {
      dishName: "Dish2",
      price: "$100",
      description: "fejncsdj erjfiqjew erjfiasc erjfic"
    },
    {
      dishName: "Dish3",
      price: "$150",
      description: "ejdix rjfciewasx rjfiqwces ijrfic"
    }
  ];

  const testimonials = [
    {
      name: "User1",
      avatar: "",
      rate: 8,
      comment: "rfncd jdccjwcnd jdcsknads ijecds"
    },
    {
      name: "User2",
      avatar: "",
      rate: 9,
      comment: "hcdjnadsc jcdiecds rejfisjceds erfcjqedi"
    },
    {
      name: "User3",
      avatar: "",
      rate: 10,
      comment: "fkecskd jfccsdc jfjsdks fvkmccmkjerffds"
    }
  ]

  return (
    <>
      <Header navLinks={navLinks} />
      <Main
        specials={specials}
        testimonials={testimonials}
      />
      <Footer navLinks={navLinks} />
    </>
  );
}

export default App;
