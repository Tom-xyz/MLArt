import React, { useState } from "react";

import AppNavbar from "./components/AppSideBar";
import "./App.css";

import {
  Burger,
  Header,
  MantineProvider,
  MediaQuery,
  ColorSchemeProvider,
  ColorScheme,
  useMantineTheme,
} from "@mantine/core";

import { AppShell } from "@mantine/core";
import OrderPage from "./components/OrderPage";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

function App() {
  const theme = useMantineTheme();
  const lightSchema = "light";
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useState(lightSchema);
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={lightSchema}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme: lightSchema }} withGlobalStyles>
        <div className="App">
          <AppShell
            padding="md"
            navbarOffsetBreakpoint="sm"
            header={
              <div>
                {/* Handle other responsive styles with MediaQuery component or createStyles function */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                </div>
              </div>
            }
            navbar={<AppNavbar opened={opened} setOpened={setOpened} />}
            styles={(theme) => ({})}
          >
            <OrderPage opened={opened} />
          </AppShell>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
