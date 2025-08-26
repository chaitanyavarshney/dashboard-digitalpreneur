import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function YourRankCard() {
  const rankData = [
    {
      id: 1,
      name: "Taniya Patyal",
      rank: "#6986",
      avatar: "/api/placeholder/32/32",
      initials: "TP"
    },
    {
      id: 2,
      name: "Piyush Patyal", 
      rank: "#6987",
      avatar: "/api/placeholder/32/32",
      initials: "PP",
      isCurrentUser: true
    },
    {
      id: 3,
      name: "Uttkarsh Singh",
      rank: "#6988", 
      avatar: "/api/placeholder/32/32",
      initials: "US"
    }
  ]

  return (
    <Card className="bg-card border-border h-fit">
      <CardHeader className="pb-3">
        <CardTitle className="text-card-foreground text-lg font-semibold">
          Your Rank
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Among other affiliates
        </p>
      </CardHeader>
      <CardContent className="space-y-0">
        {/* Main rank display */}
        <div className="mb-6">
          <div className="text-3xl font-bold text-card-foreground mb-1">
            #6987
          </div>
        </div>
        
        {/* Leaderboard */}
        <div className="space-y-3">
          {rankData.map((user, index) => (
            <div 
              key={user.id}
              className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                user.isCurrentUser 
                  ? 'bg-primary/10 border border-primary/20' 
                  : 'hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-xs bg-muted">
                    {user.initials}
                  </AvatarFallback>
                </Avatar>
                <span className={`text-sm font-medium ${
                  user.isCurrentUser ? 'text-primary' : 'text-card-foreground'
                }`}>
                  {user.name}
                </span>
              </div>
              <Badge 
                variant={user.isCurrentUser ? "default" : "secondary"}
                className="text-xs font-mono"
              >
                {user.rank}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}