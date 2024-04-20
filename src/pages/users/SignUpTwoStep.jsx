import { useState } from 'react';
import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useCustomAxios from '@hooks/useCustomAxios';
import userImage from '@assets/images/icon-user-default.png';

function SignUpTwoStep() {
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    values: {
      name: '닉네임을 입력해 주세요.',
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState({
    imageFile: '',
    previewURL: userImage,
  });

  function saveImage(e) {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }
    fileReader.onload = () => {
      setImage({
        imageFile: e.target.files[0],
        previewURL: fileReader.result,
      });
    };
  }

  function deleteImage() {
    setImage({
      imageFile: '',
      previewURL: userImage,
    });
  }

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
            'Content-Type': 'multipart/form-data',
          },
          data: imageFormData,
        });

        formData.profileImage = fileRes.data.item[0].name;
      } else {
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
    navigate(-1);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <img src={image.previewURL} alt="프로필 이미지" />
          <label htmlFor="profile-img">프로필 사진 추가하기</label>
          <input
            type="file"
            style={{ display: 'none' }}
            id="profile-img"
            name="profile-img"
            accept=".png, .jpeg, .jpg"
            onChange={saveImage}
            onClick={e => (e.target.value = null)}
          />
          <button onClick={deleteImage}>프로필 이미지 삭제</button>
        </div>
        <div>
          <label htmlFor="name">닉네임</label>
          <input
            type="text"
            id="name"
            placeholder="닉네임을 입력해 주세요."
            {...register('name', {
              required: '닉네임을 입력하세요.',
              minLength: {
                value: 2,
                message: '닉네임을 2글자 이상 입력하세요.',
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <Button type="submit" size="medium" bgColor="dark">
          회원가입 완료
        </Button>
      </form>

      <Button size="medium" bgColor="dark" handleClick={handleBack}>
        이전
      </Button>
      {isLoading && <Loading />}
    </>
  );
}

export default SignUpTwoStep;
