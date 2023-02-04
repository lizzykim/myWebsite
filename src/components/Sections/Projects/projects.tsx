import React from 'react';
import Image from 'next/image';
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

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <StyledParagraph>Projects</StyledParagraph>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '7px purple solid',
          gap: '200px',
        }}
      >
        {projectsData.map((data: ProjectsData) => (
          <ProjectItem key={data.title} {...data} />
        ))}
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;
