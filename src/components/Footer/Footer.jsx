import { Col, Container, Nav, NavLink, Row, Stack } from "react-bootstrap";
import logo from '../../assets/aba/logo-aba.png'


const block1 = {
    backgroundColor: 'violet',
    alignItems: 'center'
};

const block2 = {
    backgroundColor: 'red',
};

const block3 = {
    backgroundColor: 'yellow',
};

const block4 = {
    backgroundColor: 'green',
};

const mainContainer = {
    textAlign: 'center',
    alignItems: 'center'
}

function Footer() {
    return (
        <footer>
            <Container fluid style={mainContainer}>
                <Row className="bg-primary text-white p-4">
                    <Col style={block1} xs={12} md={3}>
                        <Stack style={block1}>
                        <img
                            src={logo}
                            width="100"
                            height="100"
                            alt="Aba logo"
                        />
                        <h2>Aba Bebidas</h2>
                        {/* <p>Lema Empresa</p> */}
                        </Stack>
                    </Col>
                    <Col style={block2} xs={12} md={3}>
                        <Nav className="flex-column fs-5">
                            <NavLink href="#" className="text-white">Inicio</NavLink>
                            <NavLink href="#" className="text-white">Nuestra Historia</NavLink>
                            <NavLink href="#" className="text-white">Productos</NavLink>
                        </Nav>
                    </Col>
                    <Col style={block3} xs={12} md={3}>
                        <h4>Contacto</h4>
                        <p>emial@email.com</p>
                        <p>Tel: 11111111111</p>
                    </Col>
                    <Col style={block4} xs={12} md={3}>
                        <h4>Redes</h4>
                        <p>Facebook</p>
                        <p>Instagram</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;