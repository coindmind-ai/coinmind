"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, List } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
    description: "View your financial overview and analytics",
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: List,
    description: "Manage and view your transaction history",
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-t supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 h-16">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => console.log('Navigating to:', item.href)}
                className={cn(
                  "flex flex-col items-center justify-center space-y-1 text-xs transition-all duration-200 rounded-lg mx-1 my-2",
                  isActive 
                    ? "text-primary bg-primary/10 font-medium shadow-sm" 
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                <div className="flex items-center justify-center">
                  <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
                </div>
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 