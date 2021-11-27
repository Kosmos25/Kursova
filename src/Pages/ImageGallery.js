import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import image1 from "../assets/viti.jpg";
import image2 from "../assets/viti1.jpg";
import image3 from "../assets/viti2.jpg";
import image4 from "../assets/viti3.jpg";
import image5 from "../assets/viti4.jpg";
import image6 from "../assets/viti5.jpg";

export function ImageGallery(){
  return (
    <Container className = 'mt-4'>
      <Row>
        <Col>
          <Image
            className="m-2"
            src={image1}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image2}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image3}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image4}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image5}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
        <Col>
          <Image
            className="m-2"
            src={image6}
            style={{ width: "500px", height: "350px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
