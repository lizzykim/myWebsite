import React from 'react';
import styled from 'styled-components';
import Timelineitem from './timelineitem';
import { timeLineData } from './timelinedata';

const WorkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 100px 100px 100px;
  width: 100%;
`;

const TimelineList = styled.ul`
  margin: 0;
  padding: 0px;
  border-left: 2px solid ${(props) => props.theme.color.paragraph};
  list-style: none;
`;

const Work = () => {
  return (
    <WorkWrapper id="experience">
      <TimelineList>
        {timeLineData.map((data) => (
          <Timelineitem {...data} />
        ))}
      </TimelineList>
    </WorkWrapper>
  );
};

export default Work;
