import React from 'react'; // React를 불러옵니다.
import ImageGallery from 'react-image-gallery'; // react-image-gallery를 불러옵니다.
import { Divider } from 'antd'; // antd의 Divider 컴포넌트를 불러옵니다.
import styled from 'styled-components'; // styled-components를 불러옵니다.
import GalleryPhoto1 from '../Assets/Gallery_Photo_1.png'; // 갤러리 이미지를 불러옵니다.
import GalleryPhoto2 from '../Assets/Gallery_Photo_2.png'; // 갤러리 이미지를 불러옵니다.
import GalleryPhoto3 from '../Assets/Gallery_Photo_3.png'; // 갤러리 이미지를 불러옵니다.
import GalleryPhoto4 from '../Assets/Gallery_Photo_4.png'; // 갤러리 이미지를 불러옵니다.
import GalleryPhoto5 from '../Assets/Gallery_Photo_5.png'; // 갤러리 이미지를 불러옵니다.
import GalleryPhoto6 from '../Assets/Gallery_Photo_6.png'; // 갤러리 이미지를 불러옵니다.
import GroovePaper from '../Assets/GroovePaper.png'; // GroovePaper 이미지를 불러옵니다.

// styled-components를 사용하여 Wrapper 스타일을 정의합니다.
const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding: 42px;
  width: 100%;
`;

// styled-components를 사용하여 Title 스타일을 정의합니다.
const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

// 이미지 객체 배열을 정의합니다.
const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
];

// Gallery 함수 컴포넌트를 정의합니다.
const Gallery = () => {
  return (
    <Wrapper>
      {/* Divider 컴포넌트를 사용하여 제목을 표시합니다. */}
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      {/* ImageGallery 컴포넌트를 사용하여 갤러리를 표시합니다. */}
      <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
    </Wrapper>
  );
};

export default Gallery; // Gallery 컴포넌트를 내보냅니다.