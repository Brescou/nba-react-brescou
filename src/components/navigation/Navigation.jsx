import { Avatar, Col, Row, Text } from "@nextui-org/react";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LogoBall } from "../../assets/svg/LogoBall";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark" className="nav-header">
        <Row>
          <Col className="nav-brand">
            <Avatar icon={<LogoBall />} className="logo-header"/>
            <Text className="nav-brand-title" css={{ color: "$primaryLight" }}>
              NBA Stats Beta
            </Text>
          </Col>
          <Col>
            <Nav className="nav-link">
              <Nav.Link className="nav-link-item" href="/">Home</Nav.Link>
              <Nav.Link className="nav-link-item" href="/">Players</Nav.Link>
              <Nav.Link className="nav-link-item" href="/">Teams</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </>
  );
};
