import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-heading mb-4">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm open to Senior / Staff backend and distributed systems opportunities.
          </p>

          <div className="glass-card p-8 mb-8">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
              <MapPin className="h-5 w-5" />
              <span>Based in Hyderabad · Open to Remote & Relocation</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:rahul@example.com">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                  <Mail className="h-5 w-5 mr-2" />
                  Get in Touch
                </Button>
              </a>
              <a href="https://github.com/iamrahulgupta" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary/50 font-semibold">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="https://linkedin.com/in/iamrahulgupta" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary/50 font-semibold">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;