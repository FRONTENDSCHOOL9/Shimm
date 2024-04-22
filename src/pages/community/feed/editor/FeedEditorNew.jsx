import iconImage from '@assets/images/icon-file.svg';
import Button from '@components/button/Button';
import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  ButtonContent,
  FeedForm,
  FileContent,
  FileMain,
  TextContent,
} from '@pages/community/feed/editor/FeedEditor.style';
import useModalStore from '@zustand/modal';
import useUserStore from '@zustand/user';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

function FeedEditorNew() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { setShowModal, setModalData } = useModalStore();
  const [isLoading, setIsLoading] = useState(false);
  const [imgValue, setImgValue] = useState('선택한 파일 없음');
  const { user } = useUserStore();
  const navigate = useNavigate();
  const axios = useCustomAxios();
  const location = useLocation();

  async function onSubmit(formData) {
    try {
      if (!user) {
        setShowModal(true);
        setModalData({
          children: (
            <span>
              게시글을 작성하려면 로그인해야 합니다. <br />
              로그인하시겠습니까?
            </span>
          ),
          button: 2,
          handleOk() {
            reset();
            setShowModal(false);
            navigate('/users/login', { state: { from: location.pathname } });
          },
          handleClose() {
            setShowModal(false);
          },
        });
      } else {
        setIsLoading(true);
        formData.type = 'community';
        if (formData.image.length > 0) {
          const imageFormData = new FormData();
          imageFormData.append('attach', formData.image[0]);

          const fileRes = await axios('/files', {
            method: 'post',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            data: imageFormData,
          });

          formData.extra = {
            image: fileRes.data.item[0].name,
          };

          delete formData.image;
        } else {
          delete formData.image;
        }

        const res = await axios.post('/posts?type=community', formData);

        setShowModal(true);
        setModalData({
          children: <span>게시물이 저장되었습니다!</span>,
          button: 1,
          handleOk() {
            reset();
            setShowModal(false);
            navigate(`/community/${res.data.item._id}`);
          },
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e) {
    setImgValue(e.target.value);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <FeedForm onSubmit={handleSubmit(onSubmit)}>
          <TextContent>
            <div>
              <textarea
                id="content"
                title="content"
                placeholder="무슨 일이 일어나고 있나요?"
                {...register('content', {
                  required: '내용을 입력해주세요.',
                  minLength: {
                    value: 1,
                    message: '한 글자 이상 입력해주세요.',
                  },
                })}
              />
            </div>
            {errors.content && <p>{errors.content.message}</p>}
          </TextContent>
          <FileContent>
            <img src={iconImage} alt="사진 첨부" />
            <FileMain>
              <p>사진 첨부하기</p>
              <div>
                <label htmlFor="image">
                  <span>파일 선택</span>
                  <span>{imgValue.split(`\\`).reverse()[0]}</span>
                </label>
                <input
                  type="file"
                  id="image"
                  name="profile-img"
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                  {...register('image', {
                    onChange: handleChange,
                  })}
                />
              </div>
              <p>
                이미지 첨부를 원하시면 파일을 선택해 주세요. <br />
                가로 500, 세로 500 이상의 이미지만 등록 가능합니다.
              </p>
            </FileMain>
          </FileContent>

          <ButtonContent>
            <Button bgColor="grey" size="full" handleClick={() => navigate(-1)}>
              취소
            </Button>
            <Button type="submit" bgColor="primary" size="full">
              등록
            </Button>
          </ButtonContent>
        </FeedForm>
      )}
    </>
  );
}

export default FeedEditorNew;
