import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { navLinks } from '../../config';
import { IconButton } from '@material-ui/core';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import device from '../../theme/breakpoints';
import colors from '../../theme/colors';
import useScrollDirection from '../../hooks/useScrollDirection';
import Menu from '../Menu.tsx/menu';

type NavbarWrapperProps = {
  scrolledToTop: boolean;
  scrollDirection: string;
};

const NavbarWrapper = styled.nav<NavbarWrapperProps>`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100vw;
  padding: 0px 50px;
  color: ${(props) => props.theme.color.paragraph};
  background-color: ${(props) => props.theme.color.background};
  transition: all 0.35s linear;

  ${(props) =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: 80px;
      transform: translateY(0px);
      box-shadow: 0 10px 30px -10px ${(props) => props.theme.color.background_shadow};
    `}

  ${(props) =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: 80px;
      transform: translateY(calc(70px * -1));
      box-shadow: 0 10px 30px -10px ${(props) => props.theme.color.background_shadow};
    `}

    @media ${device.tablet} {
    padding: 0px 30px;
  }
`;

type LogoProps = {
  active: boolean;
};

const Logo = styled.div<LogoProps>`
  font-family: 'bukhari';
  font-size: 50px;
  color: #e47c7c;
  text-shadow: 2px 2px 2px ${colors.white};

  ${(props) =>
    props.active &&
    css`
      text-shadow: 3px 3px 3px ${colors.baby_blue};
    `}
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledNavText = styled.span`
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  transition: all 0.15s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`;

type NavbarProps = {
  toggleTheme: () => void;
  themeMode: string;
};

const Navbar = ({ toggleTheme, themeMode }: NavbarProps) => {
  const scrollDirection = useScrollDirection();
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper
      scrolledToTop={scrolledToTop}
      scrollDirection={scrollDirection}
    >
      <Logo active={themeMode === 'light'}>L</Logo>
      <StyledNav>
        <ol>
          {navLinks.map(({ name, url }, i) => (
            <StyledNavText key={i}>
              <Link href={url}>
                0{i + 1}.{name}
              </Link>
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
      <Menu toggleTheme={toggleTheme} themeMode={themeMode} />
    </NavbarWrapper>
  );
};

export default Navbar;
