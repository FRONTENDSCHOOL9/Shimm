import theme01 from '@assets/images/bg-theme01.svg';
import iconDropper from '@assets/images/icon-dropper.svg';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import {
  ColorButton,
  ColorPicker,
  Description,
  FileInput,
  Main,
  PageTitle,
  Popover,
  Section,
  StyledDiv,
  ThemeColor,
  ThemeDesc,
  ThemeInput,
  ThemeLabel,
  ThemePattern,
  ThemePrice,
} from '@pages/admin/UploadTheme.style';
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useForm } from 'react-hook-form';

function UploadTheme() {
  const [isChecked, setIsChecked] = useState(true);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const [startColor, setStartColor] = useState('#4FEA7D');
  const [endColor, setEndColor] = useState('#E4626F');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handleStartButton() {
    if (!isStartOpen) {
      setIsStartOpen(true);
      if (isEndOpen) setIsEndOpen(false);
    } else {
      setIsStartOpen(false);
    }
  }

  function handleEndButton() {
    if (!isEndOpen) {
      setIsEndOpen(true);
      if (isStartOpen) setIsStartOpen(false);
    } else {
      setIsEndOpen(false);
    }
  }

  function handleChangeStartColor(color) {
    setStartColor(color.hex);
    setIsStartOpen(false);
  }

  function handleChangeEndColor(color) {
    setEndColor(color.hex);
    setIsEndOpen(false);
  }

  async function onSubmit(formData) {}
  return (
    <Main>
      <Section>
        <PageTitle>테마 등록하기</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ThemeInput>
            <ThemeLabel htmlFor="nameKor">테마 이름 (한글)</ThemeLabel>
            <Input
              id="nameKor"
              placeholder="테마의 한글 이름을 입력해 주세요."
            />
          </ThemeInput>
          <ThemeInput>
            <ThemeLabel htmlFor="nameEng">테마 이름 (영문)</ThemeLabel>
            <Input
              id="nameEng"
              placeholder="테마의 영문 이름을 입력해 주세요."
            />
          </ThemeInput>
          <ThemeInput>
            <ThemeLabel htmlFor="file">테마 파일</ThemeLabel>
            <FileInput id="file" type="file" />
            <Description>테마에 쓰일 오디오 파일을 선택해 주세요.</Description>
          </ThemeInput>
          <ThemePrice>
            <div>
              <ThemeDesc>유료 테마</ThemeDesc>
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
            <Input placeholder="테마 가격을 입력해 주세요." title="price" />
          </ThemePrice>

          <ThemeColor>
            <ThemeDesc>테마 배경 색상</ThemeDesc>
            <ColorPicker>
              <div>
                <StyledDiv>
                  <img src={iconDropper} alt="시작 색상 선택" />
                  <ColorButton
                    className="color"
                    type="button"
                    onClick={handleStartButton}
                    $bgColor={startColor}
                  >
                    <i>색상 선택</i>
                  </ColorButton>
                  {isStartOpen && (
                    <Popover>
                      <ChromePicker
                        width="50"
                        color={startColor}
                        onChangeComplete={handleChangeStartColor}
                      />
                    </Popover>
                  )}
                  <p>{startColor}</p>
                </StyledDiv>
              </div>
              <div>
                <StyledDiv position="right">
                  <img src={iconDropper} alt="종료 색상 선택" />
                  <ColorButton
                    className="color"
                    type="button"
                    onClick={handleEndButton}
                    $bgColor={endColor}
                  >
                    <i>색상 선택</i>
                  </ColorButton>
                  {isEndOpen && (
                    <Popover>
                      <ChromePicker
                        width="50"
                        color={endColor}
                        onChangeComplete={handleChangeEndColor}
                      />
                    </Popover>
                  )}
                  <p>{endColor}</p>
                </StyledDiv>
              </div>
            </ColorPicker>
          </ThemeColor>

          <ThemePattern>
            <ThemeDesc>테마 배경 패턴</ThemeDesc>
            <ul>
              <li>
                <img src={theme01} />
              </li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </ThemePattern>
          <Button type="submit" size="full" bgColor="dark">
            등록하기
          </Button>
        </form>
      </Section>
    </Main>
  );
}

export default UploadTheme;
