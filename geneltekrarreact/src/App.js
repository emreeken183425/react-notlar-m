import { Col, Container } from 'reactstrap';
import './App.css';
import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList'
import{Row} from 'reactstrap';

function App() {

  let productInfo={title:"ProductList "}
  let Categoryınfo={title:"Category list"}
  return (
    <div>
  
   <Container>
   <Row>
        <Navi></Navi>
    </Row>
    <Row>
       <Col xs="6" >   
       {/* title="Category list" buşekilde yada
         değişken ile title={titleCategory} */}   
       <CategoryList info={Categoryınfo} />
       </Col>
       <Col xs="6" >
       <ProductList info={productInfo}/>
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
