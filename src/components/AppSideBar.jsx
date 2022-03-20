import { Navbar } from "@mantine/core";
import React from "react";

import AppLogo from "./AppLogo";
import AppActions from "./AppActions";

class AppSideBar extends React.Component {
  render() {
    return (
      <Navbar width={{ base: 200 }} p="xs">
        <AppLogo/>
        <AppActions/>
      </Navbar>
    );
  }
}

export default AppSideBar;
