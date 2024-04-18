import Input from '@components/input/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import iconDropper from '@assets/images/icon-dropper.svg';
import { SketchPicker } from 'react-color';
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

  & .toggleInput {
    display: none;
  }

  & .toggleLabel {
    display: inline-block;
    cursor: pointer;
    width: 40px;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    position: relative;
    transition: 0.5s ease-out;
  }

  & .toggleInput:checked + .toggleLabel {
    background-color: #55a25a;
  }

  & .toggleLabel:after {
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

  & .toggleInput:checked + .toggleLabel:after {
    background-color: #55a25a;
    left: calc(100% - 18px);
    background-color: #fff;
  }

  & button {
    width: 50px;
    height: 25px;
    border-radius: 10px;
    background-color: #000;
  }
`;

function UploadTheme() {
  const [isChecked, setIsChecked] = useState(true);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const [startColor, setStartColor] = useState();
  const [endColor, setEndColor] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  function handleCheck() {
    setIsChecked(!isChecked);
  }

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
            <p>테마에 쓰일 오디오 파일을 선택해 주세요.</p>
          </div>
          <div>
            <p>유료 테마</p>
            <input
              className="toggleInput"
              type="checkbox"
              id="toggle"
              checked={isChecked}
              onChange={handleCheck}
            />
            <label className="toggleLabel" htmlFor="toggle">
              {' '}
            </label>
          </div>
          <div>
            <p>테마 배경 색상</p>
            <div>
              <img src={iconDropper} alt="시작 색상 선택" />
              <button
                type="button"
                onClick={() => setIsStartOpen(!isStartOpen)}
              >
                <i>색상 선택</i>
              </button>
              {isStartOpen && <SketchPicker />}
            </div>
            <div>
              <img src={iconDropper} alt="종료 색상 선택" />
              <button type="button" onClick={() => setIsEndOpen(!isEndOpen)}>
                <i>색상 선택</i>
              </button>
              {isEndOpen && <SketchPicker />}
            </div>
          </div>
        </form>
      </section>
    </Main>
  );
}

export default UploadTheme;
