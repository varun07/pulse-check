import SideNav from "../../../common/sideNav";
import { Accordion, AccordionTab } from 'primereact/accordion';
import NavItem from "../navItem";

import './styles.scss';

export function DashboardSideNav(props: any) {
  return (
    <SideNav className="dashboard-side-nav">
      <Accordion>
        <AccordionTab header="Database Information" contentClassName="dashboard-side-nav-content">
          <NavItem to="/dashboard/database">Dashboard</NavItem>
          <NavItem to="/dashboard/database/account">Account Information</NavItem>
          <NavItem to="/dashboard/database/backup">Backup Utilization</NavItem>
        </AccordionTab>
        <AccordionTab header="Sessions" contentClassName="dashboard-side-nav-content">
          <NavItem to="/dashboard/session">Session 1</NavItem>
          <NavItem to="/dashboard/session/session2">Session 2</NavItem>
          <NavItem to="/dashboard/session/session3">Session 3</NavItem>
        </AccordionTab>

      </Accordion>
    </SideNav>
  )
}
