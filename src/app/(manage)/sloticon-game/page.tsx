
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function SloticonGamePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Sloticon Game</h1>
      
      <Card className="shadow-lg">
        <CardHeader className="items-center text-center">
          <Gamepad2 className="h-16 w-16 text-primary mb-4" />
          <CardTitle className="text-2xl text-foreground">Welcome to Sloticon!</CardTitle>
          <CardDescription className="text-base">
            This is where the original Sloticon game interface would be integrated.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            The frontend components from <code className="font-mono bg-muted px-1 py-0.5 rounded">github.com/ktsalik/sloticon</code> would be displayed here.
          </p>
          <p className="text-muted-foreground">
            Backend logic from <code className="font-mono bg-muted px-1 py-0.5 rounded">github.com/ktsalik/sloticon-server</code> would be migrated to Next.js API Routes or Server Actions to support the game.
          </p>
          <Button disabled>
            Launch Game (Placeholder)
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Integration Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p><strong>Modernization Steps:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Refactor React components from the original Sloticon client to use Next.js features (App Router, Server Components where applicable).</li>
            <li>Migrate server-side logic (e.g., Express routes) to Next.js API Routes or Server Actions.</li>
            <li>Update state management to align with modern React patterns (e.g., Context API, Zustand, or Valtio).</li>
            <li>Ensure styling is consistent with the Sloticon Manager UI or define a separate theme for the game.</li>
            <li>Integrate user authentication from Sloticon Manager with the game.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
