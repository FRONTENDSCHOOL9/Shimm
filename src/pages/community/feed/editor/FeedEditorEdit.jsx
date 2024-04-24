import iconImage from '@assets/images/icon-file.svg';
import Button from '@components/button/Button';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  ButtonContent,
  FeedForm,
  FileContent,
  FileMain,
  TextContent,
  DeleteButton,
  Title,
} from '@pages/community/feed/editor/FeedEditor.style';
import useModalStore from '@zustand/modal';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function FeedEditorEdit() {
  const [data, setData] = useState();
  const { setShowModal, setModalData } = useModalStore();
  const { id } = useParams();
  const navigate = useNavigate();
  const axios = useCustomAxios();
  const [imgValue, setImgValue] = useState('선택한 파일 없음');

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    try {
      const res = await axios(`/posts/${id}`);

      if (res.data.item.extra?.image) {
        setImgValue(res.data.item.extra?.image);
      } else {
        setImgValue('선택한 파일 없음');
      }
    } catch (err) {
      console.log(err);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    values: {
      content: `${data?.item?.content}`,
      image: `${data?.item?.extra?.image}`,
    },
  });

  async function onSubmit(formData) {
    try {
      if (formData.newImage.length > 0) {
        const imageFormData = new FormData();
        imageFormData.append('attach', formData.newImage[0]);

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

        delete formData.newImage;
      } else {
        if (data?.item?.extra?.image && imgValue !== '선택한 파일 없음') {
          formData.extra = {
            image: `${data?.item?.extra?.image}`,
          };
        }
        delete formData.newImage;
      }

      const res = await axios.patch(`/posts/${id}`, formData);

      setShowModal(true);
      setModalData({
        children: <span>게시물이 수정되었습니다!</span>,
        button: 1,
        handleOk() {
          reset();
          setShowModal(false);
          navigate(`/community/${id}`);
        },
      });
    } catch (err) {
      console.error(err);
    }
  }

  function handleChange(e) {
    setImgValue(e.target.value);
  }

  function handleDelete() {
    setImgValue('선택한 파일 없음');
  }

  return (
    <FeedForm onSubmit={handleSubmit(onSubmit)}>
      <TextContent>
        <div>
          <textarea
            id="content"
            title="content"
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
        <img src={iconImage} alt="변경할 사진 첨부" />
        <FileMain>
          <Title>
            <p>변경할 사진 첨부하기</p>
            <DeleteButton
              size="mediumLow"
              bgColor="black"
              handleClick={handleDelete}
            >
              사진 지우기
            </DeleteButton>
          </Title>

          <div>
            <label htmlFor="image">
              <span>파일 선택</span>
              <span>{imgValue.split(`\\`).reverse()[0]}</span>
            </label>
            <input
              size="fullLow"
              type="file"
              id="image"
              title="image"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              {...register('newImage', {
                onChange: handleChange,
              })}
            />
          </div>
        </FileMain>
      </FileContent>

      <ButtonContent>
        <Button bgColor="grey" size="full" handleClick={() => navigate(-1)}>
          취소
        </Button>
        <Button type="submit" bgColor="primary" size="full">
          수정
        </Button>
      </ButtonContent>
    </FeedForm>
  );
}

export default FeedEditorEdit;
