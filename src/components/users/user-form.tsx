
"use client";

import type { User } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Save } from "lucide-react";

const userFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["admin", "user"]),
  status: z.enum(["active", "inactive", "pending"]),
});

type UserFormData = z.infer<typeof userFormSchema>;

interface UserFormProps {
  user?: User; // Optional: if provided, it's an edit form
}

export function UserForm({ user }: UserFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || "user",
      status: user?.status || "pending",
    },
  });

  const onSubmit = async (data: UserFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("User data submitted:", data);
    
    toast({
      title: user ? "User Updated" : "User Created",
      description: `${data.name} has been successfully ${user ? 'updated' : 'created'}.`,
      variant: 'default',
    });

    if (user) {
      router.push(`/users/${user.id}`);
    } else {
      router.push('/users'); // Redirect to users list after creating a new user
    }
    router.refresh(); // Refresh server components
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{user ? "Edit User" : "Create New User"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input id="name" placeholder="e.g. John Doe" {...field} />}
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input id="email" type="email" placeholder="e.g. john.doe@example.com" {...field} />}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.role && <p className="text-sm text-destructive">{errors.role.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select a status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.status && <p className="text-sm text-destructive">{errors.status.message}</p>}
            </div>
          </div>

          {user && (
             <div className="space-y-2">
              <Label htmlFor="avatarUrl">Avatar URL (Optional)</Label>
               <Input id="avatarUrl" placeholder="https://example.com/avatar.png" defaultValue={user.avatarUrl} />
               <p className="text-xs text-muted-foreground">Current avatar is: {user.avatarUrl || 'Not set'}</p>
            </div>
          )}

        </CardContent>
        <CardFooter className="border-t pt-6 flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            {user ? "Save Changes" : "Create User"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
