import PropTypes from 'prop-types';
import {
  Inside,
  Modal,
  Message,
  ModalClose,
  ModalOk,
} from '@components/modal/ModalWindow.style';

function ModalWindow({ children, twoButton = true, handleClose, handleOk }) {
  return (
    <Modal>
      <Inside>
        <Message>{children}</Message>
        {twoButton && (
          <ModalClose
            type="button"
            onClick={handleClose}
            $twoButton={twoButton}
          >
            취소
          </ModalClose>
        )}
        <ModalOk type="button" onClick={handleOk} $twoButton={twoButton}>
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
