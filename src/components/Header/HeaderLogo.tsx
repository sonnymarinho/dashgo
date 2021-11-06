import NextLink from 'next/link';
import { Text, Link } from '@chakra-ui/react';

export default function HeaderLogo() {
  return (
    <NextLink href="/">
      <Link _hover={{ textDecoration: 'none', cursor: 'pointer' }}>
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
          dash
          <Text as="span" color="pink.500">
            .
          </Text>
          go
        </Text>
      </Link>
    </NextLink>
  );
}
