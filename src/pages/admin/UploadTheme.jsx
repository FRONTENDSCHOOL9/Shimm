import iconDropper from '@assets/images/icon-dropper.svg';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import theme01 from '@assets/images/bg-theme01.svg';
import theme02 from '@assets/images/bg-theme02.svg';
import theme03 from '@assets/images/bg-theme03.svg';
import theme04 from '@assets/images/bg-theme04.svg';
import theme05 from '@assets/images/bg-theme05.svg';
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
  ThemePrice,
  ThemePattern,
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

  async function onSubmit(formData) {
    try {
      console.log(formData);
    } catch (err) {
      console.error(err);
    }
  }

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
              {...register('nameKor', {
                required: '테마 이름을 입력하세요.',
                minLength: {
                  value: 1,
                  message: '테마 한글 이름을 1글자 이상 입력하세요.',
                },
              })}
            />
          </ThemeInput>
          <ThemeInput>
            <ThemeLabel htmlFor="nameEng">테마 이름 (영문)</ThemeLabel>
            <Input
              id="nameEng"
              placeholder="테마의 영문 이름을 입력해 주세요."
              {...register('nameEng', {
                required: '테마 영문 이름을 입력하세요.',
                minLength: {
                  value: 1,
                  message: '테마 영문 이름을 1글자 이상 입력하세요.',
                },
              })}
            />
          </ThemeInput>
          <ThemeInput>
            <ThemeLabel htmlFor="file">테마 파일</ThemeLabel>
            <FileInput
              id="file"
              type="file"
              {...register('themeMusic', {
                required: '배경 음악을 업로드 하세요.',
              })}
            />
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
            <Input
              placeholder="테마 가격을 입력해 주세요."
              title="price"
              {...register('price')}
            />
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
                <StyledDiv $align="right">
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
                <button type="button" onClick={() => {}}>
                  <img src={theme01} />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => {}}>
                  <img src={theme02} />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => {}}>
                  <img src={theme03} />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => {}}>
                  <img src={theme04} />
                </button>
              </li>
              <li>
                <button type="button" onClick={() => {}}>
                  <img src={theme05} />
                </button>
              </li>
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
