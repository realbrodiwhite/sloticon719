import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { AuthProvider } from '@/providers/auth-provider';
import { Toaster } from '@/components/ui/toaster';
import { AppConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: AppConfig.name,
  description: AppConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}> {/* Apply dark theme and font variables to html tag */}
      <body className={`antialiased bg-background text-foreground`}> {/* Font variables are inherited from html */}
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
