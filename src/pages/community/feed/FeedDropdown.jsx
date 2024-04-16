import useDetectClose from '@hooks/useDetectClose.mjs';
import useClickOutside from '@hooks/useClickOutside.mjs';
import React, { useRef } from 'react';
import styled from 'styled-components';
import iconedit from '@assets/images/icon-edit.svg';
import icondelete from '@assets/images/icon-delete-post.svg';
import iconmore from '@assets/images/icon-more.svg';
import { Link } from 'react-router-dom';

const StyledDropDown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
`;

const MoreButton = styled.button`
  margin-left: auto;
`;

const Menu = styled.div`
  position: absolute;
  width: 300px;
  text-align: center;
  transform: translate(-10px);
  transition:
    opacity 0.3s ease,
    transform 0.4s ease,
    visibility 0.2s;
`;

const OpenMenu = styled.div`
  background-color: white;
  width: 100%;
  min-width: 4rem;
  padding: 0.6rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 8px;
  font-size: 2rem;
  box-sizing: border-box;

  & img {
    width: 30px;
    margin: 4px 10px 0 0;

  }
`;

const StyledLink = styled(Link)`
  font-size: 2.2rem;
  line-height: 1.8;
`;

function FeedDropDown() {
  const menuRef = useRef('menu');
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);

  useClickOutside(menuRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <StyledDropDown ref={menuRef}>
      <MoreButton onClick={() => setIsOpen(!isOpen)}>
        {' '}
        <img src={iconmore} />
      </MoreButton>
      {!isOpen ? (
        <Menu></Menu>
      ) : (
        <OpenMenu>
          <div>
            <img src={iconedit} alt="#" />
            <StyledLink to="/edit">게시글 수정</StyledLink>
          </div>
          <div>
            <img src={icondelete} alt="#" />
            <StyledLink to="/">게시글 삭제</StyledLink>
          </div>
        </OpenMenu>
      )}
    </StyledDropDown>
  );
}

export default FeedDropDown;
