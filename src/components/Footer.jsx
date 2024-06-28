import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#221f1f", color: "#f5f5f1" }}>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Row>
              {/* <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col> */}
            </Row>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 pt-3">
              <Col className="footer-links">
                <p><a href="#">Audio and Subtitles</a></p>
                <p><a href="#">Media Center</a></p>
                <p><a href="#">Privacy</a></p>
                <p><a href="#">Contact us</a></p>
              </Col>
              <Col className="footer-links">
                <p><a href="#">Audio Description</a></p>
                <p><a href="#">Investor Relations</a></p>
                <p><a href="#">Legal Notices</a></p>
              </Col>
              <Col className="footer-links">
                <p><a href="#">Help Center</a></p>
                <p><a href="#">Jobs</a></p>
                <p><a href="#">Cookie Preferences</a></p>
              </Col>
              <Col className="footer-links">
                <p><a href="#">Gift Cards</a></p>
                <p><a href="#">Terms of Use</a></p>
                <p><a href="#">Corporate Information</a></p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button variant="outline-secondary" className="btn-sm footer-button rounded-0 mt-3">Service Code</Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
