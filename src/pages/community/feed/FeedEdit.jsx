import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  EditorProfileImage,
  FeedWrite,
} from '@pages/community/feed/Feed.style';
import FeedEditorEdit from '@pages/community/feed/editor/FeedEditorEdit';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';

function FeedEdit() {
  const { user } = useUserStore();
  const [data, setData] = useState();
  const axios = useCustomAxios();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const res = await axios(`/users/${user._id}`);
    setData(res.data);
  }

  const item = data?.item;

  function setLoading(value) {
    setIsLoading(value);
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        user && (
          <FeedWrite>
            <h3>수정하기</h3>
            <EditorProfileImage>
              <img
                src={
                  item?.profileImage.startsWith('http://')
                    ? item?.profileImage
                    : `${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${item?.profileImage}`
                }
                alt="내 프로필 이미지"
              />
            </EditorProfileImage>

            <FeedEditorEdit setLoading={setLoading} />
          </FeedWrite>
        )
      )}
    </>
  );
}

export default FeedEdit;
