import { useState } from 'react';
import formStyles from './Form.module.css';
import styles from './Modal.module.css';
const Modal = ({ isOpen, onClose, title, message, notification = true }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    comment: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };
  return (
    <>
      {notification ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>{title}</h2>
            <p className={styles.modalMessage}>{message}</p>
            <button onClick={onClose} className={styles.modalButton}>
              <span>Закрыть</span>
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={onClose}>
              x
            </button>
            <h2 className={styles.modalTitle}>{title}</h2>
            <p className={styles.modalMessage}>{message}</p>
            <form onSubmit={handleSubmit} className={formStyles.form}>
              <div className={formStyles.row}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Имя"
                  required
                  className={formStyles.input}
                />
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Номер телефона"
                  required
                  className={formStyles.input}
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className={formStyles.input}
              />
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Комментарий"
                className={formStyles.textarea}></textarea>
              <button type="submit" style={{ margin: '0 auto' }} className={formStyles.button}>
                <span>Отправить</span>
                <div className={formStyles.circle}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.56282 14.1871L13.9372 1.81268M13.9372 1.81268H4.03769M13.9372 1.81268V11.7122" stroke="#01757C" strokeWidth="2" />
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
