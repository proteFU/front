import styled from '@emotion/styled';
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import play from "../../assets/ing.svg";
import pause from "../../assets/stop.svg";
import { useRef, useState, useEffect } from "react";

interface MusicPlayBarProps {
    isPlaying: boolean;
    onPlayPause: (playing: boolean) => void;
    currentTime: number;
    totalDuration: number;
    onSeek?: (time: number) => void;
}

const Wrapper = styled.div`
    position: relative;
    z-index: 10;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 4px;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    margin-bottom: 8px;
    cursor: pointer;
    position: relative;
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
        opacity: 0.8;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1;
        }
    }
`;

const MusicPlayBar = ({ isPlaying, onPlayPause, currentTime, totalDuration, onSeek }: MusicPlayBarProps) => {
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const progress = (currentTime / totalDuration) * 100;

    const calculateTime = (clientX: number) => {
        if (!progressBarRef.current) return 0;
        const rect = progressBarRef.current.getBoundingClientRect();
        let relativeX = clientX - rect.left;
        if (relativeX < 0) relativeX = 0;
        if (relativeX > rect.width) relativeX = rect.width;
        const percent = relativeX / rect.width;
        return percent * totalDuration;
    };

    const handlePointerDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        const time = calculateTime(e.clientX);
        if (onSeek) onSeek(time);
    };

    const handlePointerMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const time = calculateTime(e.clientX);
        if (onSeek) onSeek(time);
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handlePointerMove);
            window.addEventListener("mouseup", handlePointerUp);
        } else {
            window.removeEventListener("mousemove", handlePointerMove);
            window.removeEventListener("mouseup", handlePointerUp);
        }
        return () => {
            window.removeEventListener("mousemove", handlePointerMove);
            window.removeEventListener("mouseup", handlePointerUp);
        };
    }, );

    return (
        <Wrapper>
            <ProgressBar ref={progressBarRef} onMouseDown={handlePointerDown}>
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
                    <img src={isPlaying ? play : pause} alt={isPlaying ? "Play" : "Pause"} />
                </ControlButton>
                <ControlButton>
                    <img src={right} alt="Next" />
                </ControlButton>
            </ControlsContainer>
        </Wrapper>
    );
};

export default MusicPlayBar;