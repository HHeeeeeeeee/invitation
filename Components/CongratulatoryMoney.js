import React, { useState } from 'react'; // React와 useState를 불러옵니다.
import ReactDOM from 'react-dom'; // ReactDOM을 불러옵니다.
import { Button, Divider, message, Modal } from 'antd'; // antd의 필요한 컴포넌트를 불러옵니다.
import { CheckCircleTwoTone } from '@ant-design/icons'; // ant-design의 아이콘을 불러옵니다.
import styled from 'styled-components'; // styled-components를 불러옵니다.
import CopyToClipboard from 'react-copy-to-clipboard'; // react-copy-to-clipboard를 불러옵니다.
import {
  GROOM_NAME,
  GROOM_ACCOUNT_NUMBER,
  GROOM_FATHER_NAME,
  GROOM_FATHER_ACCOUNT_NUMBER,
  GROOM_MOTHER_NAME,
  GROOM_MOTHER_ACCOUNT_NUMBER,
  BRIDE_NAME,
  BRIDE_ACCOUNT_NUMBER,
  BRIDE_FATHER_NAME,
  BRIDE_FATHER_ACCOUNT_NUMBER,
  BRIDE_MOTHER_NAME,
  BRIDE_MOTHER_ACCOUNT_NUMBER,
} from '../Config'; // Config 파일에서 필요한 상수들을 불러옵니다.
import GroovePaper from '../Assets/GroovePaper.png'; // GroovePaper 이미지를 불러옵니다.

// styled-components를 사용하여 Wrapper 스타일을 정의합니다.
const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 18px;
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

// styled-components를 사용하여 Content 스타일을 정의합니다.
const Content = styled.p`
  font-size: 1.5vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 24px;
`;

// styled-components를 사용하여 SubContent 스타일을 정의합니다.
const SubContent = styled.p`
  font-size: 1.3vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 24px;
`;

// styled-components를 사용하여 Description 스타일을 정의합니다.
const Description = styled.p`
  font-size: 1.75vh;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
`;

// styled-components를 사용하여 ContactButton 스타일을 정의합니다.
const ContactButton = styled.div`
  display: inline-block;
  text-align: center;
  margin-left: 24px;
  margin-right: 24px;
  margin-bottom: 24px;
`;

// CongratulatoryMoney 함수 컴포넌트를 정의합니다.
const CongratulatoryMoney = () => {
  // useState를 사용하여 상태 변수를 정의합니다.
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>
      {/* Divider 컴포넌트를 사용하여 제목을 표시합니다. */}
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>축하의 마음을 전하세요</Title>
      </Divider>
      <Content>축하의 마음을 담아 축의금을 전달해 보세요.</Content>
      {/* ContactButton 컴포넌트를 사용하여 신랑/신부 버튼을 표시합니다. */}
      <ContactButton onClick={() => setGroomVisible(true)}>
        <CheckCircleTwoTone style={{ fontSize: 64, marginBottom: 16 }} twoToneColor="#829fe0" />
        <br />
        <SubContent>신랑측 계좌번호 확인</SubContent>
      </ContactButton>
      <ContactButton onClick={() => setBrideVisible(true)}>
        <CheckCircleTwoTone style={{ fontSize: 64, marginBottom: 16 }} twoToneColor="#fe7daf" />
        <br />
        <SubContent>신부측 계좌번호 확인</SubContent>
      </ContactButton>
      {/* Modal 컴포넌트를 사용하여 모달창을 표시합니다. */}
      <Modal
        title={<b>신랑측 계좌번호</b>}
        visible={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.</Description>]}
      >
        <div>
          <b>부) {GROOM_FATHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_FATHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {GROOM_FATHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모) {GROOM_MOTHER_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_MOTHER_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {GROOM_MOTHER_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
        <div>
          <b>신랑 {GROOM_NAME}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={GROOM_ACCOUNT_NUMBER}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {GROOM_ACCOUNT_NUMBER}
            </Button>
          </CopyToClipboard>
        </div>
      </Modal>
      <Modal
        title={<b>신부
