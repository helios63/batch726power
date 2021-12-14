import { Modal, BG, Close } from "./styles";

const ModalComponent = ({toggleModal, children}) => (
  <>
  <BG onClick={toggleModal}/>
  <Modal>
    <Close onClick={toggleModal} />
    {children}
  </Modal>
  </>
)


export default ModalComponent;
