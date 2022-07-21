import React, { Component } from 'react';
import {ListGroup,ListGroupItem } from 'reactstrap';
class CategoryList extends Component {

    state={
        categories:[
           
        ],
     
        
    };
    componentDidMount(){
        this.getCategories();
    }
   
    getCategories=()=>{
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(data=>this.setState({categories:data}) );
    }
 
    render() {
        return (
            <div>
                <h1>{this.props.title.title }</h1>
                
        <ListGroup>
            {
                this.state.categories.map(category=>(
                    <ListGroupItem onClick={()=>this.props.changeCategory(category)} key={category.id } > {category.categoryName } </ListGroupItem>
                    
                ))

            }               
             
         </ListGroup>
         <h4>{this.props.currenCategory } </h4>
         
            </div>
        );
    }
}

export default CategoryList;

