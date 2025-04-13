import './App.css';
import Navbar from "./components/Navbar/Navbar"
import CarouselInicio from './components/Carrosuel-Inicio/Carrousel-Inicio';
import ProductFamily from './components/ProductFamily/ProductFamily';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OurHistory from './components/OurHistory/OurHistory';
import Cocktails from './components/Cocktails/Cocktails';
import MainNews from './components/MainNews/MainNews';
import Footer from './components/Footer/Footer';



//PROVOSIORIO PARA MAQUETADO
const styleContainer = {
  backgroundColor: 'red',
  fontSize: '20px',
};

const styleCarrousel = {
  backgroundColor: 'green',
  fontSize: '20px',
};

const styleFamilyProducts = {
  backgroundColor: 'yellow',
  fontSize: '20px',
};

const styleHistory = {
  backgroundColor: 'red',
  fontSize: '20px',
};

const styleCocktails = {
  backgroundColor: 'green',
  fontSize: '20px',
};

const styleNews = {
  backgroundColor: 'violet',
  fontSize: '20px',
};


//


function App() {
  return (
    <>
      <Navbar/>
      <Container style={styleContainer}>
        <Row style={styleCarrousel}>
          <Col><CarouselInicio/></Col>
        </Row>
        <Row style={styleFamilyProducts}>
          <Col><ProductFamily/></Col>
        </Row>
        <Row style={styleHistory}>
          <Col><OurHistory/></Col>
        </Row>
        <Row style={styleCocktails}>
          <Col><Cocktails/></Col>
        </Row>
        <Row style={styleNews}>
          <Col><MainNews/></Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
