
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, Clock, Activity } from "lucide-react";
import { UserActivityChart } from "@/components/dashboard/user-activity-chart";
import { RecentUsers } from "@/components/dashboard/recent-users";

export default function DashboardPage() {
  // Mock data for stats
  const stats = [
    { title: "Total Users", value: "1,234", icon: Users, change: "+5.2% this month" },
    { title: "Active Users", value: "876", icon: UserCheck, change: "+2.1% this week" },
    { title: "Avg. Session", value: "23m 45s", icon: Clock, change: "-1.5% yesterday" },
    { title: "New Signups", value: "58", icon: Activity, change: "+12 today" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground pt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">User Signups Over Time</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <UserActivityChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Recently Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentUsers />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
