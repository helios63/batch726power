import { Modal, BG } from "./styles";

const ModalComponent = ({toggleModal}) => (
  <>
  <BG onClick={toggleModal}/><Modal />
  </>
)


export default ModalComponent;
