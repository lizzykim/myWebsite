import React from 'react';
import styled from 'styled-components';
import { ProjectsData, projectsData } from './projectsdata';
import ProjectItem from './projectitem';
import device from '../../../theme/breakpoints';

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 100px 100px;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.color.background2};
  gap: 50px;

  @media ${device.tablet} {
    padding: 30px 30px 30px 30px;
  }

  @media ${device.mobile} {
    padding: 30px 20px 30px 20px;
  }
`;

const StyledParagraph = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color.headline};
  font-size: 30px;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 22px;
  }
`;

const StyledProjectItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;

  @media (max-width: 1340px) {
    align-items: center;
    gap: 100px;
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <StyledParagraph>Projects</StyledParagraph>
      <StyledProjectItemWrapper>
        {projectsData.map((data: ProjectsData) => (
          <ProjectItem key={data.title} {...data} />
        ))}
      </StyledProjectItemWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
