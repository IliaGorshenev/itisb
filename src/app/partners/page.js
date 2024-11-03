import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { PartnersSecondary } from "../components/PartnersSecondary/PartnersSecondary";
export default function Partners() {
  return (
    <>
      <Header title={"Партнеры"} route={"Партнеры"} />
      <PartnersSecondary></PartnersSecondary>

      <Form></Form>
    </>
  );
}
