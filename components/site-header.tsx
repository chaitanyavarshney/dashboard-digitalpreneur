import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, Settings, User, Bell, ChevronDown } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="flex w-full flex-col lg:flex-row justify-between bg-background text-white px-4 sm:px-6 py-4 gap-4 lg:gap-0">
      {/* Left side - Greeting and Timer */}
      <div className="flex flex-col gap-4 lg:gap-6">
        <div>
          <h1 className="text-lg sm:text-xl font-medium flex items-center gap-2">
            Hello, Piyush Patyal 
            <span className="text-yellow-400">👋</span>
          </h1>
        </div>
        
        {/* Countdown Timer */}
        <div className="flex items-center gap-2 sm:gap-4 text-sm bg-card px-4 sm:px-8 lg:px-16 xl:px-40 py-3 rounded-2xl overflow-x-auto">
          <div className="flex items-center gap-1 min-w-fit">
            <span className="text-2xl sm:text-3xl font-bold">6</span>
            <span className="text-xs text-gray-400">Days</span>
          </div>
          <div className="flex items-center gap-1 min-w-fit">
            <span className="text-2xl sm:text-3xl font-bold">11</span>
            <span className="text-xs text-gray-400">Hr</span>
          </div>
          <div className="flex items-center gap-1 min-w-fit">
            <span className="text-2xl sm:text-3xl font-bold">59</span>
            <span className="text-xs text-gray-400">Min</span>
          </div>
          <div className="flex items-center gap-1 min-w-fit">
            <span className="text-2xl sm:text-3xl font-bold">09</span>
            <span className="text-xs text-gray-400">Sec</span>
          </div>
          <span className="text-gray-400 ml-2 hidden sm:inline whitespace-nowrap">
            Your next level is just one click away...
          </span>
        </div>
      </div>

      {/* Right side - Notifications and Profile */}
      <div className="flex items-center gap-3 self-start lg:self-center">
        {/* Notification Bell */}
        <Button variant="ghost" size="sm" className="text-white hover:bg-slate-800 relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 bg-red-500 text-xs flex items-center justify-center">
            1
          </Badge>
        </Button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-white hover:bg-slate-800 flex items-center gap-2 px-3 py-2">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-slate-800 border-slate-700">
            <DropdownMenuItem className="text-white hover:bg-slate-700">
              <User className="mr-2 h-4 w-4" />
              <span>Edit Your Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-slate-700">
              <Settings className="mr-2 h-4 w-4" />
              <span>Back to Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-white hover:bg-slate-700">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}