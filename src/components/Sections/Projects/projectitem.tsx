import styled from 'styled-components';
import Image from 'next/image';
import { ProjectsData } from './projectsdata';
import device from '../../../theme/breakpoints';
import { RevealWrapper } from 'next-reveal';
import { scrollRevealOptions } from '../../../config';

const StyledProjectWrapper = styled.div`
  position: relative;

  @media (max-width: 1340px) {
    position: static;
  }
`;

const StyledProjectRelativeWrapper = styled.div`
  position: relative;
  left: 15%;
  display: flex;
  width: fit-content;

  @media (max-width: 1340px) {
    position: static;
  }
`;

const StyledCardWrapper = styled.div`
  width: 500px;
  position: relative;

  @media (max-width: 1340px) {
    width: 100%;
    position: static;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  img {
    opacity: 0.8;
    height: auto !important;
    position: relative !important;
    border-radius: 5px;

    @media (max-width: 1340px) {
      border-radius: 15px;
    }
  }
`;

const StyleTitle = styled.div`
  color: ${(props) => props.theme.color.card_heading};
  font-size: 30px;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
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

  @media (max-width: 1340px) {
    position: static;
    width: 100%;
    font-size: 15px;
    align-items: center;
    height: fit-content;
    gap: 10px;
    padding: 15px;
  }
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

const ProjectItem = (props: ProjectsData) => {
  return (
    <StyledProjectWrapper>
      <RevealWrapper className="load-hidden" {...scrollRevealOptions}>
        <StyledProjectRelativeWrapper>
          <StyledCardWrapper>
            <Image src={props.img} alt="projectImg" layout="fill" />
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
        </StyledProjectRelativeWrapper>
      </RevealWrapper>
    </StyledProjectWrapper>
  );
};
export default ProjectItem;
