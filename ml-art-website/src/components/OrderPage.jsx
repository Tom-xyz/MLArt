import {
  Accordion,
  Container,
  Group,
  Header,
  List,
  Tabs,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, DropzoneStatus } from "@mantine/dropzone";
import { Upload, Photo, X, Icon as TablerIcon } from "tabler-icons-react";
import PropTypes from "prop-types";

import React from "react";

import ArtShowcase from "./ArtShowcase";
import OrderMLForm from "./OrderMLForm";
import AppFooter from "./AppFooter";
import AppLandingInfo from "./AppLandingInfo";

function ImageUploadIcon(status, props) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  return <Photo {...props} />;
}

export const dropzoneChildren = (status, theme) => (
  <Group
    position="center"
    spacing="xl"
    style={{ minHeight: 220, pointerEvents: "none" }}
  >
    <ImageUploadIcon status={status} size={80} />

    <div>
      <Text size="xl" inline>
        Drag images here or click to select files
      </Text>
      <Text size="sm" color="dimmed" inline mt={7}>
        Attach as many files as you like, each file should not exceed 5mb
      </Text>
    </div>
  </Group>
);

function OrderPage(props) {
  const theme = useMantineTheme();
  return (
    <Container hidden={props.opened} size="xl">
      <ArtShowcase />
      <AppLandingInfo />
      <Tabs grow position="center">
        <Tabs.Tab label="Simple">
          <OrderMLForm />
        </Tabs.Tab>
        <Tabs.Tab label="Advanced">
          <Dropzone
            onDrop={(files) => console.log("accepted files", files)}
            onReject={(files) => console.log("rejected files", files)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
          >
            {(status) => dropzoneChildren(status, theme)}
          </Dropzone>
          <OrderMLForm />
        </Tabs.Tab>
      </Tabs>

      <AppFooter />
    </Container>
  );
}

OrderPage.propTypes = {
  opened: PropTypes.bool,
};

export default OrderPage;
