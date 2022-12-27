import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme/theme';
import { useDarkMode } from '../../utils/hooks/useDarkMode';
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
  const [themeMode, toggleTheme] = useDarkMode();
  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <StyledLayoutWrapper>
        {children}
        <Footer toggleTheme={toggleTheme} />
      </StyledLayoutWrapper>
    </ThemeProvider>
  );
};

export default Layout;
