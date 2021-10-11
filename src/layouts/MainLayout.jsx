import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../components/Menu";

const MainLayout = ({ children }) => {
  return (
    <>
      <Menu />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
