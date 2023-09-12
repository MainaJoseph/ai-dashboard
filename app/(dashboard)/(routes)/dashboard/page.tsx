"use client"

import { Card } from "@/components/ui/card";
import { MessageSquare, ArrowRight, Music, ImageIcon, VideoIcon, Code} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare, // Use the imported component here
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Music Generation",
    icon: Music, 
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Image Generation",
    icon: ImageIcon, 
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon, 
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code, 
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

const DashboardPage = () => {
  const router =useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore The Power of Nova AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat With The Smartest AI - Experience the Power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool, index) => (
          <Card
          onClick={() => router.push(tool.href) }
           key={tool.href}
           className=" p-4 border-black/54 flex items-center justify-between hover:shadow-md transition cursor-pointer">
            <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-h h-8", tool.color)} />
                </div>
                <div className="font-semibold">
                    {tool.label}
                </div>
            </div>
            <ArrowRight className="w-5 h-5"/>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
