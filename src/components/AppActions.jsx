import { SpotlightProvider } from "@mantine/spotlight";
import { useSpotlight } from "@mantine/spotlight";
import { Home, Dashboard, FileText, Search } from "tabler-icons-react";
import React from "react";
import { Button, Group } from "@mantine/core";

function UserActions() {
  const spotlight = useSpotlight();
  let darkMode = false;

  return (
    <Group position="center" style={{width: "10px"}}>
      <Button size="md" onClick={spotlight.openSpotlight}>
        Actions
      </Button>
      <Button size="md">Dark Mode</Button>
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

function AppActions() {
  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<Search size={18} />}
      searchPlaceholder="Search..."
      shortcut="ctrl + 1"
      nothingFoundMessage="Nothing found..."
    >
      <Group position="center" spacing="md">
        <UserActions />
      </Group>
    </SpotlightProvider>
  );
}

export default AppActions;
