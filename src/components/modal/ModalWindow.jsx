import {
  Inside,
  Modal,
  Message,
  ModalClose,
  ModalOk,
} from '@components/modal/ModalWindow.style';
import PropTypes from 'prop-types';

function ModalWindow({ children, twoButton = true, handleClose, handleOk }) {
  return (
    <Modal>
      <Inside>
        <Message>{children}</Message>
        {twoButton && (
          <ModalClose type="button" onClick={handleClose}>
            취소
          </ModalClose>
        )}
        <ModalOk type="button" onClick={handleOk}>
          확인
        </ModalOk>
      </Inside>
    </Modal>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  twoButton: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOk: PropTypes.func.isRequired,
};

export default ModalWindow;
