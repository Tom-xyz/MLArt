import { Navbar as MtNavbar } from "@mantine/core";
import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <MtNavbar width={{ base: 300 }} height={500} p="xs">
        <h3>NAVBAR</h3>
      </MtNavbar>
    );
  }
}

export default Navbar;
