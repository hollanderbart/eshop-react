/* eslint-disable no-console */
import React, { useState } from 'react';
import ContainerDimensions from 'react-container-dimensions';
import { Button, Col, Row, Carousel } from 'react-bootstrap';
import './styles.css';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (newIndex: number) => {
    setIndex(newIndex);
  };

  return (
    <>
      <Row>
        <ContainerDimensions>
          {({ width, height }) => (
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="img-obj-fit"
                  src={require('../../static/products/rapala1.jpg').default}
                  alt="First slide"
                  style={{ width }}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <Button variant="success" className="my-2">
                    Shop now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-obj-fit"
                  src={require('../../static/products/rapala2.jpg').default}
                  alt="Second slide"
                  style={{ width }}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Button variant="success" className="my-2">
                    Shop now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img-obj-fit"
                  src={require('../../static/products/rapala3.jpg').default}
                  alt="Third slide"
                  style={{ width }}
                />
                <div className="overlay"></div>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <Button variant="success" className="my-2">
                    Shop now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          )}
        </ContainerDimensions>
      </Row>

      <Row className="my-5">
        <Col xs={6} className="mx-auto">
          <blockquote className="blockquote text-center">
            <p className="mb-0">Best shop in town</p>
            <footer className="blockquote-footer">Someone famous</footer>
          </blockquote>
        </Col>
      </Row>
    </>
  );
};

export default Home;
