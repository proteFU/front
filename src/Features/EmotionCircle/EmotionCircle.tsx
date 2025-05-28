/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// 이미지 import
import circles from '../../assets/EmotionCircle/circle.png';
import sub from '../../assets/EmotionCircle/sub.png';

interface CircleSectionProps {
    colors: string[];
    sections: number;
    selectedEmotions: string[];
    isClicked: boolean;
}

const CircleContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
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
    transform: translate(-50%, -50%);
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

const EmotionCircle: React.FC<CircleSectionProps> = ({ colors, sections, selectedEmotions, isClicked }) => {
    const centerX = 50;
    const centerY = 50;
    const innerRadius = 37;
    
    const innerCircleBaseRadius = 20;
    const innerCircleBaseDistance = 18;
    const radiusDecreasePerSection = 1.3;
    const distanceIncreasePerSection = 1.2;
    const minInnerCircleRadius = 1;

    return (
        <div css={CircleContainer}>
            {isClicked && <div css={[glowStyle, GlowEffect]} />}
            <svg css={Circle} viewBox="0 0 100 100">
                <circle
                    cx={centerX}
                    cy={centerY}
                    r={41}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="0.3"
                    css={StrokeBlure}
                />

                {sections > 0 && colors.length > 0 ? (
                    sections === 1 ? (
                        <circle
                            css={BlurredCircle}
                            cx={centerX}
                            cy={centerY}
                            r={innerRadius}
                            fill={colors[0]}
                            opacity="0.5"
                        />
                    ) : (
                        colors.slice(0, sections).map((color: string, index: number) => {
                            let currentRadius = innerCircleBaseRadius;
                            let currentDistance = innerCircleBaseDistance;

                            if (sections > 2) {
                                const deltaSections = sections - 2;
                                currentDistance = innerCircleBaseDistance + deltaSections * distanceIncreasePerSection;
                                currentRadius = innerCircleBaseRadius - deltaSections * radiusDecreasePerSection;
                                currentRadius = Math.max(minInnerCircleRadius, currentRadius);
                            }

                            const angle = index * (360 / sections) * (Math.PI / 180);
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