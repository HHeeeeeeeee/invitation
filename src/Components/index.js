// index.js

const React = require('react');
const styled = require('styled-components');
const { WEDDING_DATE, WEDDING_LOCATION, GROOM_NAME, BRIDE_NAME } = require('../Config');
const BackgroundVidio = require('../Assets/BackgroundVideo.mp4');

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: -1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e;
  animation: fadein 3s;
  -moz-animation: fadein 3s;
  -webkit-animation: fadein 3s;
  -o-animation: fadein 3s;
`;

const VideoBackground = styled.video`
  background-color: #aeb8b3 !important;
  opacity: 0.9;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  min-height: 480px;
`;

const WeddingInvitation = styled.p`
  font-size: 1.5vh;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 3.5vh;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`
  font-size: 2vh;
  opacity: 0.65;
  margin-bottom: 24px;
`;

const Title = () => {
  return (
    React.createElement(Layout, null,
      React.createElement(VideoBackground, { autoPlay: true, loop: true, muted: true, playsInline: true },
        React.createElement('source', { src: BackgroundVidio, type: 'video/mp4' })
      ),
      React.createElement(TitleWrapper, null,
        React.createElement(WeddingInvitation, null, 'WEDDING INVITATION'),
        React.createElement(GroomBride, null, GROOM_NAME, " & ", BRIDE_NAME),
        React.createElement(Schedule, null, WEDDING_DATE, React.createElement('br'), WEDDING_LOCATION)
      )
    )
  );
};

module.exports = Title;