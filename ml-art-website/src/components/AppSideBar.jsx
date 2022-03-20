import { MediaQuery, Navbar, useMantineTheme } from "@mantine/core";
import React from "react";
import PropTypes from "prop-types";

import AppLogo from "./AppLogo";
import AppActions from "./AppActions";
import { useState } from "react";
import { Burger } from "@mantine/core";

function AppSideBar(props) {
  const theme = useMantineTheme();

  return (
    <Navbar
      width={{ base: "15vmax" }}
      p="xs"
      hiddenBreakpoint="sm"
      hidden={!props.opened}
    >
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        {/* <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery> */}
        <AppLogo />
        <AppActions />
      </div>
    </Navbar>
  );
}

AppSideBar.propTypes = {
  opened: PropTypes.bool,
  setOpened: PropTypes.func,
};

export default AppSideBar;
