import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselInicio() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-jICS-JNqZ-rz8m-vlIZjOHHAhXMl1qtSXme6JrdBj78ioK98pbmTnFv93uxTE18tTU&usqp=CAU'
          width="100%"
          height="500px"
          className="d-inline-block align-top"
          alt="Aba logo"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-jICS-JNqZ-rz8m-vlIZjOHHAhXMl1qtSXme6JrdBj78ioK98pbmTnFv93uxTE18tTU&usqp=CAU'
          width="100%"
          height="500px"
          className="d-inline-block align-top"
          alt="Aba logo"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-jICS-JNqZ-rz8m-vlIZjOHHAhXMl1qtSXme6JrdBj78ioK98pbmTnFv93uxTE18tTU&usqp=CAU'
          width="100%"
          height="500px"
          className="d-inline-block align-top"
          alt="Aba logo"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselInicio;