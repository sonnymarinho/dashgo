import { Button, Flex, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Input } from '../components/Form/Input';
import { Logo } from '../components/Logo';

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
      <Logo type="home" mb="3" />
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
