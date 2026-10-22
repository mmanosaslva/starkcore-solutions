import {
  BellIcon,
  DatabaseIcon,
  FileSearchIcon,
  GlobeIcon,
  LayoutDashboardIcon,
  MailIcon,
  PlugIcon,
  WorkflowIcon,
} from 'lucide-react';

// Service catalogue shared by the landing grid (Solutions) and the /servicios page.
// `group` decides the section each service belongs to on /servicios.
export const services = [
  { key: 'automation', icon: WorkflowIcon, group: 'automation' },
  { key: 'integrations', icon: PlugIcon, group: 'automation' },
  { key: 'orders', icon: MailIcon, group: 'automation' },
  { key: 'notifications', icon: BellIcon, group: 'automation' },
  { key: 'secop', icon: FileSearchIcon, group: 'automation' },
  { key: 'web', icon: GlobeIcon, group: 'custom' },
  { key: 'internalTools', icon: LayoutDashboardIcon, group: 'custom' },
  { key: 'data', icon: DatabaseIcon, group: 'custom' },
] as const;

export type ServiceGroup = (typeof services)[number]['group'];
