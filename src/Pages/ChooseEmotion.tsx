/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import backgroundImage from '../assets/background.svg';
import EmotionCircle from '../Features/EmotionCircle/EmotionCircle';
import anxious from '../assets/Emotion/anxious.svg';
import comfortable from '../assets/Emotion/comfortable.svg';
import excited from '../assets/Emotion/excited.svg';
import happy from '../assets/Emotion/happy.svg';
import lonely from '../assets/Emotion/lonely.svg';
import nostalgic from '../assets/Emotion/nostalgic.svg';
import remorseful from '../assets/Emotion/remorseful.svg'
import sad from '../assets/Emotion/sad.svg'
import Button from '../shared/Button';
import api from '../shared/api/axios';
import { useNavigate } from 'react-router-dom';

const BackgroundImage = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
`;

const Container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 92px;
    left: 28.5px;
    right: 28.5px;
    gap: 64px;
`;

const font = css`
    font-size: 36px;
    color: white;
    text-align: center;
    font-weight: bold;
    margin: 0;
`;

const EmotionContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;

const EmotionImage = css`
    width: 50px;
    height: 50px;
`;

const EmotionName = css`
    color: white;
    font-size: 16px;
    text-align: center;
`;

const EmotionGrid = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    width: 100%;
    max-width: 800px;
    justify-items: center;
`;

const ChooseEmotion: React.FC = () => {
    const navigate = useNavigate();
    const emotions = [
        { image: happy, name: 'happy', color: '#FC1597' },
        { image: anxious, name: 'anxious', color: '#FEA91D' },
        { image: comfortable, name: 'comfortable', color: '#9DCC7E' },
        { image: sad, name: 'sad', color: '#6BC9EF' },
        { image: nostalgic, name: 'nostalgic', color: '#ABACEA' },
        { image: excited, name: 'excited', color: '#F8D578' },
        { image: remorseful, name: 'remorseful', color: '#E1D9CC' },
        { image: lonely, name: 'lonely', color: '#E7A3EE' },
    ];
    const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);
    const [count, setCount] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setCount(selectedEmotions.length);
    }, [selectedEmotions]);

    const handleEmotionClick =  (emotion: string) => {
        setSelectedEmotions((prev) => {
            if (prev.includes(emotion)) {
                return prev.filter(e => e !== emotion);
            } else {
                return [...prev, emotion];
            }
        });
    };

    const handleContinueClick = async () => {
        setIsClicked(true);
        console.log(true);
        console.log(selectedEmotions.length > 0 ? selectedEmotions : 'null');
        if (selectedEmotions.length === 0) {
            alert('감정을 선택해주세요');
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            alert('로그인이 필요합니다.');
            navigate('/login');
            return;
        }

        try {
            const response = await api.post('/emotions', {
                "emotionList": selectedEmotions
            });

            if (response.status === 200) {
                alert('감정 전달 완료.');
                navigate('/music-player');
            } else {
                alert('감정 전달 실패.');
            }
        } catch (error) {
            console.error('API Error:', error);
            alert('감정 전달 실패.');
        }
    };

    const selectedColors = selectedEmotions.map(emotionName => {
        const emotion = emotions.find(e => e.name === emotionName);
        return emotion ? emotion.color : '#FFFFFF';
    });

    return (
        <div>
            <div css={BackgroundImage} />
            <div css={Container}>
                <p css={font}>Each feeling shines as your color.</p>
                <EmotionCircle
                    colors={selectedColors}
                    sections={count}
                    selectedEmotions={selectedEmotions}
                    isClicked={isClicked}
                />
                <div css={EmotionGrid}>
                    {emotions.map((emotion, index) => (
                        <div
                            key={index}
                            css={EmotionContainer}
                            onClick={() => handleEmotionClick(emotion.name)}
                        >
                            <img css={EmotionImage} src={emotion.image} alt={emotion.name} />
                            <span css={EmotionName}>{emotion.name}</span>
                        </div>
                    ))}
                </div>
                <div onClick={handleContinueClick}>
                    <Button text='Continue' />
                </div>
            </div>
        </div>
    );
};

export default ChooseEmotion;