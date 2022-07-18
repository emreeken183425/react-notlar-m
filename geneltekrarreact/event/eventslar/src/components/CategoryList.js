import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';

class CategoryList extends Component {
    
state={
    categoriyes:[
        {categoryId:1,CategoryName:"emre" },
        {categoryId:2,CategoryName:"eken"}
    ],
    currentCategory:""
};

    
    render() {
        return (
            <div>
              <ListGroup>
                <h1>Categorylist</h1>
                {this.state.categoriyes.map(category=>(
                    <ListGroupItem onClick={()=>this.props.changeCagetory(category)} key={category.categoryId } >{category.CategoryName } </ListGroupItem>
                ) ) }
              </ListGroup>
              <h4>{this.props.currentCategory} </h4>
            </div>
        );
    }
}

export default CategoryList;