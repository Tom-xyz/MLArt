import React from "react";

import logo from "./logo.svg";

import Navbar from "./components/Navbar";
import "./App.css";

import { MantineProvider } from "@mantine/core";

import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <MantineProvider theme={{ colorScheme: "dark" }} withGlobalStyles>
      <div className="App">
        <AppShell
          padding="md"
          header={<Header />}
          navbar={<Navbar />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Body />
        </AppShell>
      </div>
    </MantineProvider>
  );
}

export default App;
