import { Brain, Target, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Agentic AI",
      description: "Advanced AI that understands your learning style and adapts to your pace",
      color: "text-electric-blue"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Set clear objectives and let our AI create personalized roadmaps",
      color: "text-glow-orange"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Visualize your growth with detailed analytics and milestones",
      color: "text-cyber-purple"
    },
    {
      icon: Zap,
      title: "Smart Scheduling",
      description: "Optimize your study sessions with intelligent calendar integration",
      color: "text-electric-blue"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-electric-blue to-cyber-purple bg-clip-text text-transparent">
              About Skill Sharthi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing education through intelligent AI mentorship and personalized learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-lg border-border hover:border-primary transition-all duration-300 hover:scale-105 glow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center space-y-4">
                <div className={`inline-flex p-4 rounded-full bg-navy-light ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-navy-deep to-navy-light border border-border rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Empowering Learners with{" "}
                <span className="text-electric-blue">AI Innovation</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Skill Sharthi combines cutting-edge artificial intelligence with proven learning methodologies to create a truly personalized educational experience. Our platform analyzes your goals, tracks your progress, and provides intelligent guidance every step of the way.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Built for Mumbai Hacks 2025, we're showcasing the future of education where technology and human potential converge to unlock unprecedented learning outcomes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-deep border border-electric-blue/30 rounded-xl p-6 text-center animate-float">
                <div className="text-3xl font-bold text-electric-blue mb-2">100%</div>
                <div className="text-sm text-muted-foreground">AI-Driven</div>
              </div>
              <div className="bg-navy-deep border border-glow-orange/30 rounded-xl p-6 text-center animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-3xl font-bold text-glow-orange mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
              <div className="bg-navy-deep border border-cyber-purple/30 rounded-xl p-6 text-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-3xl font-bold text-cyber-purple mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Scalable</div>
              </div>
              <div className="bg-navy-deep border border-electric-blue/30 rounded-xl p-6 text-center animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-3xl font-bold text-electric-blue mb-2">Smart</div>
                <div className="text-sm text-muted-foreground">Adaptive</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
