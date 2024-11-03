"use client";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { SolutionsSecondary } from "../components/SolutionsSecondary/SolutionsSecondary";
export default function Solutions() {
  return (
    <>
      <Header title={"ИТ и СБ решения"} route={"Решения"} />
      <SolutionsSecondary />
      <Form></Form>
    </>
  );
}
