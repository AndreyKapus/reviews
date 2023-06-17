import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import {OpenModalBtn, customStyles, ModalWrapper,CloseModalBtn, Total} from './AddReviewModal.styled'
import AddReview from '../AddReview/AddReview';
import {FaPlus} from 'react-icons/fa'
import {VscChromeClose} from 'react-icons/vsc'
import * as API from "../../Services/ContactsApi"
import { useSelector } from 'react-redux';
import authSelectors from "../../Redux/Auth/Selectors";

  Modal.setAppElement('body');

 const AddModal = ({onSubmit, reviews, getAllReviews}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [total, setTotal] = useState('');

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    useEffect(() => {
      if(!isLoggedIn) {
        return;
      };
      
        const getAllReviewsLenght = async () => {
          const responce = await API.getAllLenght();
        setTotal(responce.data.length)
        }
          getAllReviewsLenght()
    }, [isLoggedIn])
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    };
  
    return (
      <ModalWrapper>
        <OpenModalBtn onClick={openModal}><FaPlus size='20px' color='white'/></OpenModalBtn>
        <Total>Total reviews: {total}</Total>
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