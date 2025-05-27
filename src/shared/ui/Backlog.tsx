import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';

const styles = {
  button: css`
    position: absolute;
    top: 16px;
    left: 16px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 10;
  `
};

export const BackIcon = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={styles.button}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default BackIcon; 