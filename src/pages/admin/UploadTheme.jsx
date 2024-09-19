import iconDropper from '@assets/images/icon-dropper.svg';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import { StyledError } from '@components/input/Input.style';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  ColorButton,
  ColorPicker,
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
import useModalStore from '@zustand/modal';
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function UploadTheme() {
  const [isChecked, setIsChecked] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const { setShowModal, setModalData } = useModalStore();
  const [startColor, setStartColor] = useState('#4FEA7D');
  const [endColor, setEndColor] = useState('#E4626F');
  const [bgImage, setBgImage] = useState();
  const navigate = useNavigate();
  const axios = useCustomAxios();

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
      if (!bgImage) {
        setShowModal(true);
        setModalData({
          children: <span>테마 배경 패턴을 선택하세요!</span>,
          button: 1,
          handleOk() {
            setShowModal(false);
          },
        });
      } else {
        formData = {
          ...formData,
          name: `${formData.nameKor} ${formData.nameEng}`,
          mainImages: {
            path: `/files/02-Shimm/${bgImage}`,
            name: bgImage,
            originalname: `${formData.nameEng.toLowerCase()}.png`,
          },
          content: `${formData.nameKor} 테마로 명상을 진행해 보세요.`,
          price: formData.price ? formData.price : 0,
          quantity: 99999,
          extra: {
            background: `linear-gradient(45deg, ${startColor} 0%, ${endColor} 100%)`,
            music: formData.url,
          },
        };

        delete formData.url;

        const res = await axios.post('/seller/products', formData);

        setShowModal(true);
        setModalData({
          children: <span>테마 등록이 완료되었습니다.</span>,
          button: 1,
          handleOk() {
            setShowModal(false);
            navigate('/meditation');
          },
        });
      }
    } catch (err) {
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach(error =>
          setError(error.path, { message: error.msg }),
        );
      } else if (err.response?.data.message) {
        alert(err.response?.data.message);
      }
    }
  }

  function handlePattern(e) {
    const temp = e.target?.src?.split('/');
    if (temp) {
      setBgImage(temp[temp.length - 1]);
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
                pattern: {
                  value: /^[ㄱ-ㅎ가-힣]*$/,
                  message: '한글 이름을 입력하세요.',
                },
              })}
            />
            {errors && <StyledError>{errors.nameKor?.message}</StyledError>}
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
                pattern: {
                  value: /^[a-zA-Z]*$/,
                  message: '영문 이름을 입력하세요.',
                },
              })}
            />
            {errors && <StyledError>{errors.nameEng?.message}</StyledError>}
          </ThemeInput>
          <ThemeInput>
            <ThemeLabel htmlFor="url">테마 링크</ThemeLabel>
            <Input
              id="url"
              placeholder="테마 음악 링크를 입력해 주세요."
              {...register('url', {
                required: '테마 음악 링크를 입력하세요.',
                pattern: {
                  value:
                    /^(https?|ftp):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i,
                  message: '유효한 링크를 입력하세요.',
                },
              })}
            />
            {errors && <StyledError>{errors.url?.message}</StyledError>}
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
            {isChecked && (
              <>
                <Input
                  placeholder="테마 가격을 입력해 주세요."
                  title="price"
                  {...register('price', {
                    required: '가격을 입력하세요.',
                  })}
                />
                {errors && <StyledError>{errors.price?.message}</StyledError>}
              </>
            )}
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
                <button
                  id="theme-01"
                  aria-label="테마 1"
                  type="button"
                  onClick={handlePattern}
                >
                  <img
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/bg-theme-01.webp`}
                  />
                </button>
              </li>
              <li>
                <button
                  id="theme-02"
                  aria-label="테마 2"
                  type="button"
                  onClick={handlePattern}
                >
                  <img
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/bg-theme-02.webp`}
                  />
                </button>
              </li>
              <li>
                <button
                  id="theme-03"
                  aria-label="테마 3"
                  type="button"
                  onClick={handlePattern}
                >
                  <img
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/bg-theme-03.webp`}
                  />
                </button>
              </li>
              <li>
                <button
                  id="theme-04"
                  aria-label="테마 4"
                  type="button"
                  onClick={handlePattern}
                >
                  <img
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/bg-theme-04.webp`}
                  />
                </button>
              </li>
              <li>
                <button
                  id="theme-05"
                  aria-label="테마 5"
                  type="button"
                  onClick={handlePattern}
                >
                  <img
                    src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/bg-theme-05.webp`}
                  />
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
