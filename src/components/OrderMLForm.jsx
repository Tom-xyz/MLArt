import React from "react";
import { useForm, formList } from "@mantine/form";
import {
  TextInput,
  Switch,
  Group,
  ActionIcon,
  Box,
  Text,
  Button,
  Code,
} from "@mantine/core";
import { Chips, Chip } from "@mantine/core";
import { Trash } from "tabler-icons-react";

function OrderMLForm() {
  const suggestions = ["Green fox", "Rainbow tree", "City love"];

  function getSuggestion() {
    let suggestion = suggestions.pop();
    if (suggestion === undefined) {
      suggestion = "";
    }

    return suggestion;
  }

  const form = useForm({
    initialValues: {
      jobs: formList([{ input: "", jobType: "" }]),
    },
  });

  const fields = form.values.jobs.map((_, index) => (
    <Group key={index} mt="xs" sx={{ flex: 1 }}>
      <TextInput
        placeholder={getSuggestion()}
        required
        sx={{ flex: 1 }}
        {...form.getListInputProps("jobs", index, "input")}
      />
      <Chips variant="filled" radius="xs" size="md" spacing="xs" {...form.getListInputProps('jobs', index, 'jobType')}>
        <Chip value="create">Creative</Chip>
        <Chip value="classic">Classic</Chip>
        <Chip value="modern">Modern</Chip>
        <Chip value="abstract">Abstract</Chip>
      </Chips>
      <ActionIcon
        color="red"
        variant="hover"
        onClick={() => form.removeListItem("jobs", index)}
      >
        <Trash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box  mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs" sx={{ flex: 1 }}>
          <Text weight={750} size="sm" sx={{ flex: 1 }} align={"center"}>
            Phrase
          </Text>
          <Text weight={750} size="sm" sx={{ flex: 1 }} align={"center"}>
            Option
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group position="right" mt="md">
        <Button
          onClick={() => form.addListItem("jobs", { input: "", jobType: "" })}
        >
          Add task
        </Button>
        <Button
          onClick={() => form.addListItem("jobs", { input: "", jobType: "" })}
        >
          Create Art
        </Button>
      </Group>

      <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}

export default OrderMLForm;
