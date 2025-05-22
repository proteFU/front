import { css } from "@emotion/css";
import album from "../assets/album.png";
import MusicPlayBar from '../Shared/MusicPlayBar';
import heart from "../assets/heart.png";
import BackIcon from '../Shared/BackIcon';
import "../App/App.css";

const lyrics = [
    "How do I look? 내가 변했나구?",
    "티비를 틀어봐 I'm the woman on the moon",
    "네 머리 위로 사뿐사뿐 걸어 feel no gravity",
    "우린 어떤 때보다도 ain't no diggity",
    "What goes around, some comes around",
    "안 들려, 몰라",
    "Look at me now 느낌이 와, 다르지 너와",
    "I'm your wannabe 입 밖으론 못 뱉지",
    "Uh-oh, can't you see? Can't you see?",
    "Runnin', runnin', runnin', runnin'",
    "Something's comin', comin', comin' (ah)"
];

function MusicDetail() {
    return (
        <div className={container}>
        <BackIcon />
        <div className={TopSection}>
            <img src={album} alt="album" className={albumStyle} />
            <div className={Textcontainer}>
                <div className={SongName}>Bad News</div>
                <div className={ArtistName}>kiss of life</div>
            </div>
            <img src={heart} alt="heart" className={HeartIcon} />
        </div>
        <div className={LyricsSection}>
            {lyrics.map((line, idx) => (
            <div
                key={idx}
                className={`${lyricLine} ${idx === 1 ? focusedLyric : ""}`}
            >
                {line}
            </div>
            ))}
        </div>
        <MusicPlayBar />
        </div>
    );
}

const container = css`
    width: 361px;
    height: 798px;
    position: relative;
    padding: 16px;
    color: white;
`;

const TopSection = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 36px;
`;

const HeartIcon = css`
    width: 24px;
`;

const albumStyle = css`
    width: 94px;
    height: 94px;
    border-radius: 999px;
    animation: rotateAlbum 20s linear infinite;

    @keyframes rotateAlbum {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
`;
const SongName = css`
    font-size: 20px;
    font-weight: bold;
    margin-top: 8px;
`;

const Textcontainer = css`
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    flex: 1;
`;

const ArtistName = css`
    font-size: 14px;
    color: #fff;
`;

const LyricsSection = css`
    margin-top: 24px;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const lyricLine = css`
    font-size: 20px;
    color: #ccc;
    text-align: center;
    text-align: left;
`;

const focusedLyric = css`
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    text-align: left;
`;

export default MusicDetail;
