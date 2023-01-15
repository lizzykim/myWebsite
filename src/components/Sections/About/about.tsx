import styled from 'styled-components';
import { RevealWrapper } from 'next-reveal';
import { scrollRevealOptions } from '../../../config';

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 100px 100px 100px;
  width: 100%;
  border: 2px solid blue;
`;

const ImageSummaryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;

const StyledImage = styled.img`
  border-radius: 20px;

  :hover {
    height: 350px;
    transform: rotateY(180deg);
    transition: 1s;
  }
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledTitle = styled.div`
  color: ${(props) => props.theme.color.paragraph};
  font-size: 25px;
  padding-bottom: 10px;
  font-weight: bold;
`;

const StyledText = styled.div`
  max-width: 600px;
  color: ${(props) => props.theme.color.paragraph};
  font-size: 16px;
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <ImageSummaryWrapper>
        <StyledImage
          height={350}
          alt="profileImange"
          src="img/profileAnime.png"
        />
        <RevealWrapper className="load-hidden" {...scrollRevealOptions}>
          <SummaryWrapper>
            <div>
              <StyledTitle>Who is she?</StyledTitle>
              <StyledText>
                Hello, my name is Dayoung Kim.
                <br />
                I’m a self-driven front end developer with 1 year experience.
                <br />
                Due to curiosity and interest in blockchain community, I had an
                opportunity to work in a Blockchain company. I’ve dedicated in
                Web 3 project building P2E NFT Blockchain game using Solana web3
                API. When I write my code my priority is to write clean,
                readable and maintainable code so my peer colleague can easily
                understand and give immediate feedbacks.
              </StyledText>
            </div>
            <div>
              <StyledTitle>Why web development?</StyledTitle>
              <StyledText>
                My first challenge in programming was when I start Android app
                development in university. It was not easy but fun, I would stay
                up all night to building my own apps. By chance I started web
                development and I experienced a more immersive experience than
                when I was building apps. The part that users could check my
                results on a larger screen anywhere with internet and various
                libraries provided were the best parts of web development. For
                this reason, my goal is to create a website that can provide
                users with a better UX/UI experience with eye-catching
                animations.
              </StyledText>
            </div>
          </SummaryWrapper>
        </RevealWrapper>
      </ImageSummaryWrapper>
    </AboutWrapper>
  );
};
export default About;
