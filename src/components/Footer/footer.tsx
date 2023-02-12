import React from 'react';
import styled from 'styled-components';
import device from '../../theme/breakpoints';

const StyledText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  color: ${(props) => props.theme.color.paragraph};
  font-weight: 400;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledSpan = styled.span`
  background: ${(props) => props.theme.color.headline};
  color: ${(props) => props.theme.color.button};
  padding: 2px;
  border-radius: 3px;
  margin-left: 5px;
`;

const Footer = () => {
  return (
    <>
      <StyledText>
        Designed and Built by
        <StyledSpan>Dayoung Kim</StyledSpan> 🚀
      </StyledText>
    </>
  );
};

export default Footer;
