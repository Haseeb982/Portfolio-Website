import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link href="/">
              <a className="text-2xl font-bold">Portfolio</a>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Creating beautiful digital experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/">
                <a className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              </Link>
              <Link href="/about">
                <a className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              </Link>
              <Link href="/projects">
                <a className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              </Link>
              <Link href="/contact">
                <a className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>contact@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <SiX className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}