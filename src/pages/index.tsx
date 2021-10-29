import { Flex, Input, Button, Stack, Text, FormLabel, FormControl } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
      <Text as="h2" fontWeight="bold" fontSize={48} mb={2}>
        dash.go
      </Text>
      <Flex as="form" w="100%" maxW={360} bg="gray.800" p="8" flexDir="column" borderRadius={5}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              type="password"
              id="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
