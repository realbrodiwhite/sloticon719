import type { SidebarNavItem } from '@/lib/types';
import { LayoutDashboard, Users, Settings, Palette, ShieldCheck } from 'lucide-react';

export const sidebarNavItems: SidebarNavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    href: '/users',
    icon: Users,
  },
  {
    title: 'Sloticon Game',
    href: '/sloticon-game', // Placeholder for original game
    icon: Palette,
    disabled: true, // Mark as disabled for now
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
    disabled: true,
  },
];

export const AppConfig = {
  name: "Sloticon Manager",
  description: "Manage users for the Sloticon application.",
  logo: ShieldCheck, // Using ShieldCheck as a generic logo icon
};
