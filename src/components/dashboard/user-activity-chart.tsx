
"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import { ChartTooltipContent, ChartStyle, ChartContainer } from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "January", users: 186 },
  { month: "February", users: 305 },
  { month: "March", users: 237 },
  { month: "April", users: 273 },
  { month: "May", users: 209 },
  { month: "June", users: 250 },
  { month: "July", users: 280 },
  { month: "August", users: 310 },
  { month: "September", users: 290 },
  { month: "October", users: 320 },
  { month: "November", users: 350 },
  { month: "December", users: 330 },
]

const chartConfig = {
  users: {
    label: "New Users",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function UserActivityChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full aspect-video">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            cursor={{ fill: "hsl(var(--muted) / 0.3)" }}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="users" fill="var(--color-users)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
