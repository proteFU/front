import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import album from '../assets/album.png'
import MusicPlayBar from '../Shared/MusicPlayBar';
import BackIcon from '../Shared/BackIcon';

const lyrics = [
  { text: "How do I look? 내가 변했나구?" },
  { text: "티비를 틀어봐 I'm the woman on the moon" },
  { text: "네 머리 위로 사뿐사뿐 걸어 feel no gravity" },
];


function App() {
  const navigate = useNavigate();
  return (
    <div className={container}>
      <BackIcon />
      <div className={Wrapper}>
        <div className={TopContent}>
          <img src={album} alt="album" className={albumStyle} />
          <div className={SongnameStyle}>Bad News</div>
          <div className={SongMakerStyle}>kiss of life</div>
        </div>
          <div className={LyricsWrapper}>
            {lyrics.map((line, index) => (
              <div
              key={index}
              className={index === 1 ? `${LyricLine} ${highlight}` : LyricLine}
              onClick={() => navigate('/music-detail')}
              >
                {line.text}
              </div>
            ))}
          </div>
        <MusicPlayBar />
      </div>
    </div>
  );
}


const container = css`
  position: relative;
  width: 361px;
  height: 798px;
`;

const Wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const albumStyle = css`
  width: 236px;
  height: 238px;
  border-radius: 999px;
`;

const SongnameStyle = css`
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const SongMakerStyle = css`
  margin-top: 4px;
  font-size: 14px;
  color: #fff;
`;

const TopContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LyricsWrapper = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  gap: 4px;
  margin-top: 4%;
`;

const LyricLine = css`
  font-size: 14px;
  color: #ccc;
`;

const highlight = css`
  font-size: 16px;
  font-weight: 600;
  color: #fff; 
`;

export default App;