import ThemeToggle from "@/components/theme.toggle";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full p-6 bg-muted text-foreground flex flex-col md:flex-row justify-between items-center border-t">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Link href="/about" className="text-sm hover:underline">
          About
        </Link>
        <Link href="/policy" className="text-sm hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-sm hover:underline">
          Terms of Service
        </Link>
      </div>

      <div>
        <p className="text-sm text-white">Copyright &copy;{new Date().getFullYear()} Dustin</p>
      </div>

      <div className="flex gap-4 mt-4 md:mt-0">
        <Link href="https://facebook.com" target="_blank">
          <Facebook className="w-5 h-5 hover:text-primary" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <Twitter className="w-5 h-5 hover:text-primary" />
        </Link>
        <Link href="https://instagram.com" target="_blank">
          <Instagram className="w-5 h-5 hover:text-primary" />
        </Link>
      </div>
    </footer>
  );
}

<ThemeToggle />;
