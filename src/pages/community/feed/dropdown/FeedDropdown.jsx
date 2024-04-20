import iconDelete from '@assets/images/icon-delete-post.svg';
import iconEdit from '@assets/images/icon-edit.svg';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuLink,
} from '@pages/community/feed/dropdown/FeedDropdown.style';
import PropTypes from 'prop-types';

function FeedDropDown({ id, handleDelete }) {
  return (
    <Menu>
      <MenuItem>
        <MenuLink to={`/community/${id}/edit`}>
          <img src={iconEdit} alt="게시글 수정" />
          <span>게시글 수정</span>
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuButton type="button" onClick={() => handleDelete(id)}>
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
};

export default FeedDropDown;
