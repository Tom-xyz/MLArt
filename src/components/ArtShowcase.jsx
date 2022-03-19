import {
  Badge,
  Card,
  Container,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import PropTypes from "prop-types";

function ArtShowcase(props) {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const artCardConfig = [
    {
      src: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
      title: "\"Norway Adventures\"",
      createdBy: "Tom",
      createdOn: "Oct 21st 2021",
      artType: "Creative"
    },
    {
      src: "https://images.unsplash.com/photo-1647071012610-d051a2ed150f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
      title: "\"City Love\"",
      createdBy: "Tom",
      createdOn: "Jun 12th 2021",
      artType: "Modern"
    },
    {
      src: "https://images.unsplash.com/photo-1556139954-ec19cce61d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "\"Red Ocean\"",
      createdBy: "Tom",
      createdOn: "Jan 1st 2022",
      artType: "Abstract"
    },
  ];

  function createArtCard(props) {
    return (
      <Card pl="xl" pr="xl" sx={{ flex: 1}}>
        <Card.Section>
          <Image src={props.src} height={360} alt={props.title} />
        </Card.Section>

        <Group
          position="center"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{props.title}</Text>
          <Badge color="green" variant="light">
            {props.artType}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Generated on {props.createdOn} by {props.createdBy}
        </Text>
      </Card>
    );
  }

  const artCards = artCardConfig.map(createArtCard)

  return (
    <Container size="xl" sx={{display:"flex"}} p="sm"> 
    {artCards}
    </Container>
    
  );
}

ArtShowcase.propTypes = {
  src: PropTypes.string,
  createdBy: PropTypes.string,
  createdOn: PropTypes.string,
  artType: PropTypes.string,
  title: PropTypes.string
};

export default ArtShowcase;
