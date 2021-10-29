import { Text, TextProps } from '@chakra-ui/react';

interface LogoProps extends TextProps {
  type: 'home' | 'header';
}

export function Logo({ type, ...props }: LogoProps) {
  return <>{type === 'home' ? <LogoHome {...props} /> : <LogoHeader {...props} />}</>;
}

function LogoHome(props: TextProps) {
  return (
    <Text fontSize="4xl" fontWeight="bold" letterSpacing="tight" {...props}>
      dash
      <Text as="span" color="pink.500">
        .
      </Text>
      go
    </Text>
  );
}

function LogoHeader(props: TextProps) {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64" {...props}>
      dash
      <Text as="span" color="pink.500">
        .
      </Text>
      go
    </Text>
  );
}
