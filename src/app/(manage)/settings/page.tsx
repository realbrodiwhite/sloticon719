
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Application Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="appName">Application Name</Label>
            <Input id="appName" defaultValue="Sloticon Manager" disabled className="bg-muted/50"/>
            <p className="text-sm text-muted-foreground">This is managed in the codebase.</p>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="notifications" className="text-base">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Receive email notifications for important user activities.
              </p>
            </div>
            <Switch id="notifications" aria-label="Toggle email notifications" disabled />
          </div>
          
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label htmlFor="darkMode" className="text-base">Dark Mode</Label>
              <p className="text-sm text-muted-foreground">
                The application currently uses a dark theme by default.
              </p>
            </div>
            <Switch id="darkMode" checked disabled aria-label="Dark mode toggle (disabled)" />
          </div>
           <p className="text-center text-muted-foreground pt-4">More settings will be available soon.</p>
        </CardContent>
        <CardFooter className="border-t pt-6">
            <Button disabled>Save Preferences (Disabled)</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
