
"use client";

import { useState } from 'react';
import { useAuth } from '@/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, LogIn } from 'lucide-react';

export function LoginForm() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState('admin@example.com'); // Pre-fill for demo
  const [password, setPassword] = useState('password'); // Pre-fill for demo

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-input placeholder:text-muted-foreground"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-input placeholder:text-muted-foreground"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <LogIn className="mr-2 h-4 w-4" />
        )}
        Sign In
      </Button>
       <p className="text-xs text-muted-foreground text-center">
        Use <code className="font-mono bg-muted px-1 py-0.5 rounded">admin@example.com</code> and <code className="font-mono bg-muted px-1 py-0.5 rounded">password</code> to login.
      </p>
    </form>
  );
}
