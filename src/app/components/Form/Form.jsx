"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Form.module.css";

const sendEmail = (e, formValues) => {
  e.preventDefault();

  emailjs
    .send(
      "service_z4iv68f",
      "template_m2d0ah5",
      formValues,
      "QzVHfSLYZHzgmLdoh" // Replace with your actual user ID from EmailJS
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Email sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send email. Please try again.");
      }
    );
};

export const Form = ({ type = "first" }) => {
  const [formValues, setFormValues] = useState({
    companyName: "",
    INN: "",
    projectName: "",
    producer: "",
    email: "",
    phone: "",
    comment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => sendEmail(e, formValues);

  return (
    <div id="feedback" className={`${styles.wrapper} ${styles[type]}`}>
      <div className={styles.formWrapper}>
        <h2 className={styles.headerTitle}>
          Оставьте заявку на техническую поддержку
        </h2>
        <p className={styles.headerText}>
          Заполните форму и наши специалисты технической поддержки помогут
          решить любой ваш вопрос
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input
              placeholder="Название компании"
              type="text"
              className={styles.input}
              name="companyName"
              value={formValues.companyName}
              onChange={handleChange}
            />
            <input
              placeholder="ИНН"
              type="text"
              className={styles.input}
              name="INN"
              value={formValues.INN}
              onChange={handleChange}
            />
          </div>
          <div className={styles.row}>
            <input
              placeholder="Название проекта"
              type="text"
              className={styles.input}
              name="projectName"
              value={formValues.projectName}
              onChange={handleChange}
            />
            <input
              placeholder="Производитель"
              type="text"
              className={styles.input}
              name="producer"
              value={formValues.producer}
              onChange={handleChange}
            />
          </div>
          <input
            placeholder="Email"
            type="email"
            className={styles.input}
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <input
            placeholder="Телефон"
            type="tel"
            className={styles.input}
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Комментарий"
            className={styles.textarea}
            name="comment"
            value={formValues.comment}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className={styles.button}>
            <span>Оставить заявку</span>
            <div className={styles.circle}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.56282 14.1871L13.9372 1.81268M13.9372 1.81268H4.03769M13.9372 1.81268V11.7122"
                  stroke="#01757C"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};
