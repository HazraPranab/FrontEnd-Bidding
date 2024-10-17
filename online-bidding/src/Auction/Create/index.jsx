import React, { useState } from 'react';
// Import the CSS file
import './create.css'; 
import { useLocation } from "react-router-dom";

function CreateBid() {
    const location = useLocation();
     const data = location.state;
     console.log(data)
    // React.useEffect(() => {
    //     if (route.params?.id) {
    //         console.log(route.params?.id)
    //       // Post updated, do something with `route.params.post`
    //       // For example, send the post to the server
    //     }
    //   }, [route.params?.id]);

    const initialRows = [
        {
          id: 1,
          title: 'Car',
          description: '4 Wheeler',
          minbid: 100000,
          enddate: new Date()
        },
        {
          id: 2,
          title: 'Bike',
          description: '2 Wheeler',
          minbid: 30000,
          enddate: new Date()
        }
      ];

  const obj= initialRows.filter(x=> x.id == data)[0]
  const [formData, setFormData] = useState({
    title: obj.title,
    description: obj.description,
    bid: obj.minbid,
    enddate: Date(),
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // if (formData.bid !== formData.enddate) {
    //   setErrorMessage('bids do not match!');
    //   setSuccessMessage('');
    // } else {
    //   setErrorMessage('');
    //   setSuccessMessage('Registration Successful!');
    // }
  };

  return (
    <div className="form-container">
      <h2>Create Auction</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="description"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bid">Bid</label>
          <input
            type="number"
            id="bid"
            name="bid"
            min={0}
            value={formData.bid}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="enddate">End Date</label>
          <input
            type="date"
            id="enddate"
            name="enddate"
            value={formData.enddate}
            onChange={handleChange}
            required
          />
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="submit-button">Create</button>
      </form>
    </div>
  );
}

export default CreateBid;