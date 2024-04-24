import styled from 'styled-components';

export const MyPageWrapper = styled.div`
  padding: 20px;
  max-width: 450px;
  width: 100%;
  color: black;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;

  @media screen and (max-width: 740px) {
    width: 320px;
    transition: all 5s easi-in-out;
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  & img {
    width: 80px;
    border-radius: 50%;
  }
`;

export const ArchiveContainer = styled.div`
  width: 100%;
`;

export const ArchiveHeader = styled.div`
  display: flex;
  padding: 40px 0 10px;
  align-items: center;

  & h2 {
    font-size: 2rem;
    flex-shrink: 0;
    margin-right: 170px;
  }

  & img {
    width: 30px;
    cursor: pointer;
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
  width: 100%;
  margin-top: 10px;
`;

export const MyArchive = styled.ul`
  display: flex;
  height: 130px;
  gap: 15px;
  overflow-y: hidden;
  line-height: 0.8;
  justify-content: space-between;
  & hr {
    width: 1px;
    height: 35px;
    margin-top: 26px;
    border: none;
    border-left: 1px solid #d9d9d9;
  }
`;

export const RecordLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
  width: 140px;
  height: 100px;
  padding: 20px 12px;
  background: ${props => (props.background ? props.background : '')};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  color: white;

  & span {
    font-size: 1.4rem;
    font-weight: 500;
  }

  & span:last-child {
    font-weight: 300;
    margin-top: 10px;
  }
`;

export const ActiveLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 6px;
  align-items: center;
  /* flex-grow: 1; */
  cursor: pointer;

  & span:first-child {
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 2;
  }

  & span:last-child {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;
