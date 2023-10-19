import React, { useState } from 'react';
import './App.css';


function App() {
  const [form1Name, setForm1Name] = useState('');
  const [form1Description, setForm1Description] = useState('');

  const [form2Name, setForm2Name] = useState('');
  const [form2Description, setForm2Description] = useState('');
  const [form2Category, setForm2Category] = useState('');
  const [form2Quantity, setForm2Quantity] = useState('');
  const [form2Price, setForm2Price] = useState('');

  const handleForm1Submit = () => {
    alert(`New Shop\n\nName: ${form1Name}\nDescription: ${form1Description}`);
  };

  const handleForm1Cancel = () => {
    setForm1Name('');
    setForm1Description('');
  };

  const handleForm2Submit = () => {
    alert(`New Product\n\nName: ${form2Name}\nDescription: ${form2Description}\nCategory: ${form2Category}\nQuantity: ${form2Quantity}\nPrice: ${form2Price}`);
  };

  const handleForm2Cancel = () => {
    setForm2Name('');
    setForm2Category('');
    setForm2Quantity('');
    setForm2Price('');
  };

  return (
    <div>
      <div className="form-container form1-container">
        <form>
          <h2>New Shop</h2>
          <label htmlFor="form1Name">Name:</label>
          <input
            type="text"
            id="form1Name"
            name="form1Name"
            value={form1Name}
            onChange={(e) => setForm1Name(e.target.value)}
            required
          />
          <label htmlFor="form1Description">Description:</label>
          <textarea
            id="form1Description"
            name="form1Description"
            value={form1Description}
            onChange={(e) => setForm1Description(e.target.value)}
            rows="4"
            required
          />
          <div className="button-container">
            <button type="button" onClick={handleForm1Submit}>
              Submit
            </button>
            <button type="button" onClick={handleForm1Cancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="form-container form2-container">
        <form>
          <h2>New Product</h2>
          <label htmlFor="form2Name">Name:</label>
          <input
            type="text"
            id="form2Name"
            name="form2Name"
            value={form2Name}
            onChange={(e) => setForm2Name(e.target.value)}
            required
          />
          <label htmlFor="form2Description">Description:</label>
          <textarea
            id="form2Description"
            name="form2Description"
            value={form2Description}
            onChange={(e) => setForm2Description(e.target.value)}
            rows="4"
            required
          />
          <label htmlFor="form2Category">Category:</label>
          <input
            type="text"
            id="form2Category"
            name="form2Category"
            value={form2Category}
            onChange={(e) => setForm2Category(e.target.value)}
            required
          />
          <label htmlFor="form2Quantity">Quantity:</label>
          <input
            type="text"
            id="form2Quantity"
            name="form2Quantity"
            value={form2Quantity}
            onChange={(e) => setForm2Quantity(e.target.value)}
            required
          />
          <label htmlFor="form2Price">Price:</label>
          <input
            type="text"
            id="form2Price"
            name="form2Price"
            value={form2Price}
            onChange={(e) => setForm2Price(e.target.value)}
            required
          />
          <div className="button-container">
            <button type="button" onClick={handleForm2Submit}>
              Submit
            </button>
            <button type="button" onClick={handleForm2Cancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
