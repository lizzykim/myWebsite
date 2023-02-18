import { useState } from 'react';
import styled from 'styled-components';
import css from 'styled-jsx/css';
import { scrollRevealOptions, snsLinks } from '../../../config';
import device from '../../../theme/breakpoints';
import { Icon } from '../../Icons';
import { useForm } from 'react-hook-form';
import { RevealWrapper } from 'next-reveal';
import Alert from '../../Alert';

const style = css`
  form {
    max-width: 100%;
  }

  input {
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .msg {
    height: 100px;
  }

  span {
    color: #bf1650;
  }

  span::before {
    display: inline;
    content: '⚠ ';
  }

  button[type='submit'],
  input[type='submit'] {
    font-family: 'bukhari';
    background: #f582ae;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 20px;
    padding: 20px;
    font-size: 20px;
    letter-spacing: 5px;
  }

  button[type='submit']:hover,
  input[type='submit']:hover {
    background: #bf1650;
  }

  input[type='submit']:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
`;

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
  margin-bottom: 40px;

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
  max-width: 400px;
  @media ${device.mobile} {
    max-width: 300px;
  }
`;

const StyledSNSWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

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
    margin-top: 8px;

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

  a {
    font-family: 'bukhari';
  }

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

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export type AlertState = {
  alert: 'success' | 'error';
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [alert, setAlert] = useState<any>();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onSubmit = async (data: Inputs) => {
    fetch('/api/addpost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          setAlert('success');
          setOpenSnackbar(true);
        } else {
          setAlert('error');
          setOpenSnackbar(true);
          throw new Error(response.statusText);
        }
      })
      .catch((error) => {
        setAlert('error');
        console.log('This is network error', error);
      });
  };

  return (
    <RevealWrapper className="load-hidden" {...scrollRevealOptions}>
      <ContactWrapper id="contact">
        <StyledParagraph>Get in Touch</StyledParagraph>
        <StyledSubParagraph>
          Any questions or want to work together? Not only work related, ping me
          to just say hi is also welcome! I will try to do my best to reply you
          back!
        </StyledSubParagraph>
        <StyledFormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Name"
              {...register('name', { maxLength: 20 })}
            />
            <input
              placeholder="Email (Required)"
              {...register('email', { required: true, min: 9 })}
            />
            {errors.email && <span>This email field is required</span>}
            <input
              className="msg"
              placeholder="Your messages (Required)"
              {...register('message', { required: true })}
            />
            {errors.message && <span>This message field is required</span>}
            <input type="submit" value="Submit" />
          </form>
          <style jsx>{style}</style>
          <Alert
            status={alert}
            openSnackbar={openSnackbar}
            setopenSnackbar={setOpenSnackbar}
          />
        </StyledFormWrapper>
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
    </RevealWrapper>
  );
};

export default Contact;
