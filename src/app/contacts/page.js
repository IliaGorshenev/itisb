import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { InfoThird } from "../components/InfoThird/InfoThird";
export default function Contacts() {
  return (
    <>
      <Header title={"Контакты"} route={"Контакты"} />
      <InfoThird></InfoThird>
      <Form></Form>
    </>
  );
}
