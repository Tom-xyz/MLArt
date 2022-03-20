import React from "react";

import AppNavbar from "./components/AppSideBar";
import "./App.css";

import { MantineProvider } from "@mantine/core";

import { AppShell } from "@mantine/core";
import OrderPage from "./components/OrderPage";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <AppShell
          padding="md"
          // header={<AppHeader />}
          navbar={<AppNavbar />}
          styles={(theme) => ({})}
        >
          <OrderPage />
          <AppFooter />
        </AppShell>
      </div>
    </MantineProvider>
  );
}

export default App;
