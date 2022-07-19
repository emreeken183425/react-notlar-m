import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'reactstrap';

class CategoryList extends Component {
    
state={
    categories:[
        {categoryId:1,CategoryName:"emre" },
        {categoryId:2,CategoryName:"eken"},
        {categoryId:3,CategoryName:"Erzurum"}
    ],
    currentCategory:""
};
componentDidMount(){
    this.getCategories();
}
getCategories=()=>{
    fetch('http://localhost:3000/categories').then(response=>response.json())
    .then(date=>this.setState({categories:date}));
  }
    
    render() {
        return (
            <div>
              <ListGroup>
                <h1>Categorylist</h1>
                {this.state.categories.map(category=>(
                    <ListGroupItem onClick={()=>this.props.changeCagetory(category)} key={category.categoryId } >{category.CategoryName } </ListGroupItem>
                ) ) }
              </ListGroup>
              {/* <h4>{this.props.currentCategory} </h4> */}
            </div>
        );
    }
}

export default CategoryList;