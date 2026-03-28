import { motion } from "framer-motion";
import { AlertTriangle, Users, Brain } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "Western-Centric AI Bias",
    description:
      'Current LLMs are trained on Western datasets. Using "snow" to explain states of matter alienates students in tropical regions, causing cognitive friction and disengagement.',
    stat: "80%",
    statLabel: "of AI training data is Western-centric",
  },
  {
    icon: Users,
    title: "Educator Overload",
    description:
      "In under-resourced regions, teacher-to-student ratios exceed 1:60. Educators lack bandwidth to personalize instruction, and digital tools provide abstract, non-actionable data.",
    stat: "1:60+",
    statLabel: "teacher-to-student ratio in underserved areas",
  },
  {
    icon: AlertTriangle,
    title: "Digital Dropout",
    description:
      "When learning materials don't resonate culturally, students disengage. Generic AI tutors impose individualistic logic on communal cultures, leading to high dropout rates.",
    stat: "45%",
    statLabel: "higher dropout in culturally mismatched programs",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium font-body mb-4">
            The Challenge
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Pedagogical Divide
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            A systemic gap where technology fails to meet learners on their own cultural ground.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="h-full p-8 rounded-2xl bg-background border border-border hover:shadow-warm transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-terracotta flex items-center justify-center mb-6">
                  <problem.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {problem.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <span className="text-3xl font-bold text-gradient-primary">{problem.stat}</span>
                  <p className="text-sm text-muted-foreground font-body mt-1">{problem.statLabel}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
