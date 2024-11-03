import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { InfoSecondary } from "../components/InfoSecondary/InfoSecondary";
export default function Security() {
  return (
    <>
      <Header title={"Безопасность"} route={"Безопасность"} />
      <InfoSecondary />
      <Form type="second"></Form>
    </>
  );
}
