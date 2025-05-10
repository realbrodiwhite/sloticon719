
import { UserForm } from "@/components/users/user-form";
import type { User } from "@/lib/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

// Mock function to get user details
async function getUser(userId: string): Promise<User | null> {
  // In a real app, fetch from your API
   const mockUsers: User[] = [
    { id: "usr_1", name: "Alice Wonderland", email: "alice@example.com", role: "admin", status: "active", lastLogin: new Date("2023-10-01T10:00:00Z"), createdAt: new Date("2023-01-15T09:30:00Z"), avatarUrl: "https://picsum.photos/seed/alice/100/100" },
    { id: "usr_2", name: "Bob The Builder", email: "bob@example.com", role: "user", status: "active", lastLogin: new Date("2023-10-02T11:00:00Z"), createdAt: new Date("2023-02-20T14:00:00Z"), avatarUrl: "https://picsum.photos/seed/bob/100/100" },
  ];
  return mockUsers.find(u => u.id === userId) || null;
}


export default async function EditUserPage({ params }: { params: { userId: string } }) {
  const user = await getUser(params.userId);

  if (!user) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
         <Button variant="outline" size="icon" asChild>
          <Link href={`/users/${params.userId}`}>
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to user details</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Edit User: {user.name}</h1>
      </div>
      <UserForm user={user} />
    </div>
  );
}
