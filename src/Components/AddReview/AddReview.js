import { useState } from "react";
import * as API from '../../Services/ContactsApi'

const AddReview = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [company, setCompany] = useState('');
  const [link, setLink] = useState('');

  // const dateRegexp = /^\d{2}.\d{2}.\d{4}$/;


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
    API.addReview({name, date, company, link})
      setName('');
      setDate('');
      setCompany('');
      setLink('');
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
              type="text"
              name="number"
              value={date}
              onChange={handleChange}
              placeholder="00.00.0000"
              // pattern={dateRegexp}
              required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  )
}

export default AddReview 