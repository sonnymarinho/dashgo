import { useContext, useEffect } from 'react';
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { createContext, ReactNode } from 'react';

interface SidebarDrawerContext {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerContext) {
  const router = useRouter();

  const disclosure = useDisclosure();

  useEffect(() => {
    disclosure.onClose();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return <SidebarDrawerContext.Provider value={disclosure}>{children}</SidebarDrawerContext.Provider>;
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
