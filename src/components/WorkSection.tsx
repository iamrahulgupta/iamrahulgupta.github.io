import { Shield, Lock, Zap } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "Oblivious DNS over HTTPS (ODoH)",
    description: "Architected and implemented privacy-preserving DNS protocol enhancements improving compliance and performance.",
    tags: ["Privacy", "DNS", "Performance"],
  },
  {
    icon: Lock,
    title: "DNS over TLS (DoT)",
    description: "Modernized enterprise DNS stack with secure transport integration and optimized request handling.",
    tags: ["Security", "TLS", "Enterprise"],
  },
  {
    icon: Zap,
    title: "High-Throughput Telecom Mediation",
    description: "Built C++ multi-threaded backend services processing telecom CDRs at scale.",
    tags: ["C++", "Multithreading", "Scale"],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-4">
            Selected <span className="gradient-text">Systems Work</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Production-grade distributed systems built for security, performance, and scale.
          </p>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card p-6 md:p-8 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;