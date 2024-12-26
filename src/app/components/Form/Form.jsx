'use client';
import axios from 'axios';
import { useState } from 'react';
import styles from './Form.module.css';
import Modal from './Modal';

const sendEmail = async (e, formValues, setResult, setModalOpen, setIsSubmitting) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await axios.post('http://localhost:3001/send-email', formValues);
    setResult({ title: 'Поздравляем', message: 'Сообщение успешно отправлено' });
  } catch (error) {
    console.error('Error sending email:', error);
    setResult({ title: 'Ошибка', message: 'Произошла ошибка' });
  } finally {
    setIsSubmitting(false);
    setModalOpen(true);
  }
};

export const Form = ({ type = 'first' }) => {
  const [formValues, setFormValues] = useState({
    companyName: '',
    INN: '',
    projectName: '',
    producer: '',
    email: '',
    phone: '+7',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [result, setResult] = useState({ title: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => sendEmail(e, formValues, setResult, setModalOpen, setIsSubmitting);
  const formatPhoneNumber = (number) => {
    const cleaned = `${number}`.replace(/\D/g, '');
    let formatted = '+7';

    if (cleaned.length > 1) {
      formatted += ` (${cleaned.slice(1, 4)}`;
    }
    if (cleaned.length > 4) {
      formatted += `) ${cleaned.slice(4, 7)}`;
    }
    if (cleaned.length > 7) {
      formatted += `-${cleaned.slice(7, 9)}`;
    }
    if (cleaned.length > 9) {
      formatted += `-${cleaned.slice(9, 11)}`;
    }

    return formatted;
  };
  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setFormValues({ ...formValues, phone: formattedPhoneNumber });
  };
  return (
    <div id="feedback" className={`${styles.wrapper} ${styles[type]}`}>
      <div className={styles.formWrapper}>
        <h2 className={styles.headerTitle}>Свяжитесь с нами</h2>
        <p className={styles.headerText}>
          Заполните форму и наши специалисты технической поддержки помогут решить любой ваш вопрос
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
              tabIndex="1"
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
            onChange={handlePhoneInput}
            required
          />
          <textarea
            placeholder="Комментарий"
            className={styles.textarea}
            name="comment"
            value={formValues.comment}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className={styles.button} disabled={isSubmitting}>
            <span>{isSubmitting ? 'Отправка...' : 'Оставить заявку'}</span>
            <div className={styles.circle}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.56282 14.1871L13.9372 1.81268M13.9372 1.81268H4.03769M13.9372 1.81268V11.7122"
                  stroke="#01757C"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </button>
        </form>
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={result.title} message={result.message} />
      </div>
    </div>
  );
};
