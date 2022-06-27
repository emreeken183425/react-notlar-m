
import React from "react";
import Navi from "./Navi";
import CategoriList from "./CategoriList";
import ProductList from "./ProductList";
import {Container,Row,Col} from "reactstrap"

function App() {
  let productInfo ={title:'productlist'}
  let categoryInfo ={title:'cagegory listesi'}
  return (
    
      <Container>
        <Row>
        <Navi/>
        </Row>
        <Row>
        <Col sm="6" lg="4"  >
        <CategoriList info={categoryInfo} />
        
        </Col>
        <Col sm="6" lg="8" >
      
        <ProductList info={productInfo}  />
        </Col>
        </Row>
      </Container>
     
   
      

    
  );
}

export default App;
