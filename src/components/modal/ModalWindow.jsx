import PropTypes from 'prop-types';
import {
  Inside,
  Modal,
  Message,
  ModalClose,
  ModalOk,
  ButtonContainer,
} from '@components/modal/ModalWindow.style';

function ModalWindow({ children, button, handleClose, handleOk }) {
  return (
    <Modal>
      <Inside>
        <Message>{children}</Message>
        {button > 0 && (
          <ButtonContainer>
            {button > 1 && (
              <ModalClose type="button" onClick={handleClose}>
                취소
              </ModalClose>
            )}
            <ModalOk type="button" onClick={handleOk}>
              확인
            </ModalOk>
          </ButtonContainer>
        )}
      </Inside>
    </Modal>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.number.isRequired,
  handleClose: PropTypes.func,
  handleOk: PropTypes.func.isRequired,
};

export default ModalWindow;
