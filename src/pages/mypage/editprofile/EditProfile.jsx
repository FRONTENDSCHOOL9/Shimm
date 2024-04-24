import iconDelete from '@assets/images/icon-delete-post.svg';
import Button from '@components/button/Button';
import Input from '@components/input/Input';
import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  FormWrapper,
  Password,
  PasswordInputs,
  StyledBirth,
  StyledNickName,
  StyledPhoneNumber,
  Toggle,
  ProfileImage,
  FormSection,
  DeleteButton,
  PasswordOption,
} from '@pages/mypage/editprofile/EditProfile.style';
import useModalStore from '@zustand/modal';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const [data, setData] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const axios = useCustomAxios();
  const { user, setUser } = useUserStore();
  const { setShowModal, setModalData } = useModalStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  async function fetchUserInfo() {
    const res = await axios(`/users/${user._id}`);
    setData(res.data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    reset,
    getValues,
  } = useForm({
    values: {
      name: data?.item?.name,
      birth: data?.item?.birth,
      phone: data?.item?.phone,
      profileImage: user.profile,
    },
  });

  const [image, setImage] = useState({
    imageFile: '',
    previewURL: user.profile.startsWith('http://')
      ? user.profile
      : `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profile}`,
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
    setValue('profileImage', null);
    setImage({
      imageFile: '',
      previewURL: `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/icon-user-default.png`,
    });
  }

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      if (formData.profileImage) {
        const imageFormData = new FormData();
        imageFormData.append('attach', formData.profileImage[0]);

        const fileRes = await axios('/files', {
          method: 'post',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: imageFormData,
        });

        if (fileRes.data.item.length !== 0) {
          formData.profileImage = fileRes.data.item[0].name;
        } else {
          formData.profileImage = user.profile;
        }
      } else {
        formData.profileImage = 'icon-user-default.png';
      }

      if (!formData.password) {
        delete formData.password;
      }

      const res = await axios.patch(`/users/${user._id}`, formData);

      setUser({
        _id: data?.item?._id,
        name: formData.name,
        email: data?.item?.email,
        type: data?.item?.type,
        loginType: data?.item?.loginType,
        phone: formData.phone,
        profile: formData.profileImage,
        token: user.token,
      });

      setShowModal(true);
      setModalData({
        children: <span>회원 정보가 변경되었습니다.</span>,
        button: 1,
        handleOk() {
          reset();
          setShowModal(false);
          navigate('/mypage/info');
        },
      });
    } catch (err) {
      console.error(err);
      if (err.response?.data.errors) {
        err.response?.data.errors.forEach(error =>
          setError(error.path, { message: error.msg }),
        );
      } else if (err.response?.data.message) {
        console.error(err);
        alert(err.response?.data.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <FormSection>
          <FormWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ProfileImage>
                <img src={image.previewURL} alt="변경할 프로필 이미지" />
                <div>
                  <input
                    type="file"
                    {...register('profileImage', { onChange: saveImage })}
                    id="profileImage"
                    accept=".png, .jpeg, .jpg"
                    onClick={e => (e.target.value = null)}
                  />
                  <label htmlFor="profileImage">프로필 사진 변경하기</label>
                  <DeleteButton type="button" onClick={deleteImage}>
                    <i>이미지 제거</i>
                    <img src={iconDelete} alt="프로필 이미지 삭제하기" />
                  </DeleteButton>
                </div>
              </ProfileImage>

              <StyledNickName>
                <label htmlFor="name">닉네임</label>
                <Input
                  type="text"
                  id="name"
                  display="block"
                  placeholder="닉네임을 입력해 주세요."
                  {...register('name', {
                    required: '닉네임을 입력해 주세요.',
                    minLength: {
                      value: 2,
                      message: '닉네임을 2글자 이상 입력하세요.',
                    },
                  })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </StyledNickName>
              {user.loginType === 'email' && (
                <Password>
                  <PasswordOption>
                    <p>비밀번호 변경</p>
                    <Toggle>
                      <input
                        className="toggleInput"
                        type="checkbox"
                        id="toggle"
                        checked={isActive}
                        onChange={handleActive}
                      />
                      <label className="toggleLabel" htmlFor="toggle">
                        {' '}
                      </label>
                    </Toggle>
                  </PasswordOption>
                  {isActive && (
                    <>
                      <PasswordInputs>
                        <label htmlFor="password">비밀번호</label>
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
                        {errors.password && <p>{errors.password.message}</p>}
                      </PasswordInputs>
                      <PasswordInputs>
                        <label htmlFor="password-confirm">비밀번호 확인</label>
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
                          <p>{errors.passwordConfirm.message}</p>
                        )}
                      </PasswordInputs>
                    </>
                  )}
                </Password>
              )}
              <StyledBirth>
                <label htmlFor="birth">생년월일</label>
                <Input
                  type="date"
                  id="birth"
                  placeholder="생년월일을 입력하세요"
                  min="1940-01-01"
                  {...register('birth')}
                />
                {errors.birth && <p>{errors.birth.message}</p>}
              </StyledBirth>

              <StyledPhoneNumber>
                <label htmlFor="phone">전화번호</label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="휴대폰 번호를 입력하세요"
                  {...register('phone')}
                />
                {errors.phone && <p>{errors.phone.message}</p>}
              </StyledPhoneNumber>

              <div>
                <Button type="submit" bgColor="primary" size="full">
                  수정하기
                </Button>
              </div>
            </form>
          </FormWrapper>
        </FormSection>
      )}
    </>
  );
}

export default EditProfile;
