import React from 'react'; // React를 불러옵니다.
import { Divider } from 'antd'; // antd의 Divider 컴포넌트를 불러옵니다.
import styled from 'styled-components'; // styled-components를 불러옵니다.
import GroovePaper from '../Assets/GroovePaper.png'; // GroovePaper 이미지를 불러옵니다.
import LocationMap from '../Assets/LocationMap.png'; // LocationMap 이미지를 불러옵니다.

// styled-components를 사용하여 Wrapper 스타일을 정의합니다.
const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 42px;
  width: 100%;
  text-align: center;
`;

// styled-components를 사용하여 Title 스타일을 정의합니다.
const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

// styled-components를 사용하여 Image 스타일을 정의합니다.
const Image = styled.img`
  width: 75%;
  max-width: 1024px;
`;

// Location 함수 컴포넌트를 정의합니다.
const Location = () => {
  return (
    <Wrapper>
      {/* Divider 컴포넌트를 사용하여 제목을 표시합니다. */}
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      {/* Image 컴포넌트를 사용하여 위치 지도 이미지를 표시합니다. */}
      <Image src={LocationMap} />
    </Wrapper>
  );
};

export default Location; // Location 컴포넌트를 내보냅니다.