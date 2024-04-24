import Button from '@components/button/Button';
import Input from '@components/input/Input';
import Loading from '@components/loading/Loading';
import iconCurrentStep from '@assets/images/icon-breadcrumb-active.svg';
import iconStep from '@assets/images/icon-breadcrumb.svg';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import {
  CurrentStep,
  ErrorMessge,
  FlexContent,
  InputLabel,
  MarginBottom,
  SignUpTitle,
  SignUpWrapper,
  Step,
  Stepper,
} from '@pages/users/SignUp.style';
import useFormStore from '@zustand/form';
import useModalStore from '@zustand/modal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SignUpOneStep() {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const { setShowModal, setModalData } = useModalStore();
  const { setForm } = useFormStore();
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    trigger,
    watch,
    setError,
    setFocus,
    getValues,
  } = useForm({
    values: {
      birth: '1999-02-25',
      phone: '01055556666',
    },
    shouldFocusError: true,
    mode: 'onChange',
  });
  const [emailChecked, setEmailChecked] = useState(false);
  const email = watch('email');

  async function handleEmail() {
    setIsLoading(true);

    const isValid = await trigger('email');
    if (!isValid) {
      setError(
        'email',
        { message: '올바른 이메일을 입력해 주세요.' },
        { shouldFocus: true },
      );
      return;
    }

    try {
      const resultCheck = await axios.get(`/users/email?email=${email}`);
      if (resultCheck.data.ok) {
        setEmailChecked(true);
        setShowModal(true);
        setModalData({
          children: <span>사용 가능한 이메일입니다.</span>,
          button: 1,
          handleOk() {
            setShowModal(false);
            setFocus('email');
          },
          handleClose() {
            setShowModal(false);
            setFocus('email');
          },
        });
      }
    } catch (err) {
      setEmailChecked(false);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach(error =>
          setError(error.path, { message: error.msg }),
        );
      } else if (err.response?.data.message) {
        setShowModal(true);
        setModalData({
          children: <span>이미 등록된 이메일입니다.</span>,
          button: 1,
          handleOk() {
            setShowModal(false);
            setFocus('email');
          },
          handleClose() {
            setShowModal(false);
            setFocus('email');
          },
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  function saveData(data) {
    if (emailChecked) {
      setForm(data);
      navigate('/signup/twostep');
    } else {
      setShowModal(true);
      setModalData({
        children: (
          <span>
            이메일 중복 확인이 필요합니다.
            <br />
            이메일 중복 확인을 해 주세요.
          </span>
        ),
        button: 1,
        handleOk() {
          setShowModal(false);
          setFocus('email');
        },
        handleClose() {
          setShowModal(false);
          setFocus('email');
        },
      });
    }
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <SignUpWrapper>
          <SignUpTitle>회원가입</SignUpTitle>
          <Stepper>
            <CurrentStep>
              <img src={iconCurrentStep} />
              <span>기본 정보 입력</span>
            </CurrentStep>
            <Step>
              <img src={iconStep} />
              <span>프로필 설정</span>
            </Step>
          </Stepper>
          <form onSubmit={handleSubmit(saveData)}>
            <div>
              <InputLabel htmlFor="email">이메일</InputLabel>
              <FlexContent>
                <Input
                  type="email"
                  id="email"
                  placeholder="sample@bb.com 형식으로 입력해 주세요."
                  {...register('email', {
                    required: '이메일을 입력하세요.',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: '올바른 이메일 형식이 아닙니다.',
                    },
                  })}
                />
                <Button bgColor="dark" size="full" handleClick={handleEmail}>
                  중복확인
                </Button>
              </FlexContent>

              {errors.email && (
                <ErrorMessge>{errors.email.message}</ErrorMessge>
              )}
            </div>

            <div>
              <InputLabel htmlFor="password">비밀번호</InputLabel>
              <Input
                type="password"
                id="password"
                placeholder="소문자, 대문자, 특수문자를 조합하여 8글자 이상 입력해 주세요."
                {...register('password', {
                  required: '비밀번호를 입력하세요.',
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: '비밀번호 형식에 맞게 입력해 주세요.',
                  },
                })}
              />
              {errors.password && (
                <ErrorMessge>{errors.password.message}</ErrorMessge>
              )}
            </div>
            <div>
              <InputLabel htmlFor="password-confirm">비밀번호 확인</InputLabel>
              <Input
                type="password"
                id="password-confirm"
                placeholder="입력한 비밀번호를 한번 더 입력해 주세요."
                {...register('passwordConfirm', {
                  required: '비밀번호를 한번 더 입력해 주세요.',
                  validate: {
                    check: val => {
                      if (getValues('password') !== val) {
                        return '입력하신 비밀번호가 일치하지 않습니다.';
                      }
                    },
                  },
                })}
              />
              {errors.passwordConfirm && (
                <ErrorMessge>{errors.passwordConfirm.message}</ErrorMessge>
              )}
            </div>
            <div>
              <InputLabel htmlFor="birth">생년월일</InputLabel>
              <Input
                type="date"
                id="birth"
                placeholder="생년월일을 입력하세요"
                min="1940-01-01"
                {...register('birth', {
                  required: '생년월일을 입력하세요.',
                })}
              />
              {errors.birth && (
                <ErrorMessge>{errors.birth.message}</ErrorMessge>
              )}
            </div>

            <MarginBottom>
              <InputLabel htmlFor="phone">전화번호</InputLabel>
              <Input
                type="text"
                id="phone"
                placeholder="휴대폰 번호를 입력하세요"
                {...register('phone', {
                  required: '휴대폰 번호를 입력하세요.',
                })}
              />
              {errors.phone && (
                <ErrorMessge>{errors.phone.message}</ErrorMessge>
              )}
            </MarginBottom>

            <Button type="submit" size="full" bgColor="primary">
              다음 단계
            </Button>
          </form>
          <Button size="full" bgColor="dark" handleClick={handleBack}>
            이전
          </Button>
        </SignUpWrapper>
      )}
    </>
  );
}

export default SignUpOneStep;
