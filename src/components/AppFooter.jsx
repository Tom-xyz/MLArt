import { Container, Divider } from "@mantine/core";
import React from "react";
import "./AppFooter.css";

const AppFooter = () => (
  <div className="footerDiv">
    <Container className="footer" size="md">
      <p>ML Service</p>
      <p>Copyright © 2022 Metis, Inc</p>
      <Divider my="sm" variant="dashed" />

      <p>Legal Stuff | Privacy Policy</p>
    </Container>
  </div>
);

export default AppFooter;
