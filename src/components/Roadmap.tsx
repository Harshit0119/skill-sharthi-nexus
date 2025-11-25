import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Database, Cloud, BookOpen, Zap } from "lucide-react";

export const Roadmap = () => {
  const roadmapItems = [
    {
      icon: Code,
      title: "Frontend Fundamentals",
      description: "Master HTML, CSS, and JavaScript basics",
      status: "completed",
      duration: "4 weeks",
      color: "text-electric-blue"
    },
    {
      icon: Palette,
      title: "React & Modern Frameworks",
      description: "Build interactive UIs with React and TypeScript",
      status: "in-progress",
      duration: "6 weeks",
      color: "text-cyber-purple"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Learn Node.js, Express, and database management",
      status: "upcoming",
      duration: "8 weeks",
      color: "text-glow-orange"
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      description: "Deploy applications using modern cloud platforms",
      status: "upcoming",
      duration: "4 weeks",
      color: "text-electric-blue"
    },
    {
      icon: BookOpen,
      title: "Best Practices",
      description: "Testing, documentation, and code quality",
      status: "upcoming",
      duration: "3 weeks",
      color: "text-cyber-purple"
    },
    {
      icon: Zap,
      title: "Advanced Topics",
      description: "Performance optimization and advanced patterns",
      status: "upcoming",
      duration: "5 weeks",
      color: "text-glow-orange"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-primary/20 text-primary border-primary/30">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-secondary/20 text-secondary border-secondary/30 animate-pulse">In Progress</Badge>;
      default:
        return <Badge variant="outline" className="border-muted-foreground/30">Upcoming</Badge>;
    }
  };

  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
              Your Learning Roadmap
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow a structured path designed by AI to achieve your learning goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item, index) => (
            <Card
              key={index}
              className={`bg-card/50 backdrop-blur-lg border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:-translate-y-2 glow-hover animate-fade-in ${
                item.status === "in-progress" ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className={`p-3 rounded-lg bg-navy-light ${item.color}`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  {getStatusBadge(item.status)}
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{item.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Visualization */}
        <div className="mt-16 relative animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-electric-blue via-cyber-purple to-glow-orange"></div>
          <div className="relative space-y-8">
            {["Start", "Mid-Point", "Completion"].map((label, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <div className="bg-navy-deep border-2 border-primary rounded-full px-6 py-3 font-semibold text-primary glow-primary">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
