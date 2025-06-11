import React from "react";
import "./Footer.css";
import ECFlogo from "../component/Image/ECFlogo.png";
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Nav,
  NavLink,
} from "react-bootstrap";
import Button from "react-bootstrap";

function Footer() {
  return (
    //Imported and utilized Bootstrap to rows and columns
    //fluid will stretch the component accross the screen
    //bg stands for background color
    <container fluid>
      <Row className="backgroundColor text-white p-4">
        <Col>
          <Stack>
            {/*Company logo*/}
            <Image
              src={ECFlogo}
              alt="company logo"
              rounded
              width={150}
              height={150}
            />
          </Stack>
        </Col>
        <Col>
          {/*Added contact sections*/}
          <h4>Contact us</h4>
          <p>Email: eternitychurch@gmx.com</p>
          <p>Phone: +1 310-844-6948 (Google voice)</p>
        </Col>
        <Col>
          <h4>Location</h4>
          <p>P.O. Box 40, Rhoadesville, VA 22542</p>
        </Col>
        <Col>
          {/*Created donation button*/}
          <a
            href="https://www.paypal.com/donate?token=cE8d4VHY8i2AYg7JOhtP4e11EuDeDkJ9cRyghJLtt_mUbmMeievM28iDObswQXXX-f-yxt_GX2Mi8fm0"
            class="btn btn-warning btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Donate
          </a>
        </Col>
      </Row>
    </container>
  );
}

export default Footer;
