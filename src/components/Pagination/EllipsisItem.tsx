import { Text } from "@chakra-ui/react";

export default function EllipsisItem() {
  return (
    <Text
      color="gray.300"
      w="8"
      textAlign="center"
      bg="gray.700"
      rounded="md"
      _hover={{
        cursor: "default",
      }}
    >
      ...
    </Text>
  );
}
