import { Col, Container } from 'reactstrap';
import './App.css';
import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList'
import{Row} from 'reactstrap';

function App() {
  return (
    <div>
  
   <Container>
   <Row>
        <Navi></Navi>
    </Row>
    <Row>
       <Col xs="6" >
       <CategoryList title="Category list" />
       </Col>
       <Col xs="6" >
       <ProductList title="Product list" />
       </Col>
    </Row>
   </Container>
   
 
    </div>
  );
}

export default App;
