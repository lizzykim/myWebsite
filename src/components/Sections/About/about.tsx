import styled from 'styled-components';
import { RevealWrapper } from 'next-reveal';
import { scrollRevealOptions } from '../../../config';
import device from '../../../theme/breakpoints';

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 100px 100px 100px;
  width: 100%;
  min-height: max-content;

  @media ${device.tablet} {
    padding: 50px 30px 50px 30px;
  }

  @media ${device.mobile} {
    padding: 30px 20px 50px 20px;
  }
`;

const ImageSummaryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  gap: 50px;

  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;
    gap: 30px;
  }
`;

const StyledImage = styled.img`
  border-radius: 20px;
`;

const CardFront = styled.div`
  position: absolute;
  width: 260px;
  height: 100%;
  left: 50%;
  transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const CardBack = styled.div`
  position: absolute;
  width: 260px;
  height: 100%;
  /* left: 50%; */
  transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
  backface-visibility: hidden;
  transform: rotateY(180deg);

  &:hover {
    transform: rotateY(0);
  }
`;

const CardWrapper = styled.div`
  position: relative;
  display: flex;
  height: 350px;
  cursor: pointer;
  justify-content: center;
`;

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media ${device.tablet} {
    gap: 0px;
  }
`;

const StyledTitle = styled.div`
  color: ${(props) => props.theme.color.headline};
  font-size: 25px;
  padding-bottom: 10px;
  font-weight: bold;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;

const StyledText = styled.div`
  max-width: 600px;
  color: ${(props) => props.theme.color.paragraph};
  font-size: 18px;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <ImageSummaryWrapper>
        {/* <div style={{ border: '5px red solid' }}>
          <div className="card">
            <div className="card-front">
              <StyledImage
                height={350}
                alt="profileImage"
                src="img/profileAnime.png"
              />
            </div>
            <div className="card-back">
              <StyledImage
                height={350}
                alt="profileImage"
                src="img/profile.png"
              />
            </div>
          </div>
        </div> */}
        {/* <div style={{ border: '5px red solid' }}>
          <CardWrapper>
            <CardFront>
              <StyledImage
                height={350}
                alt="profileImage"
                src="img/profileAnime.png"
              />
            </CardFront>
            <CardBack>
              <StyledImage
                height={350}
                alt="profileImage"
                src="img/profile.png"
              />
            </CardBack>
          </CardWrapper>
        </div> */}
        <StyledImage
          height={350}
          alt="profileImage"
          src="img/profileAnime.png"
        />
        <SummaryWrapper>
          <RevealWrapper className="load-hidden" {...scrollRevealOptions}>
            <StyledTitle>Who am I?</StyledTitle>
            <StyledText>
              Hello! My name is Dayoung Kim. <br /> I’m a self-driven frontend
              developer with 1 year experience. Due to curiosity and interest in
              blockchain community, I had an opportunity to work in a blockchain
              startup company. While working at the company, I learned the
              overall understanding of the web development work process and how
              to be a good colleague developer.
              <br />
              <br /> When I write my code my priority is to write clean,
              readable and maintainable code so my peer colleague can easily
              understand and give immediate feedbacks. Also I enjoy learning new
              stuffs and patiently solving problems.
              <br /> <br />I am looking for a company that believes in my growth
              potential and leads me to it.
            </StyledText>
          </RevealWrapper>
        </SummaryWrapper>
      </ImageSummaryWrapper>
    </AboutWrapper>
  );
};
export default About;
