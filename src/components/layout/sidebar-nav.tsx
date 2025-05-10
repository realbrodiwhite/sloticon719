
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { sidebarNavItems } from '@/lib/constants';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import type { SidebarNavItem } from '@/lib/types';

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {sidebarNavItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
            disabled={item.disabled}
            tooltip={item.title}
          >
            <Link href={item.href}>
              <item.icon className="h-5 w-5" />
              <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
