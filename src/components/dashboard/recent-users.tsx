
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const mockRecentUsers = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", avatar: "https://picsum.photos/seed/olivia/40/40", dataAiHint: "woman face" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", avatar: "https://picsum.photos/seed/jackson/40/40", dataAiHint: "man face" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", avatar: "https://picsum.photos/seed/isabella/40/40", dataAiHint: "woman smiling" },
  { name: "William Kim", email: "will@email.com", avatar: "https://picsum.photos/seed/william/40/40", dataAiHint: "man glasses" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", avatar: "https://picsum.photos/seed/sofia/40/40", dataAiHint: "woman portrait" },
]

export function RecentUsers() {
  return (
    <div className="space-y-6">
      {mockRecentUsers.map((user) => (
        <div key={user.email} className="flex items-center">
          <Avatar className="h-10 w-10 border-2 border-border">
            <AvatarImage src={user.avatar} alt={user.name} data-ai-hint={user.dataAiHint} />
            <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none text-foreground">
              {user.name}
            </p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          {/* <div className="ml-auto font-medium text-sm text-foreground">+$1,999.00</div> */}
        </div>
      ))}
    </div>
  )
}
