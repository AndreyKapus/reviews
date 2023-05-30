import { useState } from "react";
import * as API from '../../Services/ContactsApi'

const AddReview = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [company, setCompany] = useState('');
  const [link, setLink] = useState('');

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
  }

  const handleSubmit = (e) => {
      e.preventDefault();
    //   onSubmit({userName, userNumber, company, link});
    API.addReview({name, date, company, link})
    //   setUserName('');
    //   setUserNumber('');
      // setCompany('');
      // setLink('');
    //   closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Job vacancy
          <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
          />
        </label>

        <label>Company
          <input
              type="text"
              name="company"
              value={company}
              onChange={handleChange}
              required
          />
        </label>

        <label>Link
          <input
              type="text"
              name="link"
              value={link}
              onChange={handleChange}
              required
          />
        </label>

        <label>Date
          <input
              type="tel"
              name="number"
              value={date}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  )
}

export default AddReview 