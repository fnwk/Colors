import styled, { createGlobalStyle } from 'styled-components';
import backgroundImage from './assets/background.png';

export default createGlobalStyle`
  @font-face {
    font-family: 'Playfair';
    src: url(fonts/PlayfairDisplay-Regular.otf) format('opentype');
  }

  @font-face {
    font-family: 'PlayfairBold';
    src: url(fonts/PlayfairDisplay-Bold.otf) format('opentype');
  }
  

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    background-image: url(${backgroundImage});
    background-attachment: fixed;
  }

  * {
    color: #080D0E;
    font-family: 'Playfair', serif;
    font-weight: 400;
    box-sizing: border-box;
    font-size: 25px;
  }
`;

export const Wrapper = styled.div`
  margin-inline: 12vw;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 55px;
  margin-block: 75px;
  font-weight: 600;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-block: 50px;
`;
