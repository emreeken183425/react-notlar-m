
import './App.css';
import CategoryList from './components/CategoryList';
import Navi from './components/Navi';
import ProductList from './components/ProductList';
import{Container,Row,Col } from 'reactstrap';
import { Component } from 'react';

export default class App extends Component{
  state={
    currenCategory:"",
  
  }
  changeCategory=category=>{
    this.setState({currenCategory:category.categoryName })
}

  render(){
    let titleCategory={title:"category list" }
    let titleProduct={title:"ProductList"}
    return (
      <div>
        <Container>
          <Row>
            <Navi/>        
          </Row>
          <Row>        
        <Col xs="6" lg="6" >
        <CategoryList currenCategory={this.state.currenCategory} changeCategory={this.changeCategory}  title={titleCategory} />      
        </Col>
        <Col xs="6" lg="6" >      
        <ProductList  currenCategory={this.state.currenCategory} title={titleProduct} />
        </Col>
          </Row>
        </Container>
     
     
   
      </div>
    );
  }

}

{/*let titleProduct="Product listesi"
let titleCategory="category listesi" bu şekilde de olur ama uzun yol
 props:bir componentten diğerine veri taşıma demek
state ise bir componente ait özellik demek ve biz bu özelliğin diğer componentlere gitmesini istemiyorsak state kullanılıyoruz.*/}

