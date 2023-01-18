import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  color: ${(props) => props.theme.color.paragraph};
  font-weight: 400;
`;

const Footer = () => {
  return (
    <>
      <StyledText>Designed and Built by Dayoung Kim 🚀</StyledText>
    </>
  );
};

export default Footer;
