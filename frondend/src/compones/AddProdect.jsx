import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import './add.css'

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [productPrice, setProductPrice] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const history = useHistory();

  const Addproduct = async () => {
    // Create a new FormData object to store the form fields
    let formField = new FormData();

    // Append the form fields to the FormData object
    formField.append('name', name);
    formField.append('productPrice', productPrice);
    formField.append('description', description);
    formField.append('category', category);
    
    // Check if an image is selected and append it to the FormData object
    if (image !== null) {
      formField.append('image', image);
    }

    try {
      const response = await axios.get('http://localhost:8000/api/products/', formField);
      
      console.log(response.data);
      history.push('/');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <div className="container">
        <div className="form-group1">
          <div className="from-contol">
            <div className="from-group">
              <label htmlFor="">Select Image to Upload</label>
              <input
                type="file"
                className="from-control from-control-lg"
                name="Image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <div className="from-group">
              <input
                type="text"
                className="from-control from-control-lg"
                placeholder="Enter Product Name"
                name="ProductName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="from-group">
              <input
                type="text"
                className="from-control from-control-lg"
                placeholder="Enter Product Price"
                name="Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div className="from-group">
              <textarea
                type="text"
                className="from-control from-control-lg"
                placeholder="Enter Product Description"
                name="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="from-group">
              <input
                type="text"
                className="from-control from-control-lg"
                placeholder="Enter Product Category"
                name="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <button className="btn" onClick={Addproduct}>Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
