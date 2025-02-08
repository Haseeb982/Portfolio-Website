import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-[#2C3E50]">Portfolio</a>
        </Link>
        
        <div className="hidden md:flex space-x-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button
                variant={location === link.href ? "default" : "ghost"}
                className="relative"
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3498DB]"
                    initial={false}
                  />
                )}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
