import React from 'react';
import styled from 'styled-components';
import Timelineitem from './timelineitem';
import { timeLineData } from './timelinedata';
import { RevealWrapper } from 'next-reveal';
import { scrollRevealOptions } from '../../../config';
import device from '../../../theme/breakpoints';
const WorkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 100px 100px 100px;
  width: 100%;

  @media ${device.tablet} {
    padding: 0px 30px 0px 30px;
  }

  @media ${device.mobile} {
    padding: 0px 20px 0px 20px;
  }
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
      <RevealWrapper className="load-hidden" {...scrollRevealOptions}>
        <TimelineList>
          {timeLineData.map((data) => (
            <Timelineitem key={data.date} {...data} />
          ))}
        </TimelineList>
      </RevealWrapper>
    </WorkWrapper>
  );
};

export default Work;
