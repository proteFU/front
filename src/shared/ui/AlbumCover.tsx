import { css } from '@emotion/css';

interface AlbumCoverProps {
  src: string;
  alt?: string;
  size?: 'small' | 'large';
}

const styles = {
  album: (size: 'small' | 'large') => css`
    width: ${size === 'small' ? '94px' : '236px'};
    height: ${size === 'small' ? '94px' : '236px'};
    border-radius: 999px;
    animation: rotateAlbum 16s linear infinite;

    @keyframes rotateAlbum {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `
};

export const AlbumCover = ({ src, alt = 'album cover', size = 'large' }: AlbumCoverProps) => {
  return <img src={src} alt={alt} className={styles.album(size)} />;
};

export default AlbumCover; 