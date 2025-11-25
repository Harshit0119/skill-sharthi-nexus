import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-navy-deep border-t border-border overflow-hidden">
      {/* Animated Wave Effect */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          className="absolute w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(189 100% 50% / 0.1)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                      M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                      M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
              Skill Sharthi
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering learners through AI-driven education. Built with passion for Mumbai Hacks 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#progress" className="hover:text-primary transition-colors">Progress</a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">Team</a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest developments and join our community.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:text-primary glow-hover">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary glow-hover">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary glow-hover">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary glow-hover">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mumbai Hacks Badge */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-gradient-to-r from-electric-blue/20 to-cyber-purple/20 border border-electric-blue/30 rounded-lg">
              <span className="text-sm font-semibold">🏆 Mumbai Hacks 2025</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 Skill Sharthi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
