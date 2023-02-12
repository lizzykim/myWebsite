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
  border: 2px red solid;
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

const StyledContactWrapper = styled.div`
  border: 2px plum solid;
  padding: 10px;
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
      <StyledContactWrapper>
        <ul>
          {snsLinks.map(({ url, name }) => (
            <li key={name}>
              <a href={url}>{/* <Icon name={name}>{name}</Icon> */}</a>
            </li>
          ))}
        </ul>
      </StyledContactWrapper>
    </ContactWrapper>
  );
};

export default Contact;
