import { useState } from 'react';
import Modal from 'react-modal';
import {OpenModalBtn, customStyles, ModalWrapper} from './AddReviewModal.styled'
import AddReview from '../AddReview/AddReview';
import {FaPlus} from 'react-icons/fa'

  Modal.setAppElement('body');

 const AddModal = ({onSubmit}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <ModalWrapper>
        <OpenModalBtn onClick={openModal}><FaPlus size='20px' color='white'/></OpenModalBtn>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>close</button>
          <AddReview onSubmit={onSubmit} closeModal={closeModal}/>
  
        </Modal>
      </ModalWrapper>
    );
  };

  export default AddModal;