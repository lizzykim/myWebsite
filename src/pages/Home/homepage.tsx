import Head from 'next/head';
import styled from 'styled-components';
import Intro from '../../components/Sections/Intro';
import About from '../../components/Sections/About';
import Projects from '../../components/Sections/Projects';
import Work from '../../components/Sections/Work';
import Contact from '../../components/Sections/Contact';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.background};
  transition: background-color 0.25s linear;
  width: 100%;
`;

const homepage = () => {
  return (
    <Wrapper>
      <Intro />
      <About />
      <Work />
      <Projects />
      <Contact />
    </Wrapper>
  );
};

export default homepage;
