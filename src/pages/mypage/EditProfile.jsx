import Input from '@components/input/Input';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import useUserStore from '@zustand/user.mjs';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import iconDelete from '@assets/images/icon-delete-post.svg';
import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useModalStore from '@zustand/modal';

const StyledForm = styled.div`
  flex-grow: 1;
  position: relative;
  padding: 30px;
`;

const FormWrapper = styled.div`
  flex-grow: 1;
  font-size: 1.4rem;
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;
  transition: all 5s ease-in-out;

  @media (min-width: 740px) {
    font-size: 1.6rem;
    max-width: 500px;
  }
`;

const ProfileImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  & div {
    display: flex;
    gap: 10px;
    height: 40px;

    & input {
      display: none;
    }

    & label {
      cursor: pointer;
      background-color: #55a25a;
      border-radius: 20px;
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 1.4rem;
      line-height: 4rem;
      font-weight: 300;
      color: #fff;
    }

    & label:hover {
      background-color: #335635;
    }
  }
`;

const Password = styled.div``;

const ChangePassword = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Toggle = styled.div`
  & input {
    display: none;
  }

  & label {
    display: inline-block;
    cursor: pointer;
    width: 40px;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    position: relative;
    transition: 0.5s ease-out;
  }

  & input:checked + label {
    background-color: #55a25a;
  }

  & label:after {
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

  & input:checked + label:after {
    background-color: #55a25a;
    left: calc(100% - 18px);
    background-color: #fff;
  }
`;

const PasswordInputs = styled.div`
  & div {
    display: block;
  }
`;

function EditProfile() {
  const [data, setData] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageValue, setImageValue] = useState();
  const axios = useCustomAxios();
  const { user, setUser } = useUserStore();
  const { setShowModal, setModalData } = useModalStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserInfo();
    setImageValue(user.profile);
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

        if (fileRes.data.item.length === 0) {
          formData.profileImage = user.profile;
        }

        formData.profileImage = fileRes.data.item[0].name;
      } else {
        formData.profileImage = 'icon-user-default.png';
      }

      if (!formData.password) {
        delete formData.password;
      }

      const res = await axios.patch(`/users/${user._id}`, formData);

      setUser({
        _id: user._id,
        name: formData.name,
        email: user.email,
        type: user.type,
        loginType: user.loginType,
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
    <StyledForm>
      {isLoading ? (
        <Loading />
      ) : (
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

                <button type="button" onClick={deleteImage}>
                  <i>이미지 제거</i>
                  <img src={iconDelete} alt="프로필 이미지 삭제하기" />
                </button>
              </div>
            </ProfileImage>

            <div>
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
            </div>
            {user.loginType === 'email' && (
              <Password>
                <ChangePassword>비밀번호 변경</ChangePassword>
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
                {isActive && (
                  <PasswordInputs>
                    <div>
                      <label htmlFor="name">비밀번호</label>
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
                    </div>
                    <div>
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
                    </div>
                  </PasswordInputs>
                )}
              </Password>
            )}
            <div>
              <label htmlFor="birth">생년월일</label>
              <Input
                type="date"
                id="birth"
                placeholder="생년월일을 입력하세요"
                min="1940-01-01"
                {...register('birth')}
              />
              {errors.birth && <p>{errors.birth.message}</p>}
            </div>

            <div>
              <label htmlFor="phone">전화번호</label>
              <Input
                type="text"
                id="phone"
                placeholder="휴대폰 번호를 입력하세요"
                {...register('phone')}
              />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div>
              <Button type="submit" bgColor="primary" size="full">
                수정하기
              </Button>
            </div>
          </form>
        </FormWrapper>
      )}
    </StyledForm>
  );
}

export default EditProfile;
