import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title.title} </h1>
                <h1>{this.props.title.eken} </h1>
            </div>
        );
    }
}

export default ProductList;