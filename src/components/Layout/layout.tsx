import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.background};
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayoutWrapper>
      {children}
      <Footer />
    </StyledLayoutWrapper>
  );
};

export default Layout;
