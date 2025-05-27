import { css } from '@emotion/css';
import type { Lyric } from '../types/music';

interface LyricLineProps {
  lyric: Lyric;
  isDetail?: boolean;
  onClick?: () => void;
}

const styles = {
  base: (isDetail: boolean, hasOnClick: boolean) => css`
    font-size: ${isDetail ? '20px' : '14px'};
    color: #ccc;
    text-align: ${isDetail ? 'left' : 'center'};
    ${hasOnClick && 'cursor: pointer;'}
  `,
  highlight: (isDetail: boolean) => css`
    font-size: ${isDetail ? '24px' : '16px'};
    font-weight: 600;
    color: #fff;
  `
};

export const LyricLine = ({ lyric, isDetail = false, onClick }: LyricLineProps) => {
  return (
    <p
      className={`${styles.base(isDetail, !!onClick)} ${lyric.isHighlight ? styles.highlight(isDetail) : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      {lyric.text}
    </p>
  );
};

export default LyricLine; 