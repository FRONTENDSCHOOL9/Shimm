import styled from 'styled-components';

export const MyPageSection = styled.section`
  flex-grow: 1;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
`;

export const MyPageWrapper = styled.div`
  font-size: 1.4rem;
  margin: 0 auto;
  transition: all 5s ease-in-out;

  @media (min-width: 740px) {
    font-size: 1.6rem;
    max-width: 500px;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  & h2 {
    font-size: 1.8rem;
    line-height: 3.4rem;
    font-weight: 200;
    & span {
      font-weight: 500;
    }
  }

  & img {
    width: 80px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (min-width: 740px) {
    margin-bottom: 30px;
  }
`;

export const LinkContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 740px) {
    margin-bottom: 30px;
  }
`;

export const ArchiveContainer = styled.div``;

export const ArchiveHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  & h2 {
    font-weight: 500;
    font-size: 2rem;
  }

  & button {
    margin-left: auto;

    &:focus {
      box-shadow: inset 0 0 0 2px #55a25a;
      border-radius: 4px;
    }
  }

  & img {
    width: 30px;
    transform: rotate(90deg);
    transition:
      transform 0.2s ease-in-out,
      scale 0.2s ease-in-out;

    &:hover {
      transform: rotate(90deg) scale(1.2);
    }
  }
`;

export const ArchiveBox = styled.div`
  margin-bottom: 20px;

  @media (min-width: 740px) {
    margin-bottom: 30px;
  }
`;

export const MyArchive = styled.ul`
  overflow-x: auto;
  display: flex;
  gap: 15px;
`;

export const RecordButton = styled.button`
  flex-shrink: 0;
  word-break: keep-all;
  margin-bottom: 20px;
  width: 140px;
  height: 100px;
  padding: 20px 12px;
  background: ${props => (props.$background ? props.$background : '')};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.4rem;
  color: white;

  &:focus {
    box-shadow: inset 0 0 0 3px #224124;
  }
`;

export const RecordDate = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
`;

export const PostArchive = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  & hr {
    width: 1px;
    height: 35px;
    border: none;
    border-left: 1px solid #d9d9d9;
  }

  @media (min-width: 740px) {
    margin-top: 30px;
    gap: 50px;
  }
`;

export const ActiveLi = styled.li`
  & button {
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    font-weight: 500;

    &:focus {
      box-shadow: inset 0 0 0 2px #55a25a;
      border-radius: 4px;
    }
  }

  & span:first-child {
    font-size: 3.6rem;
    display: block;
  }

  & span:last-child {
    font-size: 1.4rem;
  }
`;

export const NoRecord = styled.div`
  padding: 10px 0;

  & p {
    margin: 60px auto;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
  }
`;
