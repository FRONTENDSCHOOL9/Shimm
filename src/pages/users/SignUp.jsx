import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useCustomAxios from '@hooks/useCustomAxios';
import Button from '@components/button/Button';
import { ReactCsspin } from 'react-csspin';
import 'react-csspin/dist/style.css';

function SignUp() {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    values: {
      birth: '1999-02-25',
      phone: '01055556666',
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      formData.type = 'user';

      // 이미지 먼저 업로드
      if (formData.profileImage.length > 0) {
        // 프로필 이미지를 추가한 경우
        const imageFormData = new FormData();
        imageFormData.append('attach', formData.profileImage[0]);

        const fileRes = await axios('/files', {
          method: 'post',
          headers: {
            // 파일 업로드시 필요한 설정
            'Content-Type': 'multipart/form-data',
          },
          data: imageFormData,
        });

        // 서버로부터 응답받은 이미지 이름을 회원 정보에 포함
        formData.profileImage = fileRes.data.item[0].name;
      } else {
        // profileImage 속성을 제거
        delete formData.profileImage;
      }

      const res = await axios.post('/users', formData);
      alert(
        res.data.item.name +
          '님 회원가입이 완료 되었습니다.\n로그인 후에 이용하세요.',
      );

      navigate('/users/login');
    } catch (err) {
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach(error =>
          setError(error.path, { message: error.msg }),
        );
      } else if (err.response?.data.message) {
        alert(err.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleBack() {
    navigate('/');
  }

  return (
    <div>
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            placeholder="이름을 입력하세요"
            {...register('name', {
              required: '이름을 입력하세요.',
              minLength: {
                value: 2,
                message: '이름을 2글자 이상 입력하세요.',
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            {...register('email', {
              required: '이메일을 입력하세요.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: '이메일 형식이 아닙니다.',
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
            placeholder="비밀번호를 입력하세요"
            {...register('password', {
              required: '비밀번호를 입력하세요.',
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="birth">생년월일</label>
          <input
            type="text"
            id="birth"
            placeholder="생년월일을 입력하세요"
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
        <div>
          <label htmlFor="profileImage">프로필 이미지</label>
          <input
            type="file"
            accept="image/*"
            id="profileImage"
            placeholder="이미지를 선택하세요"
            {...register('profileImage')}
          />
        </div>

        <Button type="submit" size="medium" bgColor="primary">
          회원가입
        </Button>
      </form>

      <Button size="medium" bgColor="primary" handleClick={handleBack}>
        홈화면으로
      </Button>

      {isLoading && <ReactCsspin />}
    </div>
  );
}

export default SignUp;
