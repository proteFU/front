import { css } from '@emotion/css';

const styles = {
  container: css`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `
};

interface AlbumArtProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function AlbumArt({ src, alt = 'Album Art', className = '' }: AlbumArtProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
} 