import React, { Component } from 'react';
import {ListGroup,ListGroupItem } from 'reactstrap';
class CategoryList extends Component {

    state={
        categories:[
            {categoryId:1,categoryName:"bevereges"},
            {categoryId:2,categoryName:"Condimentes"}
        ],
        currenCategory:""
    };
    changeCategory=category=>{
        this.setState({currenCategory:category.categoryName })
    }

    render() {
        return (
            <div>
                <h1>{this.props.title.title }</h1>
                <h1>{this.props.title.başka }</h1>
        <ListGroup>
            {
                this.state.categories.map(category=>(
                    <ListGroupItem onClick={()=>this.changeCategory(category) } key={category.categoryId } > {category.categoryName }</ListGroupItem>
                    
                ))

            }               
             
         </ListGroup>
         <h4>{this.state.currenCategory } </h4>
            </div>
        );
    }
}

export default CategoryList;

