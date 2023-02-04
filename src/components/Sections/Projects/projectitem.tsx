import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ProjectsData } from './projectsdata';

const StyledProjectWrapper = styled.div`
  /* display: flex; */
  /* gap: 20px;
  flex-wrap: wrap; */
  position: relative;
  border: 2px red solid;
  /* justify-content: center; */
`;

const StyledCardWrapper = styled.div`
  width: 500px;
  /* position: unset !important; */
  position: relative;

  img {
    opacity: 0.8;
    height: auto !important;
    position: relative !important;
    border-radius: 5px;
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

const StyledSkill = styled.div`
  padding: 0px 5px;
`;

const StyledNotionAnchor = styled.a`
  align-self: center;
  :hover {
    transform: translateY(-10px);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
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

const ProjectItem = (props: ProjectsData) => {
  return (
    <StyledProjectWrapper>
      <div
        style={{
          position: 'relative',
          left: '15%',
          display: 'flex',
          width: 'fit-content',
          //   border: '4px yellow solid',
        }}
      >
        <StyledCardWrapper>
          <Image src={props.img} alt="projectimg" layout="fill" />
          <StyledDescription>
            <StyleTitle>{props.title}</StyleTitle>
            {props.summary}
            <StyledSkillsWrapper>
              {props.skills.map((skill) => (
                <StyledSkill key={skill}>{skill}</StyledSkill>
              ))}
            </StyledSkillsWrapper>
            <StyledNotionAnchor
              href={props.link}
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
  );
};
export default ProjectItem;
