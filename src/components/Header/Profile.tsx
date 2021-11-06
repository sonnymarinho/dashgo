import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>User Name</Text>
        <Text color="gray.300" fontSize="small">
          user.email@domain.com
        </Text>
      </Box>
      <Avatar size="md" mame="User Name" />
    </Flex>
  );
}
