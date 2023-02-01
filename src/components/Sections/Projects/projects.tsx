import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 100px 100px 100px;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.color.background2};
  gap: 50px;
`;

const StyledParagraph = styled.div`
  color: ${(props) => props.theme.color.headline};
  font-size: 30px;
  font-weight: 700;
`;

const StyleTitle = styled.div`
  color: ${(props) => props.theme.color.card_heading};
  font-size: 30px;
  font-weight: 700;
`;

const StyledProjectCard = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  padding: 50px;
  border-radius: 10px;
  width: 330px;
  height: 350px;
  border: 4px ${(props) => props.theme.color.card_border} solid;
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
      <StyledProjectCard>
        <StyledCard>
          <StyleTitle>Title</StyleTitle>
          This is project
        </StyledCard>
        <StyledCard>This is project</StyledCard>
        <StyledCard>This is project</StyledCard>
      </StyledProjectCard>
    </ProjectsWrapper>
  );
};

export default Projects;
