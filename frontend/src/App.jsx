import { useState } from "react";
import Container from "./assets/components/Container";
import Gallery from "./assets/components/Gallery";
import MyCalender from "./assets/components/MyCalender";
import Navbar from "./assets/components/Navbar";
import Profile from "./assets/components/Profile";
import Booking from "./assets/components/Booking";

export default function App() {
  const [nav, setNav] = useState(0);

  return (
    <>
      <Container nav={nav} />
      {/* <Gallery /> */}
      <Navbar nav={nav} setNav={setNav} />
      {/* <MyCalender /> */}
      {/* <Profile /> */}
      {/* <Booking /> */}
    </>
  );
}
