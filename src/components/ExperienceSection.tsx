const experiences = [
  {
    title: "Senior Software Engineer",
    company: "F5 Inc.",
    period: "2022 – 2025",
    description: "Owned DNS security features, ODoH implementation, and performance optimization in BIG-IP DNS.",
    current: true,
  },
  {
    title: "Software Engineer III",
    company: "F5 Inc.",
    period: "2020 – 2022",
    description: "Implemented DNS over TLS and enhanced enterprise networking stack.",
    current: false,
  },
  {
    title: "Associate Consultant",
    company: "GlobalLogic",
    period: "2019 – 2020",
    description: "Developed C++ distributed mediation systems for telecom platforms.",
    current: false,
  },
  {
    title: "Software Engineer → Senior → Tech Lead",
    company: "Capgemini Engineering",
    period: "2012 – 2018",
    description: "Designed backend telecom billing systems with strong concurrency focus.",
    current: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-12">
            Career <span className="gradient-text">Timeline</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-1.5 md:-translate-x-2 mt-1.5">
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass-card p-6">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-sm font-medium text-primary">{exp.period}</span>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;