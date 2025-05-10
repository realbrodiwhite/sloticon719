
"use client";

import React, { useEffect } from 'react';
import { useAuth } from '@/providers/auth-provider';
import { useRouter } from 'next/navigation';
import { SidebarProvider, Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/layout/sidebar-nav';
import { UserNav } from '@/components/layout/user-nav';
import { AppConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { LogOut, Menu, Loader2 } from 'lucide-react';

export default function ManageLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const router = useRouter();
  const LogoComponent = AppConfig.logo;


  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen>
      <Sidebar className="border-r border-sidebar-border" variant="sidebar" collapsible="icon">
        <SidebarHeader className="p-4">
          <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
            <LogoComponent className="h-8 w-8 text-primary flex-shrink-0" />
            <span className="text-xl font-semibold group-data-[collapsible=icon]:hidden whitespace-nowrap">{AppConfig.name}</span>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarNav />
        </SidebarContent>
        <SidebarFooter className="p-2">
           <Button variant="ghost" className="w-full justify-start group-data-[collapsible=icon]:justify-center" onClick={logout}>
            <LogOut className="mr-2 h-5 w-5 group-data-[collapsible=icon]:mr-0" />
            <span className="group-data-[collapsible=icon]:hidden">Logout</span>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 backdrop-blur-md px-4 md:px-6">
          <div className="md:hidden">
             <SidebarTrigger>
                <Menu className="h-6 w-6" />
             </SidebarTrigger>
          </div>
          <div className="hidden md:block">
            {/* Placeholder for breadcrumbs or page title if needed */}
          </div>
          <div className="ml-auto">
            {user && <UserNav user={user} />}
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
