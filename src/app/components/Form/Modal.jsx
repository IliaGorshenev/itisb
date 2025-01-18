import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {notification ? (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>{title}</h2>
            <p className={styles.modalMessage}>{message}</p>
            <button onClick={onClose} className={styles.modalButton}>
              <span>Закрыть</span>
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
              </svg>
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
                className={formStyles.textarea}
              ></textarea>
              <button
                type="submit"
                style={{ margin: '0 auto', width: '100%', borderRadius: '10px', justifyContent: 'space-between' }}
                className={formStyles.button}
              >
                <span>Отправить</span>
                <div className={formStyles.circle}>
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
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
