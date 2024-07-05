import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>Welcome to Products Page</h2>
      <Link to="/createProduct" className="create-button">
        + Create Product
      </Link>
      <div class="table-responsive">
        <table class="table table-striped table-hover table-borderless table-primary align-middle">
          <thead class="table-light">
            <caption className="cap-1">List of Products</caption>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr class="table-primary">
              <td scope="row">1</td>
              <td>Item</td>
              <td>Item</td>
              <td>$ 100</td>
              <td> Read | Edit | Delete</td>
            </tr>
            <tr class="table-primary">
              <td scope="row">2</td>
              <td>Item</td>
              <td>Item</td>
              <td>$ 120</td>
              <td> Read | Edit | Delete</td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default Products;
