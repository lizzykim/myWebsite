import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import device from '../../theme/breakpoints';
import { navLinks } from '../../config';
import { IconButton } from '@material-ui/core';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import colors from '../../theme/colors';

const StyledMenu = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;

type StyledHamburgerButtonProps = {
  menuOpen: boolean;
};

const StyledHamburgerButton = styled.button<StyledHamburgerButtonProps>`
  @media ${device.tablet} {
    position: relative;
    z-index: 2;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 3px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.color.paragraph};
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.menuOpen ? `0.22s` : `0s`)};
    transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${(props) =>
        props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: 30px;
      height: 3px;
      border-radius: 6px;
      background-color: ${(props) => props.theme.color.paragraph};
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${(props) => (props.menuOpen ? `100%` : `120%`)};
      top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${(props) => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
        menuOpen
          ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s'
          : ' top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
    }
    &:after {
      width: ${(props) => (props.menuOpen ? `100%` : `80%`)};
      bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) =>
        menuOpen
          ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s'
          : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
    }
  }
`;

const StyledAsidebar = styled.aside<StyledHamburgerButtonProps>`
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 80px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: ${(props) => props.theme.color.background};
    box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
    z-index: 1;
    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

const StyledAsideNavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StyledAsideNavText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 30px;

  &:hover {
    transform: translateY(-3px);
    transition: all 0.15s ease-in;
  }
`;

type MenuProps = {
  toggleTheme: () => void;
  themeMode: string;
};

const Menu = ({ toggleTheme, themeMode }: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((menuOpen) => !menuOpen);

  return (
    <StyledMenu>
      <StyledHamburgerButton onClick={toggleMenu} menuOpen={menuOpen}>
        <div className="ham-box">
          <div className="ham-box-inner" />
        </div>
      </StyledHamburgerButton>
      <StyledAsidebar menuOpen={menuOpen}>
        <StyledAsideNavWrapper>
          <ol style={{ padding: 0 }}>
            {navLinks.map(({ name, url }, i) => (
              <StyledAsideNavText key={i}>
                <Link href={url}>
                  0{i + 1}.{name}
                </Link>
              </StyledAsideNavText>
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
        </StyledAsideNavWrapper>
      </StyledAsidebar>
    </StyledMenu>
  );
};

export default Menu;
