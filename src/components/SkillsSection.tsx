const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Go", "Python", "Shell", "Rust", "TypeScript"],
  },
  {
    title: "Core CS",
    skills: ["Data Structures", "Algorithms", "OOP", "Multithreading"],
  },
  {
    title: "Systems",
    skills: ["Distributed Systems", "Concurrency", "Memory Management"],
  },
  {
    title: "Architecture",
    skills: ["Scalable Design", "Extensible Systems", "API Design"],
  },
  {
    title: "Performance",
    skills: ["Profiling", "Debugging", "Optimization", "gdb", "Valgrind", "perf"],
  },
  {
    title: "Platforms & Interfaces",
    skills: ["Linux", "Containers", "REST", "gRPC", "Async Services"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-12">
            Core <span className="gradient-text">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="glass-card p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;