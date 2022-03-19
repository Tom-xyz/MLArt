import { Navbar } from "@mantine/core";
import React from "react";

import { Button, Group } from "@mantine/core";
import { SpotlightProvider, useSpotlight } from "@mantine/spotlight";
import { Home, Dashboard, FileText, Search } from 'tabler-icons-react';

function SpotlightControl() {
  const spotlight = useSpotlight();
  return (
    <Group position="center">
      <Button onClick={spotlight.openSpotlight}>Actions</Button>
    </Group>
  );
}

const actions = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <Home size={18} />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <Dashboard size={18} />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <FileText size={18} />,
  },
];

class AppSideBar extends React.Component {
  render() {
    return (
      <Navbar width={{ base: 100 }} p="xs">
        <p>
          Navbar
        </p>

        <SpotlightProvider
          actions={actions}
          searchIcon={<Search size={18} />}
          searchPlaceholder="Search..."
          shortcut="ctrl + 1"
          nothingFoundMessage="Nothing found..."
        >
          <SpotlightControl />
        </SpotlightProvider>
      </Navbar>
    );
  }
}

export default AppSideBar;
