import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';

class CategoryList extends Component {
    render() {
        return (
            <div>
              <ListGroup>
                <ListGroupItem>emre eken çalışması</ListGroupItem>
                <ListGroupItem>emre eken çalışması</ListGroupItem>
                <ListGroupItem>emre eken çalışması</ListGroupItem>
                <ListGroupItem>emre eken çalışması</ListGroupItem>
              </ListGroup>
            </div>
        );
    }
}

export default CategoryList;