/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import anime from 'animejs/lib/anime.es.js';
import { Bar } from 'react-chartjs-2';
import PlayList from '../Pages/PlayList';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './App.css';
import Favorite from "../Pages/Favorite";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnimatedBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #61dafb;
  margin: 20px auto;
`;

const ChartContainer = styled.div`
  width: 400px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const App: React.FC = () => {
  // const boxRef = useRef<HTMLDivElement>(null);
  //
  // const chartData = {
  //   labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
  //   datasets: [
  //     {
  //       label: '월별 데이터',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.5)',
  //         'rgba(54, 162, 235, 0.5)',
  //         'rgba(255, 206, 86, 0.5)',
  //         'rgba(75, 192, 192, 0.5)',
  //         'rgba(153, 102, 255, 0.5)',
  //         'rgba(255, 159, 64, 0.5)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  //
  // const chartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top' as const,
  //     },
  //     title: {
  //       display: true,
  //       text: '월별 데이터 차트',
  //     },
  //   },
  // };
  //
  // useEffect(() => {
  //   if (boxRef.current) {
  //     (anime as any)({
  //       targets: boxRef.current,
  //       translateX: 250,
  //       rotate: '1turn',
  //       backgroundColor: '#FFC0CB',
  //       duration: 2000,
  //       loop: true,
  //       direction: 'alternate',
  //       easing: 'easeInOutQuad',
  //       autoplay: true
  //     });
  //   }
  // }, []);

  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <AnimatedBox ref={boxRef} />*/}
      {/*  <ChartContainer>*/}
      {/*    <Bar data={chartData} options={chartOptions} />*/}
      {/*  </ChartContainer>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}


      <Favorite/>
      {/*<PlayList/>*/}
    </div>
  );
}

export default App;