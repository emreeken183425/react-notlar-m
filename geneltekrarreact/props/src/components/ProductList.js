import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';

class ProductList extends Component {
    state={
        properties:[
            {propertyId:1,propertyName:"güzellik" },
            {propertyId:2,propertyName:"geçicidir" }
        ]
    }
  
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    <ListGroupItem>
                    {this.state.properties.map(property=>(
                    <ListGroupItem key={property.propertyId} >{property.propertyName} </ListGroupItem>
                ) ) }

                    </ListGroupItem>
                </ListGroup>
                
            </div>
        );
    }
}

export default ProductList;