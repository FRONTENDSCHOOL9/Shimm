import iconClose from '@assets/images/icon-close.svg';
import {
  ButtonClose,
  ButtonContainer,
  Inside,
  Message,
  Modal,
  ModalClose,
  ModalOk,
} from '@components/modal/ModalWindow.style';
import PropTypes from 'prop-types';

function ModalWindow({
  children,
  button,
  closeButton = true,
  handleClose,
  handleOk,
}) {
  return (
    <Modal>
      <Inside>
        {closeButton && (
          <ButtonClose type="button" onClick={handleClose}>
            <img src={iconClose} alt="닫기 버튼" />
          </ButtonClose>
        )}
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
  closeButton: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOk: PropTypes.func.isRequired,
};

export default ModalWindow;
