// import Button from '@components/button/Button';

import styled from 'styled-components';

const MainStyle = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledSection = styled.section`
  background-color: dodgerblue;
  flex-grow: 1;
  box-shadow: inset 0 0 5px red;
  padding: 60px 40px;
  box-sizing: border-box;
  text-align: center;
`;

const PageTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

function Meditation() {
  return (
    <MainStyle>
      <StyledSection>
        <PageTitle>명상하기</PageTitle>
        <h3>원하는 시간을 선택해 주세요.</h3>
      </StyledSection>

      {/* <Button type="button" color="primary">
        명상 시작하기
      </Button> */}
    </MainStyle>
  );
}

export default Meditation;
