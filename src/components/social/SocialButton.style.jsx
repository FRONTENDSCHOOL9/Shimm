import styled from "styled-components";
import iconGoogle from '@assets/images/icon-google.png';
import iconKakao from '@assets/images/icon-kakao.png';
import iconNaver from '@assets/images/icon-naver.png';


const bgColors = {
  white: '#fff',
  yellow: '#fae100',
  green: '#03c75a',
};

const hoverColors = {
  white: '#cccccc',
  yellow: '#c6b300',
  green: '#019d47',
};

const shadowColors = {
  white: '#cccccc',
  yellow: '#c6b300',
  green: '#019d47',
};

const icons = {
  white: iconGoogle,
  yellow: iconKakao,
  green: iconNaver,
}



export const SocialButton = styled.button`
  width: 100%;
  max-width: 320px;
  height: 50px;
  background-color: ${props => bgColors[props.$bg]};
  border-radius: 25px;
  border: ${props => (props.bgColors === 'white' ? '1px solid #333' : 'none')};
  text-align: center;
  color: ${props => (props.bgColors === 'white' ? '#333' : '#fff')};
  font-size: 1.4rem;
  font-weight: 200;
  transition: 0.3s ease-in-out;
  background-image: url(${props => icons[props.$bg]});
  background-repeat: no-repeat;
  background-position: 20px center;
  background-size: 20px auto;
  padding-left: 10px;
  box-sizing: border-box;

  &:focus {
    box-shadow: inset 0 0 0 2px ${props => shadowColors[props.$bg]};
  }

  &:hover {
    background-color: ${props => hoverColors[props.$bg]};
  }
`;
