import React from 'react';
import { TimeLineData } from './timelinedata';
import styled, { keyframes } from 'styled-components';

const TimelineItemContainer = styled.li`
  list-style: none;
`;

const Date = styled.span`
  padding: 4px 12px;
  background: rgba(105, 105, 105, 0.6);
  color: ${(props) => props.theme.color.paragraph};
  border-radius: 16px;
`;

const Title = styled.h3`
  margin: 16px 0 0;
  padding: 0;
  color: ${(props) => props.theme.color.headline};
  opacity: 0.8;
`;

const Contents = styled.p`
  margin: 8px 0 0;
  color: dimgray;
`;

const animate = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 28px 20px;

  ${Contents} {
    &::before {
      content: '▹';
      font-size: 20px;
      color: ${(props) => props.theme.color.button};
    }
  }

  &:hover {
    background: rgba(105, 105, 105, 0.2);

    ${Date} {
      background: ${(props) => props.theme.color.button};
      color: white;
      font-weight: bold;
    }
    ${Title} {
      color: ${(props) => props.theme.color.button};
      font-weight: bold;
    }
    ${Contents} {
      color: gray;
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 32px;
    left: -7px;
    width: 12px;
    height: 12px;
    background: dimgray;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
  }
  &::after {
    content: '';
    position: absolute;
    top: 32px;
    left: -6px;
    width: 12px;
    height: 12px;
    background: ${(props) => props.theme.color.button};
    border-radius: 50%;
    box-shadow: inset 0 0 10px ${(props) => props.theme.color.button};
    opacity: 0;
  }
  &:hover::after {
    animation: ${animate} 0.7s linear infinite;
  }
`;

const Timelineitem = (props: TimeLineData) => {
  return (
    <TimelineItemContainer>
      <TimelineItem>
        <Date>{props.date} </Date>
        <Title>
          {props.position} •{' '}
          {props.link ? (
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              {props.name}
            </a>
          ) : (
            <span>{props.name}</span>
          )}
        </Title>
        {props.content.map((data, i) => (
          <Contents key={i}>{data}</Contents>
        ))}
      </TimelineItem>
    </TimelineItemContainer>
  );
};

export default Timelineitem;
