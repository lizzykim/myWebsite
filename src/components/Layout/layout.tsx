import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme/theme';
import { useDarkMode } from '../../utils/hooks/useDarkMode';
import Footer from '../Footer';
import Navbar from '../Nav';

type LayoutProps = {
  children: React.ReactNode;
};

const StyledLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.background};
  transition: background-color 0.25s linear;
`;

const Main = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const Layout = ({ children }: LayoutProps) => {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <StyledLayoutWrapper>
        <Navbar toggleTheme={toggleTheme} themeMode={themeMode} />
        <Main>{children}</Main>
        <Footer />
      </StyledLayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
