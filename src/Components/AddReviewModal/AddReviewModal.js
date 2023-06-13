import { useState } from 'react';
import Modal from 'react-modal';
import {OpenModalBtn, customStyles, ModalWrapper,CloseModalBtn, Total} from './AddReviewModal.styled'
import AddReview from '../AddReview/AddReview';
import {FaPlus} from 'react-icons/fa'
import {VscChromeClose} from 'react-icons/vsc'

  Modal.setAppElement('body');

 const AddModal = ({onSubmit, reviews, getAllReviews}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    };
  
    return (
      <ModalWrapper>
        <OpenModalBtn onClick={openModal}><FaPlus size='20px' color='white'/></OpenModalBtn>
        <Total>Total reviews: {reviews.length}</Total>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add"
        >
          <CloseModalBtn onClick={closeModal}><VscChromeClose color="white" size='9px'/></CloseModalBtn>
          <AddReview onSubmit={onSubmit} closeModal={closeModal} reviews={reviews} getAllReviews={getAllReviews}/>
        </Modal>
      </ModalWrapper>
    );
  };

  export default AddModal;