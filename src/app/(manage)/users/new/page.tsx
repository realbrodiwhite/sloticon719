
import { UserForm } from "@/components/users/user-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewUserPage() {
  return (
    <div className="space-y-6">
       <div className="flex items-center gap-4">
         <Button variant="outline" size="icon" asChild>
          <Link href="/users">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to users</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Add New User</h1>
      </div>
      <UserForm />
    </div>
  );
}
