// import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '@components/button/Button';
// import Loading from '@components/loading/Loading';
// import useDetectClose from '@hooks/useDetectClose.mjs';

function SignUpOneStep() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      birth: '1999-02-25',
      phone: '01055556666',
    },
  });
  // const [isLoading, setIsLoading] = useState(false);

  function onSubmit() {}

  function handleNext() {
    navigate('/signup/twostep');
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <div>
      <h3>회원가입</h3>
      <ul>
        <li>기본 정보 입력</li>
        <li>프로필 설정</li>
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="sample@bb.com 형식으로 입력해 주세요.이메일을 입력하세요"
            {...register('email', {
              required: '이메일을 입력하세요.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '올바른 이메일 형식이 아닙니다.',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="소문자, 대문자, 특수문자를 조합하여 8글자 이상 입력해 주세요."
            {...register('password', {
              required: '비밀번호를 입력하세요.',
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="password-confirm">비밀번호 확인</label>
          <input
            type="password"
            id="password-confirm"
            placeholder="입력한 비밀번호를 한번 더 입력해 주세요."
            {...register('password', {
              required: '비밀번호를 입력하세요.',
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="birth">생년월일</label>
          <input
            type="date"
            id="birth"
            placeholder="생년월일을 입력하세요"
            min="1940-01-01"
            {...register('birth', {
              required: '생년월일을 입력하세요.',
            })}
          />
          {errors.birth && <p>{errors.birth.message}</p>}
        </div>

        <div>
          <label htmlFor="phone">전화번호</label>
          <input
            type="text"
            id="phone"
            placeholder="휴대폰 번호를 입력하세요"
            {...register('phone', {
              required: '휴대폰 번호를 입력하세요.',
            })}
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>

        <Button
          type="submit"
          size="medium"
          bgColor="primary"
          handleClick={handleNext}
        >
          다음 단계
        </Button>
      </form>
      <Button size="medium" bgColor="dark" handleClick={handleBack}>
        이전
      </Button>

      {/* {isLoading && <Loading />} */}
    </div>
  );
}

export default SignUpOneStep;
