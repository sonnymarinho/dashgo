import { Text, TextProps as ChakraTextProps } from '@chakra-ui/react';

export default function SigninLogo(props: ChakraTextProps) {
  return (
    <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight" mb="3">
      dash
      <Text as="span" color="pink.500">
        .
      </Text>
      go
    </Text>
  );
}
