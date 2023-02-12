import styled from 'styled-components';
import { snsLinks } from '../../../config';
import device from '../../../theme/breakpoints';
import { Icon } from '../../Icons';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 100px 100px 100px;
  width: 100%;
  min-height: 100vh;

  @media ${device.tablet} {
    padding: 50px 30px 50px 30px;
  }

  @media ${device.mobile} {
    padding: 30px 20px 50px 20px;
  }
`;

const StyledParagraph = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.color.headline};
  font-size: 40px;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 30px;
  }
`;

const StyledSubParagraph = styled.div`
  display: flex;
  text-align: center;
  max-width: 500px;
  color: ${(props) => props.theme.color.button};
  font-size: 15px;
  padding: 0px 0px 20px 0px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledFormWrapper = styled.div`
  border: 2px red solid;
`;

const StyledSNSWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledContactWrapper = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;

  @media ${device.mobile} {
    width: 150px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: ${(props) => props.theme.color.button};
    color: ${(props) => props.theme.color.background};
    border-radius: 10px;

    @media ${device.mobile} {
      width: 30px;
      height: 30px;
    }
  }

  svg {
    width: 30px;
    height: 30px;

    @media ${device.mobile} {
      width: 20px;
      height: 20px;
    }

    &:hover {
      transform: translateY(-3px);
      transition: all 0.15s ease-in;
    }
  }
`;

const StyledEmail = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px;
  background-color: ${(props) => props.theme.color.button};
  color: ${(props) => props.theme.color.background};
  font-weight: 800;
  border-radius: 10px;
  cursor: pointer;

  @media ${device.mobile} {
    height: 30px;
    padding: 10px;
    border-radius: 5px;
    font-size: 12px;
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.15s ease-in;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <StyledParagraph>Get in Touch</StyledParagraph>
      <StyledSubParagraph>
        Any questions or want to work together? Not only work suggestions, just
        ping me to say hi is also welcome! I will try to do my best to reply you
        back!
      </StyledSubParagraph>
      <StyledFormWrapper>Form</StyledFormWrapper>
      <StyledSNSWrapper>
        <StyledContactWrapper>
          {snsLinks &&
            snsLinks.map(({ url, name }) => (
              <div key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Icon name={name} />
                </a>
              </div>
            ))}
        </StyledContactWrapper>
        <StyledEmail>
          <a href="mailto:kjdayoung@gmail.com">Say hello by email!</a>
        </StyledEmail>
      </StyledSNSWrapper>
    </ContactWrapper>
  );
};

export default Contact;
