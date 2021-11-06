import { Stack } from '@chakra-ui/react';
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import { useState } from 'react';
import NavLink from './NavLink';
import NavSection from './NavSection';

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink icon={RiDashboardLine} title="Dashboard" />
        <NavLink icon={RiContactsLine} title="Users" />
      </NavSection>
      <NavSection title="AUTOMATION">
        <NavLink icon={RiInputMethodLine} title="Forms" />
        <NavLink icon={RiGitMergeLine} title="Automation" />
      </NavSection>
    </Stack>
  );
}
