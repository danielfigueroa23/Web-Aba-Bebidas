import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/aba/logo-aba.png'


const styleFamilyProducts = {
    backgroundColor: 'violet',
    fontSize: '20px',
    textAlign: 'center'
  };
const block1 = {
    backgroundColor: 'red',
    fontSize: '20px',
};
const block2 = {
    backgroundColor: 'yellow',
    fontSize: '20px',
};
const block3 = {
    backgroundColor: 'green',
    fontSize: '20px',
};
  

function ProductFamily() {
  return (
    <Container style={styleFamilyProducts}>
      <Row>
        <Col><h2>Familia de Productos</h2></Col>
      </Row>
      <Row>
        <Col>Linea Premium</Col>   
        <hr/>
        <Col xs={12} md={4} style={block1}>
          <Row>
            <Col style={block2} xs={12}>
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Aba logo"
              />
            </Col>
            <Col style={block3} xs={12}>
              <span>Peregrino</span>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} style={block2}>
          <Row>
              <Col style={block2} xs={12}>
                <img
                  src={logo}
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                  alt="Aba logo"
                />
              </Col>
              <Col style={block3} xs={12}>
                <span>Atonito</span>
              </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} style={block3}>
          <Row>
              <Col style={block2} xs={12}>
                <img
                  src={logo}
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                  alt="Aba logo"
                />
              </Col>
              <Col style={block3} xs={12}>
                <span>País</span>
              </Col>
            </Row>
        </Col>
      </Row>
      <Row> 
        <hr/>
      </Row>
      <Row>
        <Col xs={4} style={block1}>
          <Row>
              <Col style={block2} xs={12}>
                <img
                  src={logo}
                  width="100"
                  height="100"
                  className="d-inline-block align-top"
                  alt="Aba logo"
                />
              </Col>
              <Col style={block3} xs={12}>
                <span>Marca</span>
              </Col>
            </Row>
        </Col>
        <Col xs={4} style={block2}>
          <Row>
            <Col style={block2} xs={12}>
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Aba logo"
              />
            </Col>
            <Col style={block3} xs={12}>
              <span>Marca</span>
            </Col>
          </Row>
        </Col>
        <Col xs={4} style={block3}>
          <Row>
            <Col style={block2} xs={12}>
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Aba logo"
              />
            </Col>
            <Col style={block3} xs={12}>
              <span>Marca</span>
            </Col>
          </Row>
        </Col>
        <Col xs={4} style={block1}>
          <Row>
            <Col style={block2} xs={12}>
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Aba logo"
              />
            </Col>
            <Col style={block3} xs={12}>
              <span>Marca</span>
            </Col>
          </Row>
        </Col>
        <Col xs={4} style={block2}>
          <Row>
            <Col style={block2} xs={12}>
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Aba logo"
              />
            </Col>
            <Col style={block3} xs={12}>
              <span>Marca</span>
            </Col>
          </Row>
        </Col>
        <Col xs={4} style={block3}>
          <Row>
            <Col style={block2} xs={12}>
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="Aba logo"
              />
            </Col>
            <Col style={block3} xs={12}>
              <span>Marca</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductFamily;