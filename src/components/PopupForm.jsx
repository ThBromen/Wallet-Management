import React, { useState } from "react";

const PopupForm = ({ onClose, onSubmit, type }) => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{type === "transaction" ? "Add Transaction" : "Add Category"}</h2>
        <form onSubmit={handleSubmit}>
          {type === "transaction" && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Transaction Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </>
          )}

          {type === "category" && (
            <input
              type="text"
              name="category"
              placeholder="Category Name"
              value={formData.category}
              onChange={handleChange}
              required
            />
          )}

          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
