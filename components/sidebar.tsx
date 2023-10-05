"use client"

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { 
    LayoutDashboard,
    MessageSquare,
    ImageIcon,
    VideoIcon,
    Music,
    Code,
    Settings,

 } from "lucide-react"


import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


const monserrat = Montserrat ({
    weight: "600",
     subsets: ["latin"]
     });


const routes= [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: "text-orange-500"
      },
      {
        label: 'Conversation',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500",
      },
      {
        label: 'Image Generation',
        icon: ImageIcon,
        color: "text-pink-700",
        href: '/image',
      },
      {
        label: 'Video Generation',
        icon: VideoIcon,
        color: "text-red-500",
        href: '/video',
      },
      {
        label: 'Music Generation',
        icon: Music,
        color: "text-emerald-500",
        href: '/music',
      },
      {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        href: '/code',
      },
      {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
      },
];

interface sidebarProps {
    apiLimitCount: number;
}

export const Sidebar = ({
  apiLimitCount = 0,

}: {
  apiLimitCount: number;
  
}) => {
    const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white" >
    <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
        <div className="relative w-10 h-10 mr-4">

            <Image
            fill
            alt="Logo"
            src="/logo.png"
            />

        </div>
        <h1 className={cn("text-2xl font-bold", monserrat.className)}>
            Nova
        </h1>
        </Link>
        <div className="space-y-1">
            {routes.map((route) => (
                <Link
                href={route.href}
                key={route.href}
                className={cn(
                    "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                  )}
                >
                     <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            
                </Link>
            ))}
        </div>
    </div>
    </div>
  );
};

export default Sidebar;
