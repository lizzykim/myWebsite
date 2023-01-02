import React from 'react';
import styled from 'styled-components';
import { navLinks } from '../../config';
import { IconButton } from '@material-ui/core';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import device from '../../theme/breakpoints';
import colors from '../../theme/colors';

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: 100px;
  width: 100%;
  padding: 0px 50px;
  border: 2px pink solid;
  color: ${(props) => props.theme.color.paragraph};
  background-color: ${(props) => props.theme.color.background};
  transition: background-color 0.25s linear;
`;

const Logo = styled.div`
  font-family: 'bukhari';
  font-size: 50px;
  color: #e47c7c;
  text-shadow: 2px 2px 2px white;
`;

const StyledNav = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
`;

const StyledNavText = styled.span`
  padding: 10px;
`;

type NavbarProps = {
  toggleTheme: () => void;
  themeMode: string;
};

const Navbar = ({ toggleTheme, themeMode }: NavbarProps) => {
  const isDesktop = useMediaQuery(`${device.desktop}`);

  return (
    <NavbarWrapper>
      {isDesktop ? <Logo>L</Logo> : <span>This is too big</span>}
      <StyledNav>
        <ol>
          {navLinks.map(({ name }, i) => (
            <StyledNavText key={i}>
              0{i + 1}.{name}
            </StyledNavText>
          ))}
        </ol>
        {themeMode === 'light' ? (
          <IconButton
            aria-label="mode"
            onClick={toggleTheme}
            style={{ color: `${colors.light_navy}` }}
          >
            <DarkModeOutlinedIcon fontSize="medium" />
          </IconButton>
        ) : (
          <IconButton
            aria-label="mode"
            onClick={toggleTheme}
            style={{ color: `${colors.light_navy_2}` }}
          >
            <LightModeOutlinedIcon fontSize="medium" />
          </IconButton>
        )}
      </StyledNav>
    </NavbarWrapper>
  );
};

export default Navbar;
