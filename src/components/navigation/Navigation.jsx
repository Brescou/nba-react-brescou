import { Avatar, Col, Input, Row, Text } from "@nextui-org/react";
import React from "react";
import { Nav } from "react-bootstrap";
import { LogoBall } from "../../assets/svg/LogoBall";
import { SearchIcon } from "../../assets/svg/SearchIcon";
import "./navigation.scss";

export const Navigation = () => {
  return (
    <>
      <Row className="nav-header">
        <Row>
          <Col className="nav-brand">
            <Avatar icon={<LogoBall />} className="logo-header" />
            <Text className="nav-brand-title" css={{ color: "$primaryLight" }}>
              NBA Stats Beta
            </Text>
          </Col>
          <Col>
            <Row>
              <Nav.Link className="nav-link-item" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link-item" href="/">
                Players
              </Nav.Link>
              <Nav.Link className="nav-link-item" href="/">
                Teams
              </Nav.Link>
            </Row>
          </Col>
          <Col>
            <Input
              clearable
              animated
              contentRightStyling={false}
              placeholder="Search"
              contentRight={<SearchIcon />}
            />
          </Col>
        </Row>
      </Row>
    </>
  );
};
