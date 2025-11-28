import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Team = () => {
  const teamMembers = [
    {
      name: "Harshit Chourasia",
      role: "full stack",
      bio: "Specializes in machine learning and agentic AI systems",
    },
    {
      name: "Team Member 2",
      role: "PPT & pitch the idea",
      bio: "",
    },
  ];

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-deep/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind Skill Sharthi at Mumbai Hacks 2025
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-lg border-border hover:border-primary transition-all duration-300 hover:scale-105 glow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center space-y-4">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-electric-blue to-cyber-purple p-1">
                  <div className="w-full h-full rounded-full bg-navy-deep flex items-center justify-center">
                    <span className="text-4xl font-bold text-electric-blue">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-2 pt-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-primary">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 hover:text-primary">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
