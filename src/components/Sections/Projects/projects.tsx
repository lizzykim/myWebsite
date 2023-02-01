import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 100px 100px;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.color.background2};
  gap: 50px;
`;

const StyledParagraph = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color.headline};
  font-size: 30px;
  font-weight: 700;
`;

const StyledProjectWrapper = styled.div`
  /* display: flex; */
  /* gap: 20px;
  flex-wrap: wrap; */
  position: relative;
  /* border: 2px red solid; */
  /* justify-content: center; */
`;

const StyledCardWrapper = styled.div`
  width: 300px;
  /* position: unset !important; */
  position: relative;

  img {
    opacity: 0.8;
    height: auto !important;
    position: relative !important;
    border-radius: 4px;
  }
`;

const StyleTitle = styled.div`
  color: ${(props) => props.theme.color.card_heading};
  font-size: 30px;
  font-weight: 700;
`;

const StyledSkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-around;
  font-weight: 700;
`;

const StyledNotionAnchor = styled.a`
  align-self: center;
  :hover {
    transform: translateY(-10px);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  /* src: url(${(props) => props.src}); */
  src: url('./img/profile.png');
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 20%;
  left: 90%;
  padding: 30px;
  border-radius: 10px;
  width: 500px;
  height: 350px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  border: 3px ${(props) => props.theme.color.card_border} solid;
  color: ${(props) => props.theme.color.card_paragraph};
  background-color: ${(props) => props.theme.color.background2};

  :hover {
    background-color: ${(props) => props.theme.color.card_hover};
    color: ${(props) => props.theme.color.card_hover_text};
    transform: translateY(-10px);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  :hover ${StyleTitle} {
    color: ${(props) => props.theme.color.card_hover_text};
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <StyledParagraph>Projects</StyledParagraph>
      <StyledProjectWrapper>
        <div
          style={{
            position: 'relative',
            left: '15%',
            display: 'flex',
            width: 'fit-content',
            // border: '4px yellow solid',
          }}
        >
          <StyledCardWrapper>
            <Image src="/img/ssog.png" alt="SSOG" layout="fill" />
            <StyledDescription>
              <StyleTitle>Squid Squad OG</StyleTitle>
              Motif by Squid Game, SSOG is one of the Solana DApp project as a
              P2E game. 456 players play a game of rock-paper-scissors using
              their own Squid NFTs, and get rewarded with tokens.
              <StyledSkillsWrapper>
                <div>React</div>
                <div>TypeScript</div>
                <div>Chakra UI</div>
                <div>Redux</div>
                <div>Solana Web3 JavaScript API</div>
              </StyledSkillsWrapper>
              <StyledNotionAnchor
                href="https://www.notion.so/Squid-Squad-OG-4d19d5b286f54497966bb3363b5e01c9"
                target="_blank"
                rel="noopener noreferrer"
                style={{ alignSelf: 'center' }}
              >
                <Image
                  src="/img/notion.png"
                  alt="notion"
                  width={30}
                  height={30}
                />
              </StyledNotionAnchor>
            </StyledDescription>
          </StyledCardWrapper>
        </div>
      </StyledProjectWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
