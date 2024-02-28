import React from 'react';
import styled from 'styled-components';
import { WEDDING_DATE, WEDDING_LOCATION, GROOM_NAME, BRIDE_NAME } from '../Config';
import BackgroundVidio from '../Assets/BackgroundVideo.mp4';

// styled-components를 사용하여 Layout 스타일을 정의합니다.
const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
`;

// styled-components를 사용하여 TitleWrapper 스타일을 정의합니다.
const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: -1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

// styled-components를 사용하여 VideoBackground 스타일을 정의합니다.
const VideoBackground = styled.video`
  background-color: #aeb8b3 !important;
  opacity: 0.9;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  min-height: 480px;
`;

// styled-components를 사용하여 WeddingInvitation 스타일을 정의합니다.
const WeddingInvitation = styled.p`
  font-size: 1.5vh;
  opacity: 0.45;
  margin-bottom: 16px;
`;

// styled-components를 사용하여 GroomBride 스타일을 정의합니다.
const GroomBride = styled.p`
  font-size: 3.5vh;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

// styled-components를 사용하여 Schedule 스타일을 정의합니다.
const Schedule = styled.p`
  font-size: 2vh;
  opacity: 0.65;
  margin-bottom: 24px;
`;

// Title 함수 컴포넌트를 정의합니다.
const Title = () => {
  return (
    <Layout>
      {/* 비디오 백그라운드를 렌더링합니다. */}
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVidio} type="video/mp4" />
      </VideoBackground>
      {/* 제목과 내용을 포함하는 TitleWrapper를 렌더링합니다. */}
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        {/* 신랑, 신부의 이름을 표시합니다. */}
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        {/* 결혼일과 장소를 표시합니다. */}
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
};

export default Title; // Title 컴포넌트를 내보냅니다.