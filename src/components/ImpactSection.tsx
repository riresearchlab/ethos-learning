import { motion } from "framer-motion";
import { GraduationCap, Leaf, HeartHandshake, Cpu } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const pillars = [
  {
    icon: GraduationCap,
    title: "Education",
    description: 'Reduces systemic barriers by making "elite" curriculum culturally accessible to every learner.',
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Solar-powered hardware and digital-first curriculum reduce the carbon footprint of paper-based logistics.",
  },
  {
    icon: HeartHandshake,
    title: "Human Lives",
    description: "Connects local learning directly to regional economic prosperity and employment opportunities.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: 'Demonstrates ethical use of Emotion AI to support, not surveil, the learner.',
  },
];

const metrics = [
  { value: "<2s", label: "Voice Response Latency" },
  { value: "99+", label: "Languages Supported" },
  { value: "3x", label: "Cultural Lenses per Concept" },
  { value: "100%", label: "Offline Capability" },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url(${patternBg})`, backgroundSize: "cover" }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium font-body mb-4">
            FII Alignment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Impact & Scalability
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Aligned with FII 10th Edition goals — bridging cutting-edge technology with human prosperity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border text-center hover:shadow-warm transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-sage flex items-center justify-center mx-auto mb-4">
                <pillar.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          className="p-8 rounded-2xl bg-gradient-terracotta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-primary-foreground/80 text-sm font-medium font-body uppercase tracking-wider mb-8">
            Prototype Validation Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <span className="text-4xl md:text-5xl font-bold text-primary-foreground font-display">
                  {metric.value}
                </span>
                <p className="text-sm text-primary-foreground/70 font-body mt-2">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
