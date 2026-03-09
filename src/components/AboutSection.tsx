const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-8">
            <span className="gradient-text">About</span> Me
          </h2>
          
          <div className="glass-card p-8 md:p-10">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">13+ years</span> designing and optimizing 
              large-scale backend systems across networking and distributed platforms. Strong{" "}
              <span className="text-primary">C/C++ systems foundation</span>, with production experience 
              in Go and Python. Deep focus on DNS security (DoT, DoH, ODoH), multithreading, memory safety, 
              and low-latency services.
            </p>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <h3 className="font-display text-lg font-semibold mb-4 text-foreground">Currently Exploring</h3>
              <div className="glass-card p-6 bg-secondary/30">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">StreamForge</h4>
                    <p className="text-muted-foreground text-sm">
                      Distributed event streaming platform (Rust broker, C++ storage, Go admin CLI) 
                      for high-throughput, low-latency data pipelines.
                    </p>
                    <a 
                      href="https://github.com/iamrahulgupta/project-streamforge" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium mt-3 transition-colors"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
