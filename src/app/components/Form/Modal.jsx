import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>{title}</h2>
        <p className={styles.modalMessage}>{message}</p>
        <button onClick={onClose} className={styles.modalButton}>
          <span>Закрыть</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
