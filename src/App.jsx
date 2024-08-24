import { useState } from "react";
import Container from "./assets/components/Container";
import Navbar from "./assets/components/Navbar";

export default function App() {
  const [nav, setNav] = useState(0);

  return (
    <>
      <Container nav={nav} />
      <Navbar nav={nav} setNav={setNav} />
    </>
  );
}
