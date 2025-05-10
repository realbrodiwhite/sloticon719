
"use client";

import type { User } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { format } from 'date-fns';

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  const router = useRouter();

  const handleView = (userId: string) => {
    router.push(`/users/${userId}`);
  };

  const handleEdit = (userId: string) => {
    router.push(`/users/${userId}/edit`);
  };

  const handleDelete = (userId: string) => {
    // Implement delete logic, possibly with a confirmation dialog
    alert(`Delete user ${userId}? (Not implemented)`);
  };

  const getStatusVariant = (status: User["status"]): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "active":
        return "default"; // Or a success-like color if defined
      case "inactive":
        return "secondary";
      case "pending":
        return "outline";
      default:
        return "secondary";
    }
  };


  return (
    <div className="rounded-lg border shadow-sm bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">Avatar</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.avatarUrl || `https://picsum.photos/seed/${user.id}/40/40`} alt={user.name} data-ai-hint="person face" />
                  <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium text-card-foreground">{user.name}</TableCell>
              <TableCell className="text-muted-foreground">{user.email}</TableCell>
              <TableCell className="text-muted-foreground capitalize">{user.role}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(user.status)} className="capitalize">
                  {user.status}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {user.lastLogin ? format(new Date(user.lastLogin), "PPpp") : 'N/A'}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {user.createdAt ? format(new Date(user.createdAt), "PP") : 'N/A'}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => handleView(user.id)}>
                      <Eye className="mr-2 h-4 w-4" /> View
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEdit(user.id)}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleDelete(user.id)} className="text-destructive focus:text-destructive-foreground focus:bg-destructive">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
