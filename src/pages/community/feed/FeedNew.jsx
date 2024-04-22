import {
  EditorProfileImage,
  FeedWrite,
} from '@pages/community/feed/Feed.style';
import FeedEditorNew from '@pages/community/feed/editor/FeedEditorNew';
import useUserStore from '@zustand/user.mjs';

function FeedNew() {
  const { user } = useUserStore();

  return (
    <FeedWrite>
      <h3>새 글 쓰기</h3>
      {user ? (
        <EditorProfileImage>
          <img
            src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}${user.profile}`}
          />
        </EditorProfileImage>
      ) : (
        <EditorProfileImage>
          <img
            src={`${import.meta.env.VITE_API_SERVER}/files/${import.meta.env.VITE_CLIENT_ID}/icon-user-default.png`}
          />
        </EditorProfileImage>
      )}
      <FeedEditorNew />
    </FeedWrite>
  );
}

export default FeedNew;
