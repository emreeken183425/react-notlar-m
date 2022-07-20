
import './App.css';
import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList';
import{Container,Row,Col } from 'reactstrap';

function App() {
  let titleCategory={title:"category list" }
  let titleProduct={title:"ProductList",}
  
  return (
    <div>
      <Container>
        <Row>
          <Navi/>        
        </Row>
        <Row>        
      <Col xs="9" lg="6" >
      <CategoryList title={titleCategory} />      
      </Col>
      <Col xs="3" lg="6" >      
      <ProductList title={titleProduct} />
      </Col>
        </Row>
      </Container>
   
   
 
    </div>
  );
}

{/*let titleProduct="Product listesi"
let titleCategory="category listesi" bu şekilde de olur ama uzun yol
 props:bir componentten diğerine veri taşıma demek
state ise bir componente ait özellik demek ve biz bu özelliğin diğer componentlere gitmesini istemiyorsak state kullanılıyoruz.*/}

export default App;
