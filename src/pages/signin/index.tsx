import { Flex, Stack, Input, Button } from '@chakra-ui/react';
import SigninLogo from './SigninLogo';

export default function Signin() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center" flexDir="column">
      <SigninLogo />
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
}
