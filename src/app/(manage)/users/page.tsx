
import { Button } from "@/components/ui/button";
import { UserTable } from "@/components/users/user-table";
import type { User } from "@/lib/types";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

// Mock data for users
const mockUsers: User[] = [
  { id: "usr_1", name: "Alice Wonderland", email: "alice@example.com", role: "admin", status: "active", lastLogin: new Date("2023-10-01T10:00:00Z"), createdAt: new Date("2023-01-15T09:30:00Z"), avatarUrl: "https://picsum.photos/seed/alice/40/40" },
  { id: "usr_2", name: "Bob The Builder", email: "bob@example.com", role: "user", status: "active", lastLogin: new Date("2023-10-02T11:00:00Z"), createdAt: new Date("2023-02-20T14:00:00Z"), avatarUrl: "https://picsum.photos/seed/bob/40/40" },
  { id: "usr_3", name: "Charlie Brown", email: "charlie@example.com", role: "user", status: "inactive", lastLogin: new Date("2023-09-15T12:00:00Z"), createdAt: new Date("2023-03-10T18:45:00Z"), avatarUrl: "https://picsum.photos/seed/charlie/40/40" },
  { id: "usr_4", name: "Diana Prince", email: "diana@example.com", role: "user", status: "pending", lastLogin: new Date("2023-09-15T12:00:00Z"), createdAt: new Date("2023-03-10T18:45:00Z"), avatarUrl: "https://picsum.photos/seed/diana/40/40" },
  { id: "usr_5", name: "Edward Scissorhands", email: "edward@example.com", role: "admin", status: "active", lastLogin: new Date("2023-10-03T14:30:00Z"), createdAt: new Date("2023-04-05T11:20:00Z"), avatarUrl: "https://picsum.photos/seed/edward/40/40" },
];

export default async function UsersPage() {
  // In a real app, fetch users from your API
  const users = mockUsers;

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Users</h1>
        <Button asChild>
          <Link href="/users/new">
            <PlusCircle className="mr-2 h-5 w-5" />
            Add User
          </Link>
        </Button>
      </div>
      <UserTable users={users} />
    </div>
  );
}
