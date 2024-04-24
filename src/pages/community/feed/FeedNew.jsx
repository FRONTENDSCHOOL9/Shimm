import Loading from '@components/loading/Loading';
import useCustomAxios from '@hooks/useCustomAxios';
import {
  EditorProfileImage,
  FeedWrite,
} from '@pages/community/feed/Feed.style';
import FeedEditorNew from '@pages/community/feed/editor/FeedEditorNew';
import useUserStore from '@zustand/user';
import { useEffect, useState } from 'react';

function FeedNew() {
  const { user } = useUserStore();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const axios = useCustomAxios();

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, []);

  async function fetchUser() {
    const res = await axios(`/users/${user._id}`);
    setData(res.data);
  }

  function setLoading(value) {
    setIsLoading(value);
  }

  const item = data?.item;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <FeedWrite>
          <h3>새 글 쓰기</h3>
          {user ? (
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
          ) : (
            <EditorProfileImage>
              <img
                src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/icon-user-default.png`}
              />
            </EditorProfileImage>
          )}
          <FeedEditorNew setLoading={setLoading} />
        </FeedWrite>
      )}
    </>
  );
}

export default FeedNew;
