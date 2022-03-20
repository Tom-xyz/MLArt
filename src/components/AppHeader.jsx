import {
  Burger,
  Header,
  Text,
  MediaQuery,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import PropTypes from "prop-types";

function AppHeader(props) {
  const theme = useMantineTheme();

  return (
    <Header height={70} p="md">
      {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </Header>
  );
}

AppHeader.propTypes = {
  opened: PropTypes.func,
  setOpened: PropTypes.func,
};

export default AppHeader;
