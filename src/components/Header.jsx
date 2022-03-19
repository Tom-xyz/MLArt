import { Header as MtHeader } from "@mantine/core";
import React from "react";

class Header extends React.Component {
  render() {
    return (
    <MtHeader height={60} p="xs">
        ML Art
    </MtHeader>
    );
  }
}

export default Header;
