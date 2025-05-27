/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';

// 이미지 import
import circles from '../../assets/EmotionCircle/circle.png';
import sub from '../../assets/EmotionCircle/sub.png';

interface CircleSectionProps {
    colors?: string[];
    sections?: number; // 선택된 감정의 갯수 (작은 원 또는 섹션 채우기 기준)
    selectedEmotions?: string[]; // 선택된 감정 이름 배열
    isClicked?: boolean; // 버튼 클릭 상태
}

const CircleContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; // 자식 요소의 절대 위치 기준 설정
`;

const Circle = css`
    width: 180px; 
    height: 180px;
    display: block;
    position: relative;
    z-index: 4;
`;

const BlurredCircle = css`
    filter: blur(4px);
`;

const StrokeBlure = css`
    filter: blur(3px);
`;

const CenterImage = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // 정확한 중앙 정렬
    z-index: 1;
`;

const GlowEffect = css`
    @keyframes glow {
        0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        20% {
            opacity: 0.15;
            transform: translate(-50%, -50%) scale(0.6);
        }
        40% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(0.7);
        }
        60% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(0.8);
        }
        100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;

const glowStyle = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 220px;
    opacity: 0.2;
    background: radial-gradient(circle, 
        rgba(255,255,255,1) 0%, 
        rgba(255,255,255,0.8) 30%,
        rgba(255,255,255,0.6) 50%,
        rgba(255,255,255,0.4) 70%,
        rgba(255,255,255,0) 100%
    );
    animation: glow 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    z-index: 0;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(12px);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
`;

const EmotionCircle = () => {
    const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
    const centerX = 50; // 중심 좌표
    const centerY = 50; // 중심 좌표
    const innerRadius = 37; // 내부 채워지는 영역의 반지름
    
    // 내부 작은 원의 크기 및 거리 계산 기준 값 (sections === 2 기준)
    const innerCircleBaseRadius = 20; // 2개일 때 반지름 (조절 가능)
    const innerCircleBaseDistance = 18; // 2개일 때 중심으로부터의 거리 (조절 가능)
    const radiusDecreasePerSection = 1.3; // 개수 늘어날 때마다 반지름 줄어드는 양
    const distanceIncreasePerSection = 1.2; // 개수 늘어날 때마다 거리 늘어나는 양
    const minInnerCircleRadius = 1; // 최소 반지름

    return (
        <div css={CircleContainer}>
            {selectedEmotion && <div css={[glowStyle, GlowEffect]} />}
            <svg css={Circle} viewBox="0 0 100 100">
                {/* 가장 바깥쪽 흰색 블러 스트로크 원 */}
                <circle
                    cx={centerX}
                    cy={centerY}
                    r={41} // 현재 외곽선(41px)과 동일하게 조정
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="0.3"
                    css={StrokeBlure}
                />

                {/* 감정 색상으로 채워지는 부분 */}
                {sections > 0 && colors.length > 0 ? (
                    sections === 1 ? (
                        // 감정 하나일 때: 내부 영역 전체 채우기
                        <circle
                            css={BlurredCircle}
                            cx={centerX}
                            cy={centerY}
                            r={innerRadius}
                            fill={colors[0]}
                            opacity="0.5"
                        />
                    ) : (
                        // 감정 여러 개일 때: 작은 원들 배치
                        colors.slice(0, sections).map((color, index) => {
                            let currentRadius = innerCircleBaseRadius; // 기본 반지름
                            let currentDistance = innerCircleBaseDistance; // 기본 거리

                            // sections가 2보다 클 때 크기와 거리 조정
                            if (sections > 2) {
                                const deltaSections = sections - 2; // 2개 기준 얼마나 늘어났는지 계산
                                currentDistance = innerCircleBaseDistance + deltaSections * distanceIncreasePerSection;
                                currentRadius = innerCircleBaseRadius - deltaSections * radiusDecreasePerSection;
                                // 최소 반지름 보장
                                currentRadius = Math.max(minInnerCircleRadius, currentRadius);
                            }

                            const angle = index * (360 / sections) * (Math.PI / 180); // 현재 sections 기준으로 각도 계산
                            const x = centerX + currentDistance * Math.cos(angle);
                            const y = centerY + currentDistance * Math.sin(angle);
                            
                            return (
                                <circle
                                    key={`inner-circle-${index}`}
                                    css={BlurredCircle}
                                    cx={x}
                                    cy={y}
                                    r={currentRadius}
                                    fill={color}
                                    opacity="0.6"
                                />
                            );
                        })
                    )
                ) : null}
            </svg>
            <img 
                src={circles} 
                alt="Emotion Circle" 
                css={[CenterImage, BlurredCircle]} 
                style={{ 
                    width: '180px', 
                    height: '180px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    objectFit: 'cover'
                }} 
            />
            <img 
                src={sub} 
                alt="Sub Circle" 
                css={[CenterImage, BlurredCircle]} 
                style={{ 
                    width: '180px', 
                    height: '180px',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 3,
                    objectFit: 'cover'
                }} 
            />
        </div>
    );
};

export default EmotionCircle; 