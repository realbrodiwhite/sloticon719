export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive' | 'pending';
  lastLogin: Date | string;
  createdAt: Date | string;
};

export type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  description?: string;
};

export type SidebarNavItem = NavItem & {
  items?: NavItem[];
};
