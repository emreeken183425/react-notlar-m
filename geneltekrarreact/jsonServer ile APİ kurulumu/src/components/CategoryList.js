import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';

class CategoryList extends Component {
    
state={
    categoriyes:[
        {categoryId:1,CategoryName:"emre" },
        {categoryId:2,CategoryName:"eken"}
    ]
};
    
    render() {
        return (
            <div>
              <ListGroup>
                {this.state.categoriyes.map(category=>(
                    <ListGroupItem key={category.categoryId } >{category.CategoryName } </ListGroupItem>
                ) ) }
               
                
              </ListGroup>
            </div>
        );
    }
}

export default CategoryList;