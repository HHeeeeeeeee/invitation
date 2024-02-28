// React 모듈을 불러옵니다.
import React from 'react';
// antd 라이브러리에서 Layout 컴포넌트를 불러옵니다.
import { Layout } from 'antd';
// CSS 파일을 불러옵니다.
import './App.css';
// 컴포넌트를 불러옵니다.
import Title from './Components/Title';
import Gretting from './Components/Greeting';
import Gallery from './Components/Gallery';
import Location from './Components/Location';
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Share from './Components/Share';
// 이미지를 불러옵니다.
import GroovePaper from './Assets/GroovePaper.png';

// Layout 컴포넌트에서 Footer를 추출합니다.
const { Footer } = Layout;

// App 함수 컴포넌트를 선언합니다.
const App = () => {
  // App 컴포넌트의 JSX를 반환합니다.
  return (
    <>
      <Title />
      <Greetting />
      <Gallery />
      <Location />
      <CongratulatoryMoney />
      <Share />
      {/* Footer 컴포넌트를 렌더링합니다. */}
      <Footer
        style={{
          background: '#D7CCC8',
          // GroovePaper 이미지를 배경으로 설정합니다.
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        {/* 저작권 정보를 표시합니다. */}
        Copyright © 2021 KyuHyuk Lee
      </Footer>
    </>
  );
};

// App 컴포넌트를 내보냅니다.
export default App;
