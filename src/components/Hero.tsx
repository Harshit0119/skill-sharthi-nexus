import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const scrollToChat = () => {
    const chatSection = document.querySelector("#chat");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 41, 0.7), rgba(0, 0, 0, 0.9)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-blue rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-glow-orange rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyber-purple rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Animated Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Skill Sharthi" 
              className="h-32 w-32 animate-glow-pulse drop-shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-electric-blue via-cyber-purple to-glow-orange bg-clip-text text-transparent animate-fade-in">
              Skill Sharthi
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your AI-Powered Learning Companion
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Experience personalized learning roadmaps, intelligent progress tracking, and agentic AI mentorship designed for the future of education
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              onClick={scrollToChat}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold glow-hover group"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Mumbai Hacks 2025
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-electric-blue">AI-Powered</div>
              <div className="text-sm text-muted-foreground">Intelligent Mentorship</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-glow-orange">Personalized</div>
              <div className="text-sm text-muted-foreground">Learning Roadmaps</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyber-purple">Real-time</div>
              <div className="text-sm text-muted-foreground">Progress Tracking</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-electric-blue rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
