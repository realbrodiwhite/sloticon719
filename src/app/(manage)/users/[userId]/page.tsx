
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { User } from "@/lib/types";
import { ArrowLeft, Edit } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from 'date-fns';

// Mock function to get user details
async function getUser(userId: string): Promise<User | null> {
  // In a real app, fetch from your API
  const mockUsers: User[] = [
    { id: "usr_1", name: "Alice Wonderland", email: "alice@example.com", role: "admin", status: "active", lastLogin: new Date("2023-10-01T10:00:00Z"), createdAt: new Date("2023-01-15T09:30:00Z"), avatarUrl: "https://picsum.photos/seed/alice/100/100" },
    { id: "usr_2", name: "Bob The Builder", email: "bob@example.com", role: "user", status: "active", lastLogin: new Date("2023-10-02T11:00:00Z"), createdAt: new Date("2023-02-20T14:00:00Z"), avatarUrl: "https://picsum.photos/seed/bob/100/100" },
  ];
  return mockUsers.find(u => u.id === userId) || null;
}

export default async function UserDetailPage({ params }: { params: { userId: string } }) {
  const user = await getUser(params.userId);

  if (!user) {
    notFound();
  }

  const getStatusVariant = (status: User["status"]): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "active": return "default";
      case "inactive": return "secondary";
      case "pending": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/users">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to users</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">User Details</h1>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="flex flex-col items-center text-center sm:flex-row sm:text-left">
          <Avatar className="h-24 w-24 border-4 border-primary mb-4 sm:mb-0 sm:mr-6">
            <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person portrait" />
            <AvatarFallback className="text-4xl">{user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl text-foreground">{user.name}</CardTitle>
            <CardDescription className="text-base">{user.email}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-6 text-sm">
          <div>
            <p className="font-medium text-muted-foreground">User ID</p>
            <p className="text-foreground">{user.id}</p>
          </div>
          <div>
            <p className="font-medium text-muted-foreground">Role</p>
            <p className="text-foreground capitalize">{user.role}</p>
          </div>
          <div>
            <p className="font-medium text-muted-foreground">Status</p>
            <Badge variant={getStatusVariant(user.status)} className="capitalize text-sm">
              {user.status}
            </Badge>
          </div>
           <div>
            <p className="font-medium text-muted-foreground">Last Login</p>
            <p className="text-foreground">
              {user.lastLogin ? format(new Date(user.lastLogin), "PPpp 'UTC'") : 'N/A'}
            </p>
          </div>
          <div>
            <p className="font-medium text-muted-foreground">Member Since</p>
            <p className="text-foreground">
              {user.createdAt ? format(new Date(user.createdAt), "PP") : 'N/A'}
            </p>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-6">
          <Button asChild variant="outline">
            <Link href={`/users/${user.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" /> Edit User
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
