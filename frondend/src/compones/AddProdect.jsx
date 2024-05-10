import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // Fixed import statement
import './add.css';

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productPrice, setProductPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const history = useHistory();

  const addProductInfo = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    let formField = new FormData();
    formField.append('name', name);
    formField.append('productPrice', productPrice);
    formField.append('description', description);
    formField.append('category', category);
    if (image !== null) {
      formField.append('image', image);
    }
    if (quantity !== "") {
      formField.append('quantity', quantity);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/products/', formField);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Product added successfully:', responseData);
      history.push('/'); // Redirect to homepage after successful submission
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <div className="container">
        <div className="form-group1">
          <form className="from-control">
            <div className="from-group">
              <label htmlFor="">Select Image to Upload</label>
              <input
                type="file"
                className="from-control from-control-lg"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="from-group">
              <input
                type="text"
                className="from-control from-control-lg"
                placeholder="Enter Product Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="from-group">
              <input
                type="text"
                className="from-control from-control-lg"
                placeholder="Enter Product Price"
                name="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div className="from-group">
              <textarea
                type="text"
                className="from-control from-control-lg"
                placeholder="Enter Product Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="from-group">
              <input
                type="text"
                className="from-control from-control-lg"
                placeholder="Enter Product Category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="from-group">
              <input
                type="text"
                className="from-control from-control-lg"
                placeholder="Enter Product Quantity"
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <button type="submit" onClick={addProductInfo} className="btn">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
