import React, { useState } from 'react';
import '../Payment-Page/Payment.css'; // Import your CSS styles for PaymentPage
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();
  const handlesubmit = () => {
    alert("Your Payment has been submitted");
    navigate("/Home");
  }
  return (
    <>
    <div className='body'>
    <div className="payment-container">
      <h1 style={{textAlign: "center"}}>Payment Details</h1>
      <form className="payment-form">
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="3"
            required
          />
        </div>
        <div className="form-group">
          <label>Name on Card</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <button type="submit" onClick={handlesubmit}>Pay Now</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default PaymentPage;
