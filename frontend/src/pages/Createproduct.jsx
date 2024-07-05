import React from 'react';

const CreateProduct = () => {
  return (
    <div>
      <h2>Create New Product</h2>

      <div className="CreateProductForm">
        <form action="">
          <div className="formField">
            <label htmlFor="productName">Product Name : </label>
            <input type="text" name="productName" placeholder="Product Name?" />
          </div>

          <div className="formField">
            <label htmlFor="productQty">Product Qty : </label>
            <input
              type="text"
              name="productQty"
              placeholder="Product Quantity?"
            />
          </div>

          <div className="formField">
            <label htmlFor="productPrice">Product Price : </label>
            <input
              type="text"
              name="productPrice"
              placeholder="Product Price?"
            />
          </div>

          <div className="formField">
            <button className="saveBtn">Save Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
