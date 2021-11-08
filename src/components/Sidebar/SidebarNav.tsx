import { Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';
import ROUTES from '../../config/routes';
import NavLink from './NavLink';
import NavSection from './NavSection';

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink icon={RiDashboardLine} title="Dashboard" to={ROUTES.DASHBOARD} />
        <NavLink icon={RiContactsLine} title="Users" to={ROUTES.USERS} />
      </NavSection>
      <NavSection title="AUTOMATION">
        <NavLink icon={RiInputMethodLine} title="Forms" to={'#'} />
        <NavLink icon={RiGitMergeLine} title="Automation" to={'#'} />
      </NavSection>
    </Stack>
  );
}
