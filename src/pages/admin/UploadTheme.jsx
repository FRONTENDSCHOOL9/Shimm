import Input from '@components/input/Input';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Main = styled.main`
  box-shadow: inset 0 0 5px red;
  flex-grow: 1;

  display: flex;

  & section {
    box-shadow: inset 0 0 5px blue;
    flex-grow: 1;
    max-width: 600px;
    margin: 0 auto;
  }
`;

function UploadTheme() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(formData) {}
  return (
    <Main>
      <section>
        <h3>테마 등록하기</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="nameKor">테마 이름 (한글)</label>
            <Input
              id="nameKor"
              placeholder="테마의 한글 이름을 입력해 주세요."
            />
          </div>
          <div>
            <label htmlFor="nameEng">테마 이름 (영문)</label>
            <Input
              id="nameEng"
              placeholder="테마의 영문 이름을 입력해 주세요."
            />
          </div>
          <div>
            <label htmlFor="file">테마 파일</label>
            <Input id="file" type="file" />
          </div>
        </form>
      </section>
    </Main>
  );
}

export default UploadTheme;
