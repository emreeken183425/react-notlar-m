import React, { Component } from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';
class CategoryList extends Component {
    
        state={
            categories:[
                {categoryID:1,categoryName:"Beverages"},
                {categoryID:2,categoryName:"Condimentes"}
            ],
           currentCategory:""

         } 
    
    render() {
        return (
            <div>
                <h3>{this.props.info.title} </h3>
                <ListGroup>
                {this.state.categories.map(category=>(
                     <ListGroupItem onClick={()=> this.setState({currentCategory:"eken"}) } key={category.categoryID} >{category.categoryName} </ListGroupItem>
                
                )) }  
                </ListGroup>
                <h4>{this.state.currentCategory } </h4>
            </div>
        );
    } 
}

export default CategoryList;