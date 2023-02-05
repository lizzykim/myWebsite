import React from 'react';
import styled from 'styled-components';
import { ProjectsData, projectsData } from './projectsdata';
import ProjectItem from './projectitem';

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

const StyledProjectItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 200px;
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
