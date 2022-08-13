import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as categoryActions from "../../redux/actions/categoryActions"
import {ListGroup,ListGroupItem} from "reactstrap"
class CategoryList extends Component {
    componentDidMount(){
this.props.actions.getCategories()
    }
    render() {
        return (
            <div>
                <h1>Category List</h1>
                <ListGroup>
                    {this.props.categories.map(category=>(
                            <ListGroupItem key={category.id} >
                                 {category.categoryName}
                            </ListGroupItem>
                        ))
                    }
              
                </ListGroup>
                <h2>seçili kategori:{this.props.currentCategory.categoryName} </h2>
                <h3>api: {this.props.categories.length} </h3>
                
            
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        currentCategory:state.changeCategoryReducer,
        categories:state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            getCategories:bindActionCreators(categoryActions.getCategories,dispatch)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);