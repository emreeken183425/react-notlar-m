import React, { Component } from 'react';
import {Table } from 'reactstrap';

class ProductList extends Component {
    componentDidMount(){
        this.getproducts();
    }
 
    render() {
        return (
            <div>
                <h1>product-{this.props.currentCategory}  </h1>
                
                <Table
>
  <thead>
    <tr>
      <th># </th>
      <th>First Name</th>
      <th>Last Name </th>
      <th> Username </th>
    </tr>
  </thead>
  <tbody>
  {this.props.products.map(product=>(
                    <tr  key={product.id } >
                    <th scope="row">{product.id} </th>
                    <td> {product.productName} </td>
                    <td> {product.productName} </td>
                    <td> {product.productName} </td>
                  </tr>  ) )
    }
    
    
  </tbody>
</Table>
            </div>
        );
    }
}

export default ProductList;