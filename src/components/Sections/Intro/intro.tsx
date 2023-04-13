import styled from 'styled-components';
import { RevealWrapper } from 'next-reveal';
import { scrollRevealOptions } from '../../../config';
import React from 'react';
import device from '../../../theme/breakpoints';

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  font-size: 40px;
  padding: 100px 100px 0px 100px;

  @media ${device.tablet} {
    padding: 0px 30px 0px 30px;
  }

  @media ${device.mobile} {
    padding: 0px 20px 0px 20px;
  }
`;

const StyledText = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.color.paragraph};
  margin-bottom: 30px;

  @media ${device.tablet} {
    font-size: 0.8em;
  }

  @media ${device.mobile} {
    font-size: 0.55em;
    margin-bottom: 10px;
  }
`;

const StyledButton = styled.button`
  width: 200px;
  height: 80px;
  border-radius: 10px;
  border: 4px solid ${(props) => props.theme.color.button};
  color: ${(props) => props.theme.color.button};
  font-size: 30px;
  font-weight: 500;
  background-color: transparent;

  @media ${device.mobile} {
    width: 150px;
    height: 60px;
    border: 3px solid ${(props) => props.theme.color.button};
    font-size: 20px;
  }

  :hover {
    background-color: ${(props) => props.theme.color.background_light_shadow};
    transition: 0.3s ease-out;
  }
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <RevealWrapper className="load-hidden" {...scrollRevealOptions}>
        <StyledText>
          Hello, My name is
          <br />
          Dayoung Kim.
          <br />
          I’m a Frontend Developer
        </StyledText>
      </RevealWrapper>
      <a href="/ResumeKR.pdf" target="_blank" rel="noopener noreferrer">
        <StyledButton>Resume</StyledButton>
      </a>
    </IntroWrapper>
  );
};

export default Intro;
