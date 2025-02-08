import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2C3E50] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2024 Portfolio. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3498DB] transition-colors"
            >
              <SiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3498DB] transition-colors"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3498DB] transition-colors"
            >
              <SiX className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}