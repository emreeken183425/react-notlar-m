import React, { Component } from 'react';
import {ListGroup,ListGroupItem } from 'reactstrap';
class CategoryList extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title.title }</h1>
                <h1>{this.props.title.başka }</h1>
        <ListGroup>
             <ListGroupItem> Cras justo odio </ListGroupItem>
             <ListGroupItem> Dapibus ac facilisis in </ListGroupItem>
             <ListGroupItem>Morbi leo risus</ListGroupItem>
             <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
             <ListGroupItem>Vestibulum at eros</ListGroupItem>
         </ListGroup>
            </div>
        );
    }
}

export default CategoryList;

