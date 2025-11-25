import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Trophy, Star, CheckCircle2 } from "lucide-react";

export const Progress = () => {
  const progressData = [
    { skill: "React Development", progress: 85, color: "bg-electric-blue" },
    { skill: "TypeScript", progress: 70, color: "bg-cyber-purple" },
    { skill: "UI/UX Design", progress: 60, color: "bg-glow-orange" },
    { skill: "Node.js", progress: 45, color: "bg-electric-blue" }
  ];

  const milestones = [
    { title: "First Project Completed", date: "Dec 15, 2024", achieved: true },
    { title: "10 Skills Mastered", date: "Jan 5, 2025", achieved: true },
    { title: "Advanced Certification", date: "Feb 20, 2025", achieved: false }
  ];

  return (
    <section id="progress" className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-deep/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
              Track Your Progress
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualize your learning journey with detailed analytics and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Progress */}
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-lg border-border animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Star className="h-6 w-6 text-electric-blue" />
                Skills Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {progressData.map((item, index) => (
                <div key={index} className="space-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-sm text-muted-foreground">{item.progress}%</span>
                  </div>
                  <div className="relative">
                    <ProgressBar value={item.progress} className="h-3 bg-navy-light">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-500 glow-primary`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </ProgressBar>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Milestones */}
          <Card className="bg-card/50 backdrop-blur-lg border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="h-6 w-6 text-glow-orange" />
                Milestones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`flex gap-3 p-4 rounded-lg border transition-all duration-300 ${
                    milestone.achieved 
                      ? "bg-primary/10 border-primary/30" 
                      : "bg-muted/30 border-border"
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className={`h-6 w-6 flex-shrink-0 ${milestone.achieved ? "text-primary" : "text-muted-foreground"}`} />
                  <div className="flex-1 space-y-1">
                    <div className="font-medium text-sm">{milestone.title}</div>
                    <div className="text-xs text-muted-foreground">{milestone.date}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-electric-blue/20 to-cyber-purple/20 border-electric-blue/30 animate-fade-in glow-hover">
              <CardContent className="pt-6 text-center">
                <div className="text-5xl font-bold text-electric-blue mb-2">24</div>
                <div className="text-muted-foreground">Skills Learned</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-glow-orange/20 to-electric-blue/20 border-glow-orange/30 animate-fade-in glow-hover" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-6 text-center">
                <div className="text-5xl font-bold text-glow-orange mb-2">156</div>
                <div className="text-muted-foreground">Hours Practiced</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-cyber-purple/20 to-glow-orange/20 border-cyber-purple/30 animate-fade-in glow-hover" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6 text-center">
                <div className="text-5xl font-bold text-cyber-purple mb-2">8</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
