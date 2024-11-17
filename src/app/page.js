"use client";
import { About } from "./components/About/About";
import { Advantages } from "./components/Advantages/Advantages";
import { Form } from "./components/Form/Form";
import { Info } from "./components/Info/Info";
import { Partners } from "./components/Partners/Partners";
import { Solutions } from "./components/Solutions/Solutions";
import { NewsBlock } from "./components/NewsBlock/NewsBlock";
export default function Home() {
  return (
    <>
      <About />
      <Info />
      <Advantages />
      <Partners />
      <Solutions />
      <NewsBlock />
      <Form />
    </>
  );
}
