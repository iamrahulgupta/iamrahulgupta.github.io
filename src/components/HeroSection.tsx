import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 hero-glow" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Open to Senior / Staff Roles</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Senior Software
            <br />
            <span className="gradient-text">Engineer</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Building secure, high-throughput distributed systems.
          </p>

          {/* Skills tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <span className="skill-badge">DNS Security</span>
            <span className="skill-badge">Performance Engineering</span>
            <span className="skill-badge">Systems Architecture</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              <Mail className="h-5 w-5 mr-2" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary/50 font-semibold px-8">
              View My Work
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <a href="https://github.com/iamrahulgupta" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/iamrahulgupta" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:mailgupta.rahul@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;