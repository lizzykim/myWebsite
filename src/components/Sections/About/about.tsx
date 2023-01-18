import { useEffect } from 'react';
import styled from 'styled-components';
import { RevealWrapper } from 'next-reveal';
import { scrollRevealOptions } from '../../../config';

const AboutWrapper = styled.div`
  height: 700px;
  width: 100%;
  padding: 400px 100px 0px 100px;
`;

const StyledText = styled.div`
  font-family: 'inter';
  font-size: 40px;
  font-weight: 600;
  color: ${(props) => props.theme.color.paragraph};
  margin-bottom: 30px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.color.button};
  color: ${(props) => props.theme.color.button};
  font-family: 'inter';
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;

  :hover {
    background-color: ${(props) => props.theme.color.background_light_shadow};
    transition: 0.3s ease-out;
  }
`;

const About = () => {
  useEffect(() => {});

  return (
    <AboutWrapper>
      <RevealWrapper {...scrollRevealOptions}>
        <StyledText>
          Hello, My name is
          <br />
          Dayoung Kim.
          <br />
          I’m a Junior Frontend Developer
        </StyledText>
      </RevealWrapper>
      <StyledButton>Resume</StyledButton>
    </AboutWrapper>
  );
};

export default About;
