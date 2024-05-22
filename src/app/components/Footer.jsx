"use client";
import React from "react";
import { NavLink } from "react-bootstrap/NavLink";
import { NavItem } from "react-bootstrap/NavItem";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <div className="w-full flex justify-center mt-6 pb-3">
      <Nav
        className="gap-x-24"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link className="link-color" eventKey="GitHub" href="/home">
            GitHub
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="link-color" eventKey="LinkedIn">
            LinkedIn
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
