import styled from "@emotion/styled";

export const Container = styled.div`
  width: 393px;
  height: 852px;
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  background: #000000;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 4px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 32px;
`;

export const AlbumContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AlbumArt = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SongInfo = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
`;

export const Artist = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LyricsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 4px;
  margin-top: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LyricLine = styled.div<{ isHighlight?: boolean }>`
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 16px;
  color: ${props => props.isHighlight ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  font-weight: ${props => props.isHighlight ? '500' : 'normal'};
  transition: color 0.3s, font-weight 0.3s;
`; 