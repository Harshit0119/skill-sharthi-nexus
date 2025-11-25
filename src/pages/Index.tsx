import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Chat } from "@/components/Chat";
import { Progress } from "@/components/Progress";
import { Roadmap } from "@/components/Roadmap";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Chat />
      <Roadmap />
      <Progress />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
