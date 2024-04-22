import React, { useState } from 'react';
import {
  Card,
  Typography,
} from "@material-tailwind/react";

const MedicineAddForm = () => {
  const [medicineName, setMedicineName] = useState('');
  const [medicineType, setMedicineType] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddToCart = () => {
    // Implement adding medicine to cart logic here
    console.log('Added to cart:', { medicineName, medicineType, expiryDate, quantity });
  };

  const handleFormReset = () => {
    // Reset form fields here
    setMedicineName('');
    setMedicineType('');
    setExpiryDate('');
    setQuantity('');
  };

  const handleExpiryDateChange = (e) => {
    const selectedDate = e.target.value;
    const currentDate = new Date();
    const selectedDateObj = new Date(selectedDate);

    // Check if selected date is not in the past
    if (selectedDateObj < currentDate) {
      // Display an error message or prevent further action
      alert("Expiry date cannot be in the past");
      // Clear the input field
      setExpiryDate('');
      return;
    }

    // If validation passes, set the expiry date
    setExpiryDate(selectedDate);
  };

  return (
    <div className="h-screen grid place-items-center bg-gray-50">
      <Card color="transparent" shadow={true} className="p-7 bg-white">
        <Typography variant="h4" color="blue-gray">
          Add Medicine
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details for the medicine.
        </Typography>
        <br />

        <form className="mb-4 w-[500px] grid grid-cols-2 gap-6">
          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Medicine Name
            </Typography>
            <br />
            <input 
              type="text" 
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter Medicine Name" 
            />
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Medicine Type
            </Typography>
            <br />
            <select 
              value={medicineType}
              onChange={(e) => setMedicineType(e.target.value)}
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select Medicine Type</option>
              <option value="1">Type 1</option>
              <option value="2">Type 2</option>
              <option value="3">Type 3</option>
            </select>
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Expiry Date
            </Typography>
            <br />
            <input 
              type="date" 
              value={expiryDate}
              onChange={handleExpiryDateChange}
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Quantity
            </Typography>
            <br />
            <input 
              type="text" 
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter Quantity" 
            />
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Unit Price
            </Typography>
            <br />
            <input 
              type="text" 
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter Unit Price" 
            />
          </div>

          <div className="col-span-2">
            <button 
              type="button" 
              onClick={handleAddToCart}
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700"
            >
              Add to Cart
            </button>

            <button 
              type="button" 
              onClick={handleFormReset}
              className="ml-2 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default MedicineAddForm;
