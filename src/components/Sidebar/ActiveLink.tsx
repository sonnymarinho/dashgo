import { cloneElement, ReactElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export default function ActiveLink({ children, href, shouldMatchExactHref = true, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter();

  debugger;

  const isActive = shouldMatchExactHref
    ? asPath === href || asPath === props.as
    : asPath.startsWith(String(href) || String(props.as));

  return (
    <Link href={href} {...props}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
}
