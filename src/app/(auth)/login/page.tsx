
"use client";

import { LoginForm } from '@/components/auth/login-form';
import { AppConfig } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  const LogoComponent = AppConfig.logo;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <LogoComponent className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">{AppConfig.name}</CardTitle>
          <CardDescription>Sign in to manage your Sloticon users</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} {AppConfig.name}. All rights reserved.
      </p>
    </div>
  );
}
