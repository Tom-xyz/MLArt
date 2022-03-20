import { Card } from "@mantine/core";
import {
  Badge,
  Container,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import logo from '../resources/app-icon.jpg'
import React from "react";

function AppLogo() {
  const theme = useMantineTheme();

  return (
    <Card p="lg">
      <Card.Section>
        <Image
          src={logo}
          alt="Logo"
        />
      </Card.Section>

      <Group
        position="center"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>ML Art Bot</Text>
      </Group>
    </Card>
  );
}

export default AppLogo;
