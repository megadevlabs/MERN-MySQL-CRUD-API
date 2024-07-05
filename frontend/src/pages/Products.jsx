import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/')
      .then(res => setData(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Welcome to Products Page</h2>
      <Link to="/createProduct" className="create-button">
        + Create Product
      </Link>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-borderless table-primary align-middle">
          <thead className="table-light">
            <caption className="cap-1">List of Products</caption>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((products, index) => {
              return (
                <tr className="table-primary" key={index}>
                  <td scope="row">{products.id}</td>
                  <td>{products.productName}</td>
                  <td>{products.productQty}</td>
                  <td>$ {products.productPrice}</td>
                  <td> Read | Edit | Delete</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

export default Products;
