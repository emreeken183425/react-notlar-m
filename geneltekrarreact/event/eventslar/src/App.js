import { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import CategoryList from './components/CategoryList';
import Navi from "./components/Navi";
import ProductList from './components/ProductList';

export default class App extends Component{

  state={currentCategory:""}

  changeCagetory=category=>{
    this.setState({currentCategory:category.CategoryName})
};

  render(){
  let  productInfo={title:"productList"}
  let categoryInfo={title:"Categorylist"}
 
    return(
      <div >
      <h1>STATESLER</h1>
     <Container>      
        <Row>
        <Navi/>      
        </Row>
        <Row>
        <Col sm="8" >
       <CategoryList currentCategory={this.state.currentCategory } changeCagetory={this.changeCagetory } info={categoryInfo} />        
       </Col>
       <Col sm="4">
       <ProductList info={productInfo} currentCategory={this.state.currentCategory }/>
       </Col>
        </Row>   
     </Container>
    </div>
  );
}
}
    




  


