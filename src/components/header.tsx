"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Home, Bell, MessageCircle, Settings, LogOut } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "@/components/theme.toggle";
import { logout } from "@/services/auth.service";
import { usePathname } from "next/navigation";

export default function Header() {
  const handleLogout = () => {
    logout();
  };

  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  if (isLoginPage) {
    return (
      <></>
    )
  }

  return (
    <header className="flex items-center justify-between p-4 bg-background text-foreground border-b sticky top-0 z-40">
      <div className="flex items-center gap-4 grow-3">
        <Image src="/logo_d.png" alt="Logo" width={40} height={40} />
        <Input
          type="text"
          placeholder="#Explore"
          className="w-64 rounded-full bg-muted"
        />
      </div>

      <div className="flex items-center gap-6 grow-6">
        <Button variant="ghost" size="icon">
          <Home className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageCircle className="w-6 h-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer"
          onClick={() => handleLogout()}
        >
          <LogOut className="w-6 h-6" />
        </Button>
        <ThemeToggle />
      </div>

      <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
        <Image
          src="/avatar.jpg"
          alt="User Avatar"
          width={40}
          height={40}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}
