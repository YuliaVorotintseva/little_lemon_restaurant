import { Route, Routes } from 'react-router';

import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { ReservationsPage } from './pages/ReservationsPage';

function App() {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Menu", to: "/menu" },
    { name: "Reservations", to: "/reservations" },
    { name: "Order online", to: "/order" },
    { name: "Log in", to: "/login" }
  ];

  const specials = [
    {
      img: "/assets/greek_salad.jpg",
      dishName: "Greek salad",
      price: "$100",
      description: "ncdjkacnx jsdncjkasndcx jdscjkasdc fvjkndc dnsckSCD  DCDSNCS dnsckasdcn ncdjkacnx jsdncjkasndcx jdscjkasdc fvjkndc dnsckSCD  DCDSNCS dnsckasdcn"
    },
    {
      img: "/assets/lemon_dessert.jpg",
      dishName: "Lemon dessert",
      price: "$150",
      description: "fejncsdj erjfiqjew erjfiasc erjfic dncsjkndc dcnjksmm sdcknsdncs ndcjnasjdkncsdnc fejncsdj erjfiqjew erjfiasc erjfic dncsjkndc dcnjksmm sdcknsdncs ndcjnasjdkncsdnc ndcjnasjdkncsdnc fejncsdj"
    },
    {
      img: "/assets/restauranfood.jpg",
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
    <Routes>
      <Route
        path='/'
        element={
          <HomePage
            navLinks={navLinks}
            specials={specials}
            testimonials={testimonials}
          />
        }
      />
      <Route
        path='/booking'
        element={<BookingPage navLinks={navLinks} />}
      />
      <Route
        path='/confirmation_booking'
        element={<ConfirmationPage navLinks={navLinks} />}
      />
      <Route
        path='/reservations'
        element={<ReservationsPage navLinks={navLinks} />}
      />
    </Routes>
  )
}

export default App;
