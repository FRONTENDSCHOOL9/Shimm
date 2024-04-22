import {
  EditorProfileImage,
  FeedWrite,
} from '@pages/community/feed/Feed.style';
import FeedEditorEdit from '@pages/community/feed/editor/FeedEditorEdit';
import useUserStore from '@zustand/user.mjs';

function FeedEdit() {
  const { user } = useUserStore();

  return (
    <>
      {user && (
        <FeedWrite>
          <h3>수정하기</h3>
          <EditorProfileImage>
            <img
              src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/${user.profile}`}
            />
          </EditorProfileImage>

          <FeedEditorEdit />
        </FeedWrite>
      )}
    </>
  );
}

export default FeedEdit;
