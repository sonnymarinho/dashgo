import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface IProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>User Name</Text>
          <Text color="gray.300" fontSize="small">
            user.email@domain.com
          </Text>
        </Box>
      )}
      <Avatar size="md" mame="User Name" />
    </Flex>
  );
}
