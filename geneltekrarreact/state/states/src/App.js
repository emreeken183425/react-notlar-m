
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Col, Row } from 'reactstrap';

function App() {
  return (
    <div >
      <h1>STATESLER</h1>
      <Navi/>
      <Row>
      <Col>
      <CategoryList col="3" />
      <ProductList col="9" />
      </Col>
      </Row>
    </div>
  );
}

export default App;
