import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/aba/logo-aba.png'

const block1 = {
    backgroundColor: 'violet',
    fontSize: '20px',
  };
const block2 = {
    backgroundColor: 'yellow',
    fontSize: '20px',
};


function OurHistory() {
    return (
      <Container>
        <Row>
          <Col><h2>Nuestra Historia</h2></Col>
        </Row>
        <Row>
          <Col xs={12} md={6} style={block1}>
          <img
                src={logo}
                width="100%"
                height="100%"
                className="d-inline-block align-top"
                alt="Aba logo"
              />
          </Col>
          <Col xs={12} md={6} style={block2}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum sem nec magna aliquet ultrices. Vestibulum vel arcu ut ipsum ornare scelerisque eu at dolor. Sed in tempor est. Etiam non risus vel nunc pulvinar blandit. Sed volutpat metus vel risus lacinia posuere. Nulla sit amet volutpat diam. Curabitur eleifend justo ac lobortis pretium. Vivamus neque tortor, egestas vel egestas et, sollicitudin ac ex.</p></Col>
        </Row>
      </Container>
    );
  }
  
  export default OurHistory;