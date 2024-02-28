import React from 'react'; // React를 불러옵니다.
import { Divider } from 'antd'; // antd의 Divider 컴포넌트를 불러옵니다.
import styled from 'styled-components'; // styled-components를 불러옵니다.
import { // Config 파일에서 필요한 변수들을 불러옵니다.
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from '../Config'; // Config 파일을 상대 경로로 불러옵니다.
import GroovePaper from '../Assets/GroovePaper.png'; // GroovePaper 이미지를 불러옵니다.

// styled-components를 사용하여 Wrapper 스타일을 정의합니다.
const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
`;

// styled-components를 사용하여 Title 스타일을 정의합니다.
const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

// styled-components를 사용하여 Content 스타일을 정의합니다.
const Content = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

// styled-components를 사용하여 GroomBride 스타일을 정의합니다.
const GroomBride = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

// Gretting 함수 컴포넌트를 정의합니다.
const Gretting = () => {
  return (
    <Wrapper>
      {/* Divider 컴포넌트를 사용하여 제목을 표시합니다. */}
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>결혼합니다</Title>
      </Divider>
      {/* 축하 메시지를 표시합니다. */}
      <Content>
        서로 마주 보며 다져온 사랑을
        <br />
        이제 함께 한곳을 바라보며 걸어갈 수 있는
        <br />큰 사랑으로 키우고자 합니다.
        <br />
        저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게
        <br />
        앞날을 축복해 주시면 감사하겠습니다.
      </Content>
      {/* 신랑과 신부의 부모 이름을 표시합니다. */}
      <GroomBride>
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Gretting; // Gretting 컴포넌트를 내보냅니다.