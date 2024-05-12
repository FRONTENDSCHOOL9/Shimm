import iconDelete from '@assets/images/icon-delete-post.svg';
import iconEdit from '@assets/images/icon-edit.svg';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuLink,
} from '@pages/community/feed/dropdown/FeedDropdown.style';
import useModalStore from '@zustand/modal';
import PropTypes from 'prop-types';

function FeedDropDown({ id, handleDelete, type }) {
  const { setShowModal, setModalData } = useModalStore();

  function deletePost() {
    setShowModal(true);
    setModalData({
      children: (
        <span>
          삭제한 글은 복구할 수 없습니다.
          <br />
          정말 삭제하시겠습니까?
        </span>
      ),
      button: 2,
      handleOk() {
        setShowModal(false);
        handleDelete(id);
      },
      handleClose() {
        setShowModal(false);
      },
    });
  }

  return (
    <Menu>
      {type === 'user' && (
        <MenuItem>
          <MenuLink to={`/community/${id}/edit`}>
            <img src={iconEdit} alt="게시글 수정" />
            <span>게시글 수정</span>
          </MenuLink>
        </MenuItem>
      )}
      <MenuItem>
        <MenuButton type="button" onClick={deletePost}>
          <img src={iconDelete} alt="게시글 삭제" />
          <span>게시글 삭제</span>
        </MenuButton>
      </MenuItem>
    </Menu>
  );
}

FeedDropDown.propTypes = {
  id: PropTypes.number.isRequired,
  handleDelete: PropTypes.func,
  type: PropTypes.string,
};

export default FeedDropDown;
