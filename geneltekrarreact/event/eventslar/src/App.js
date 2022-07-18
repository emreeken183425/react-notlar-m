import { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import CategoryList from './components/CategoryList';
import Navi from "./components/Navi";
import ProductList from './components/ProductList';

export default class App extends Component{

  render(){
    return(

      <div >
      <h1>STATESLER</h1>
     <Container>      
        <Row>
        <Navi/>      
        </Row>
        <Row>
        <Col sm="8" >
       <CategoryList/>        
       </Col>
       <Col sm="4">
       <ProductList/>
       </Col>
        </Row>   
     </Container>
    </div>
  );
}
}
    




  


