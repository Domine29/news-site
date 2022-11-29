import React from "react";
import sections from "../assets/data/sections.json";
import Nav from "react-bootstrap/Nav";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

export default function AppNav(props) {
  

  return (
    <div>
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href={"/"}>Home</Nav.Link>
        </Nav.Item>
        {sections.map((section) => {
          return (
            <Nav.Item key={section.label}>
              <Nav.Link href={`/#/sections/${section.tag}`}>
                {section.label}
              </Nav.Link>
            </Nav.Item>
          );
        })}
        <Nav.Item>
          <InputGroup>
            <InputGroup.Text>Search</InputGroup.Text>
            <FormControl placeholder="by Title" onChange={props.handleSearch} />
          </InputGroup>
        </Nav.Item>
      </Nav>

      <nav></nav>
    </div>
  );
}
