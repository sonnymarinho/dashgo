import { Flex, Button, Stack, Text, FormLabel, FormControl } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Input } from '../components/Form/Input';

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
      <Text as="h2" fontWeight="bold" fontSize={48} mb={2}>
        dash.go
      </Text>
      <Flex as="form" w="100%" maxW={360} bg="gray.800" p="8" flexDir="column" borderRadius={5}>
        <Stack spacing={4}>
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Password" type="password" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink">
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
