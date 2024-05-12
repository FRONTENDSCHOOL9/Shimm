import styled from 'styled-components';

export const Main = styled.main`
  flex-grow: 1;
  display: flex;
`;

export const Section = styled.section`
  flex-grow: 1;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px 20px;

  @media (min-width: 740px) {
    padding: 64px 20px;
  }

  @media (min-width: 1280px) {
    padding: 80px 20px;
  }
`;

export const PageTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 740px) {
    font-size: 2.4rem;
    margin-bottom: 44px;
  }
`;

export const ThemeInput = styled.div`
  margin-bottom: 26px;
`;

export const ThemeLabel = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 7px;
`;

export const ThemePrice = styled.div`
  margin-bottom: 18px;
  & div {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;

    & p {
      margin-bottom: unset;
    }

    & input {
      display: none;
    }

    & label {
      display: inline-block;
      cursor: pointer;
      width: 40px;
      height: 20px;
      background-color: #e0e0e0;
      border-radius: 10px;
      position: relative;
      transition: 0.5s ease-out;
    }

    & input:checked + label {
      background-color: #55a25a;
    }

    & label:after {
      content: '';
      width: 15px;
      height: 15px;
      background-color: #fff;
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 3px;
      transform: translateY(-50%);
      transition: 0.5s ease-out;
    }

    & input:checked + label:after {
      background-color: #55a25a;
      left: calc(100% - 18px);
      background-color: #fff;
    }
  }
`;

export const ThemeDesc = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ThemeColor = styled.div`
  margin-bottom: 30px;
`;

export const ColorPicker = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  & div {
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
    flex-wrap: w;
    gap: 10px;
  }

  @media (min-width: 740px) {
    flex-wrap: nowrap;
    & div {
      & p {
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
  }
`;

export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  gap: 5px;

  & img {
    width: 25px;
    height: 25px;
  }

  & p {
    font-size: 1.2rem;
    line-height: 2.5rem;
    font-weight: 500;
  }

  @media (min-width: 740px) {
    justify-content: ${props => (props.$align === 'right' ? 'flex-end' : '')};

    & img {
      width: 30px;
      height: 30px;
    }

    & p {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`;

export const ColorButton = styled.button`
  width: 50px;
  height: 25px;
  border-radius: 5px;
  background-color: ${props => props.$bgColor};

  &:focus {
    box-shadow: 0 0 0 2px #55a25a;
    border-radius: 5px;
  }

  @media (min-width: 740px) {
    height: 30px;
  }
`;

export const Popover = styled.div`
  position: absolute;
  top: 30px;
  z-index: 1;

  @media (min-width: 740px) {
    top: 35px;
  }
`;

export const ThemePattern = styled.div`
  margin-bottom: 30px;

  & ul {
    display: grid;
    row-gap: 10%;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fit, 60px);

    & li {
      & button {
        aspect-ratio: 1/1;
        width: 60px;
        height: 60px;
        border-radius: 5px;
        background-color: #eba034;
        position: relative;

        & img {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
      }

      & button:hover {
        box-shadow: 0 0 0 2px #55a25a;
        border-radius: 5px;
      }

      & button:focus {
        box-shadow: 0 0 0 2px #55a25a;
        border-radius: 5px;
      }
    }
  }

  @media (min-width: 740px) {
    margin-bottom: 50px;
  }
`;
