import Input from '@components/input/Input';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledFeed = styled.div`
  flex-grow: 1;
  position: relative;
  padding: 30px;
`;

export const Post = styled.div`
  flex-grow: 1;
  font-size: 1.4rem;
  margin: 0 auto;
  margin-bottom: 50px;
  position: relative;
  transition: all 5s ease-in-out;

  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 740px) {
    font-size: 1.6rem;
    max-width: 500px;
  }
`;

export const PostHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
`;

export const PostInfo = styled.div`
  flex-grow: 1;
  & h4 {
    font-size: 1.4rem;
    font-weight: 500;
  }

  & p {
    font-size: 1.2rem;
    font-weight: 300;
    color: #727272;
  }

  @media (min-width: 740px) {
    & h4 {
      font-size: 1.6rem;
    }

    & p {
      font-size: 1.4rem;
    }
  }
`;

export const Bookmark = styled.div`
  margin-left: auto;

  & button {
    &:focus {
      box-shadow: inset 0 0 0 1px #55a25a;
      border-radius: 4px;
    }
  }
`;

export const PostMain = styled(Link)`
  margin-top: 10px;
  margin-bottom: 20px;

  & p {
    font-size: 1.4rem;
    margin: 10px 0;
  }

  & img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 5px;
  }

  &:focus {
    box-shadow: inset 0 0 0 1px #55a25a;
    border-radius: 4px;
  }

  @media (min-width: 740px) {
    & p {
      font-size: 1.6rem;
    }
  }
`;

export const PostContent = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;

  & p {
    font-size: 1.4rem;
    margin: 10px 0;
  }

  & img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (min-width: 740px) {
    & p {
      font-size: 1.6rem;
    }
  }
`;

export const ReplyMore = styled(Link)`
  font-size: 1.4rem;
  font-weight: 300;
  color: #727272;

  &:focus {
    font-weight: 500;
    color: #55a25a;
    text-decoration: underline;
  }
`;

export const Reply = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 15px;
`;

export const ReplyMain = styled.form`
  flex-grow: 1;
  display: flex;
  gap: 8px;

  & div {
    flex-grow: 1;

    & p {
      margin-top: 5px;
      font-size: 1.2rem;
      color: red;
    }
  }

  & button {
    padding: 2px;
    box-sizing: border-box;

    &:focus {
      box-shadow: inset 0 0 0 1px #55a25a;
      border-radius: 4px;
    }
  }
`;

export const ReplyInput = styled(Input)`
  flex-grow: 1;
  height: 30px;
`;

export const MoreClose = styled.button`
  cursor: default;

  &:focus {
    box-shadow: inset 0 0 0 1px #55a25a;
    border-radius: 4px;
  }
`;

export const MoreOpen = styled.button`
  position: relative;

  &:focus {
    box-shadow: inset 0 0 0 1px #55a25a;
    border-radius: 4px;
  }
`;

export const FeedWrite = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  flex-grow: 1;
  padding: 30px;
  box-sizing: border-box;

  & h3 {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 35px;
  }

  @media (min-width: 740px) {
    & h3 {
      font-size: 2.4rem;
      margin-bottom: 30px;
    }
  }
`;

export const EditorProfileImage = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 30px;

  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    aspect-ratio: 1/1;
  }
`;
