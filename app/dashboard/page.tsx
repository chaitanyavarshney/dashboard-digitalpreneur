import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"
import { ChartBarStacked } from "@/components/bar-chart"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { YourRankCard } from "@/components/rank-card"

export default function Dashboard() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              
              {/* Top section - responsive layout */}
              <div className="px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full h-auto lg:h-[400px]">
                  {/* SectionCards - full width on mobile, 2/3 on desktop */}
                  <Card className="bg-card border-border w-full lg:flex-[2] gap-0 flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-card-foreground text-lg sm:text-xl lg:text-2xl">
                        Earning Level
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm sm:text-base">
                        January - June 2024
                      </CardDescription>
                    </CardHeader>
                    <div className="flex-1 flex flex-col m-[-10]">
                      <SectionCards />
                    </div>
                  </Card>
                  
                  {/* Chart - full width on mobile, 1/3 on desktop */}
                  <div className="w-full lg:flex-[1] h-[300px] lg:h-full">
                    <ChartBarStacked />
                  </div>
                </div>
              </div>

              {/* Bottom section - responsive layout */}
              <div className="px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full h-auto lg:h-[400px]">
                  {/* Rank Card - full width on mobile, 1/3 on desktop */}
                  <div className="w-full lg:flex-[1] h-[300px] lg:h-full">
                    <YourRankCard />
                  </div>
                  
                  {/* Interactive Chart - full width on mobile, 2/3 on desktop */}
                  <div className="w-full lg:flex-[2] h-[300px] lg:h-full">
                    <ChartAreaInteractive />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}