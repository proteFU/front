import styled from '@emotion/styled';
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import play from "../../assets/ing.png";
import pause from "../../assets/stop.png";

interface MusicPlayBarProps {
    isPlaying: boolean;
    onPlayPause: (playing: boolean) => void;
    currentTime: number;
    totalDuration: number;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 4px;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    cursor: pointer;
`;

const Progress = styled.div<{ progress: number }>`
    width: ${props => props.progress}%;
    height: 100%;
    background: white;
    border-radius: 3px;
    transition: width 0.1s linear;
`;

const TimeInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 4px;
`;

const ControlsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 200px;
`;

const ControlButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;

    img {
        width: 32px;
        height: 32px;
        opacity: 0.6;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1;
        }
    }
`;

const MusicPlayBar = ({ isPlaying, onPlayPause, currentTime, totalDuration }: MusicPlayBarProps) => {
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const progress = (currentTime / totalDuration) * 100;

    return (
        <Wrapper>
            <ProgressBar>
                <Progress progress={progress} />
            </ProgressBar>
            <TimeInfo>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(totalDuration)}</span>
            </TimeInfo>
            <ControlsContainer>
                <ControlButton>
                    <img src={left} alt="Previous" />
                </ControlButton>
                <ControlButton onClick={() => onPlayPause(!isPlaying)}>
                    <img src={isPlaying ? play : pause} alt={isPlaying ? "Pause" : "Play"} />
                </ControlButton>
                <ControlButton>
                    <img src={right} alt="Next" />
                </ControlButton>
            </ControlsContainer>
        </Wrapper>
    );
};

export default MusicPlayBar;