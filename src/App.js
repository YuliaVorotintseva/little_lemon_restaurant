import './App.css';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

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
      img:"/assets/greek_salad.jpg",
      dishName: "Greek salad",
      price: "$100",
      description: "ncdjkacnx jsdncjkasndcx jdscjkasdc fvjkndc dnsckSCD  DCDSNCS dnsckasdcn ncdjkacnx jsdncjkasndcx jdscjkasdc fvjkndc dnsckSCD  DCDSNCS dnsckasdcn"
    },
    {
      img:"/assets/lemon_dessert.jpg",
      dishName: "Lemon dessert",
      price: "$150",
      description: "fejncsdj erjfiqjew erjfiasc erjfic dncsjkndc dcnjksmm sdcknsdncs ndcjnasjdkncsdnc fejncsdj erjfiqjew erjfiasc erjfic dncsjkndc dcnjksmm sdcknsdncs ndcjnasjdkncsdnc ndcjnasjdkncsdnc fejncsdj"
    },
    {
      img:"/assets/restauranfood.jpg",
      dishName: "Snacks",
      price: "$50",
      description: "ejdix rjfciewasx rjfiqwces ijrfic fhvdnsc dndsncscm dncsdmc,mxz,zm ejdix rjfciewasx rjfiqwces ijrfic"
    }
  ];

  const testimonials = [
    {
      name: "User1",
      avatar: "/assets/user1.jpg",
      rate: 8,
      comment: "rfncd jdccjwcnd jdcsknads ijecds"
    },
    {
      name: "User2",
      avatar: "/assets/user2.jpg",
      rate: 9,
      comment: "hcdjnadsc jcdiecds rejfisjceds erfcjqedi"
    },
    {
      name: "User3",
      avatar: "/assets/user3.jpg",
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
