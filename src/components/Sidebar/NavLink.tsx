import { Icon, Link, LinkProps as ChakraLinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import ActiveLink from './ActiveLink';

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  title: string;
  to: string;
}

export default function NavLink({ icon, title, to, ...props }: NavLinkProps) {
  return (
    <ActiveLink href={to} passHref shouldMatchExactHref={false}>
      <Link display="flex" align="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </Link>
    </ActiveLink>
  );
}
