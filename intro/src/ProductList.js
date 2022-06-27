import React, { Component } from 'react';

class productList extends Component {
  
    render() {
        return (
            <div>
                <h2></h2>{this.props.info.title}
            </div>
        );
    }
}

export default productList;