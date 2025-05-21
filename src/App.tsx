/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import anime from 'animejs';
import './App.css';

const AnimatedBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #61dafb;
  margin: 20px auto;
`;

const App: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      anime({
        targets: boxRef.current,
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFC0CB',
        duration: 2000,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        autoplay: true
      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AnimatedBox ref={boxRef} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;