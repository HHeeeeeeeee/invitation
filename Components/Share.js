import React, { useEffect, useState } from 'react'; // React와 useEffect, useState를 불러옵니다.
import CopyToClipboard from 'react-copy-to-clipboard'; // react-copy-to-clipboard를 불러옵니다.
import { Button, Divider, message } from 'antd'; // antd의 Button, Divider, message를 불러옵니다.
import { MessageFilled, LinkOutlined } from '@ant-design/icons'; // ant-design/icons에서 MessageFilled, LinkOutlined를 불러옵니다.
import styled from 'styled-components'; // styled-components를 불러옵니다.
import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  WEDDING_INVITATION_URL,
  GROOM_NAME,
  BRIDE_NAME,
} from '../Config'; // Config에서 필요한 변수들을 불러옵니다.
import GroovePaper from '../Assets/GroovePaper.png'; // GroovePaper 이미지를 불러옵니다.

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

// KakaoTalkShareButton styled-components를 정의합니다.
const KakaoTalkShareButton = styled(Button)`
  background: #fee500;
  border-color: #fee500;
  color: #181600;
  &:hover {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
  &:focus {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
`;

// LinkShareButton styled-components를 정의합니다.
const LinkShareButton = styled(Button)`
  background: #53acee;
  border-color: #53acee;
  color: #ffffff;
  &:hover {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
  &:focus {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
`;

// Share 함수 컴포넌트를 정의합니다.
const Share = () => {
  const [shareCount, setShareCount] = useState(0); // shareCount 상태와 setShareCount 함수를 정의합니다.

  useEffect(() => {
    // useEffect를 사용하여 첫 번째 렌더링 후 동작을 정의합니다.
    if (shareCount !== 0) {
      window.Kakao.Link.createDefaultButton({
        objectType: 'feed',
        container: '#sendKakao',
        content: {
          title: `${GROOM_NAME}❤${BRIDE_NAME} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: KAKAOTALK_SHARE_IMAGE,
          link: {
            mobileWebUrl: WEDDING_INVITATION_URL,
            webUrl: WEDDING_INVITATION_URL,
          },
        },
        buttons: [
          {
            title: '청첩장 열기',
            link: {
              mobileWebUrl: WEDDING_INVITATION_URL,
              webUrl: WEDDING_INVITATION_URL,
            },
          },
        ],
        installTalk: true,
      });
      setTimeout(() => {
        document.getElementById('sendKakao')?.click();
        message.success('카카오톡으로 청첩장을 공유합니다!');
      }, 100);
    } else {
      window.Kakao.init(KAKAOTALK_API_TOKEN);
    }
  }, [shareCount]); // shareCount가 변경될 때마다 useEffect가 실행됩니다.

  return (
    <Wrapper>
      {/* Divider 컴포넌트를 사용하여 제목을 표시합니다. */}
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>청첩장 공유하기</Title>
      </Divider>
      {/* KakaoTalkShareButton을 렌더링합니다. */}
      <KakaoTalkShareButton
        style={{ margin: 8 }}
        icon={<MessageFilled />}
        id="sendKakao"
        size="large"
        onClick={() => setShareCount(shareCount + 1)}
      >
        카카오톡으로 공유하기
      </KakaoTalkShareButton>
      {/* CopyToClipboard를 사용하여 LinkShareButton을 렌더링합니다. */}
      <CopyToClipboard text={WEDDING_INVITATION_URL}>
        <LinkShareButton
          style={{ margin: 8 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success('청첩장 링크가 복사되었습니다.')}
        >
          링크로 공유하기
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default Share; // Share 컴포넌트를 내보냅니다.