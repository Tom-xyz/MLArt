import React from "react";

import AppNavbar from "./components/AppSideBar";
import "./App.css";

import { MantineProvider } from "@mantine/core";

import { AppShell } from "@mantine/core";
import AppHeader from "./components/AppHeader";
import LandingBody from "./components/LandingBody";

function App() {
  return (
    <MantineProvider >
      <div className="App">
        <AppShell
          padding="md"
          header={<AppHeader />}
          navbar={<AppNavbar />}
          styles={(theme) => ({
          })}
        >
          <LandingBody />
        </AppShell>
      </div>
    </MantineProvider>
  );
}

export default App;
