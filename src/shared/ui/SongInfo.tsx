import { css } from '@emotion/css';

interface SongInfoProps {
  name: string;
  artist: string;
  variant?: 'default' | 'compact';
}

const styles = {
  container: (variant: 'default' | 'compact') => css`
    display: flex;
    flex-direction: column;
    ${variant === 'compact' && 'margin-left: 12px;'}
    ${variant === 'compact' && 'flex: 1;'}
  `,
  name: (variant: 'default' | 'compact') => css`
    font-size: ${variant === 'compact' ? '20px' : '24px'};
    font-weight: bold;
    color: #fff;
    margin: ${variant === 'compact' ? '0' : '20px 0 0 0'};
  `,
  artist: css`
    font-size: 14px;
    color: #fff;
    margin: 4px 0 0 0;
  `
};

export const SongInfo = ({ name, artist, variant = 'default' }: SongInfoProps) => {
  return (
    <div className={styles.container(variant)}>
      <h1 className={styles.name(variant)}>{name}</h1>
      <h2 className={styles.artist}>{artist}</h2>
    </div>
  );
};

export default SongInfo; 