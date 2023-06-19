import { useState } from "react";
import * as API from '../../Services/ContactsApi'
import {AddReviewWrapper, AddForm, AddLabel, AddInput, AddBtn} from './AddReview.styled'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = ({closeModal, getAllReviews, page}) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [company, setCompany] = useState('');
  const [link, setLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const showAddSuccess = () => {
    toast.success('Review added', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const handleChange = (e) => {
    const {name, value} = e.target;

    switch(name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setDate(value);
        break;

      case 'company':
        setCompany(value);
        break;

      case 'link':
        setLink(value);
        break;

      default: return;
    }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true)
    await API.addReview({name, date, company, link});
    getAllReviews(page)
    setIsLoading(false);
    
      setName('');
      setDate('');
      setCompany('');
      setLink('');
      closeModal();
    showAddSuccess()
  };

  return (
    !isLoading && <AddReviewWrapper>
    <AddForm onSubmit={handleSubmit}>
      <AddLabel>Job vacancy
        <AddInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
      </AddLabel>

      <AddLabel>Company
        <AddInput
            type="text"
            name="company"
            value={company}
            onChange={handleChange}
            required
        />
      </AddLabel>

      <AddLabel>Link
        <AddInput
            type="text"
            name="link"
            value={link}
            onChange={handleChange}
            required
        />
      </AddLabel>

      <AddLabel>Date
        <AddInput
            type="text"
            name="number"
            value={date}
            onChange={handleChange}
            placeholder="00.00.0000"
            required
        />
      </AddLabel>
      <AddBtn type="submit" >Add contact</AddBtn>
    </AddForm>
    
  </AddReviewWrapper>
  )
}

export default AddReview 