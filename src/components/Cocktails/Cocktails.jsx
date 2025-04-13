import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../assets/aba/logo-aba.png'

const cocktailsContainer = {
    backgroundColor: 'red',
    fontSize: '20px',
    textAlign: 'center',
    alignContent: 'center'
};


function Cocktails() {
    return (
      <Container style={cocktailsContainer} fluid>
        <Row>
          <Col><h2>Cocktails</h2></Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Cocktails;