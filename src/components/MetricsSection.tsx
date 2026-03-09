const metrics = [
  {
    value: "13+",
    label: "Years Experience",
    description: "Systems & Backend Engineering",
  },
  {
    value: "DNS",
    label: "Security Specialist",
    description: "DoT, DoH, ODoH Enterprise",
  },
  {
    value: "High",
    label: "Throughput Systems",
    description: "Low-Latency Networking",
  },
  {
    value: "E2E",
    label: "Ownership",
    description: "Architecture → Rollout",
  },
];

const MetricsSection = () => {
  return (
    <section className="py-20 border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {metric.value}
              </div>
              <div className="font-semibold text-foreground mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;