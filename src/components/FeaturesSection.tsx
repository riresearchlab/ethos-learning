import { motion } from "framer-motion";
import { BarChart3, Map, Briefcase, Flame, Bell, BookMarked } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Conceptual Heatmaps",
    description: "Visualizes which parts of each lesson the class struggles with, giving teachers real-time insight into collective understanding gaps.",
    category: "Teacher Dashboard",
  },
  {
    icon: Bell,
    title: "Early Warning System",
    description: "Flags students showing persistent high-stress levels during specific modules, enabling timely intervention before dropout.",
    category: "Teacher Dashboard",
  },
  {
    icon: BookMarked,
    title: "Curriculum Suggestions",
    description: "Recommends local physical activities and cultural exercises to reinforce digital concepts in the real world.",
    category: "Teacher Dashboard",
  },
  {
    icon: Map,
    title: "Cultural Transcreation",
    description: "Grounds physics, math, and science in local agriculture, folklore, and regional economics — not generic Western metaphors.",
    category: "Student Experience",
  },
  {
    icon: Flame,
    title: "Adaptive Storytelling",
    description: "When boredom is detected, the AI switches from instruction to culturally relevant storytelling to re-engage the learner.",
    category: "Emotion AI",
  },
  {
    icon: Briefcase,
    title: "Career-Path Mapping",
    description: '"Mastering this chemistry module prepares you for a career in the sustainable fertilizer plant opening in your province."',
    category: "Future Connect",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/30 text-accent-foreground text-sm font-medium font-body mb-4">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for Impact
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Every feature is designed to serve both the student and the educator, bridging digital and cultural learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-2xl bg-background border border-border hover:shadow-warm transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-terracotta transition-colors">
                  <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-xs font-medium text-muted-foreground font-body uppercase tracking-wider">
                  {feature.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
