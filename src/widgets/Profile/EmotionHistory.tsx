import styled from "@emotion/styled";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { container, card } from "../../shared/ui/common";
import axios from "axios";
import { useEffect, useState } from "react";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const Container = styled.div`
    ${container}
`;

const ChartContainer = styled.div`
    ${card}
    height: 156px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 393px) {
        height: 140px;
        padding: 8px;
    }
`;

const EmotionHistory = () => {
    const [chartData, setChartData] = useState<number[]>([]);

    const data = {
        labels: [
            'Happy',
            'Excited',
            'Comfortable',
            'Angry',
            'Sad',
            'Anxious',
            'Nostalgic',
            'Remorseful'
        ],
        datasets: [
            {
                data: chartData,
                fill: true,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(125, 46, 238, 1)',
                pointBackgroundColor: 'rgba(124, 46, 238, 0.2)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(125, 46, 238, 1)'
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 7,
                ticks: {
                    display: false
                },
                pointLabels: {
                    display: true,
                    font: {
                        size: 14,
                        family: 'Pretendard'
                    },
                    color: '#FFF',
                    padding: 20
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    const getEmotionHistory = async () => {
        try {
            const response = await axios.get('https://lazy-shaylah-guhyunwoo-777b581b.koyeb.app/emotions');
            const emotionData = Object.values(response.data.emotionList) as number[];
            setChartData(emotionData);
        } catch (error) {
            console.error('감정 데이터를 불러오는데 실패했습니다:', error);
        }
    }

    useEffect(() => {
        getEmotionHistory();
    }, []);

    return (
        <Container>
            <ChartContainer>
                <Radar data={data} options={options} />
            </ChartContainer>
        </Container>
    );
};

export default EmotionHistory;