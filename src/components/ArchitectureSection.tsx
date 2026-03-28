import { motion } from "framer-motion";
import { Database, Cpu, Smartphone, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Database,
    title: "Contextual Core",
    subtitle: "RAG & Transcreation",
    color: "bg-gradient-terracotta",
    items: [
      "Cultural Knowledge Base (CKB) — curated local history, folklore, agriculture",
      "Transcreation Layer — crop-yield math instead of retail-store examples",
      "LangChain/LlamaIndex connecting LLM to local vector database",
    ],
  },
  {
    icon: Cpu,
    title: "Emotion AI Engine",
    subtitle: "Engagement & Sentiment",
    color: "bg-gradient-sage",
    items: [
      "Voice-Stress Analysis detects frustration via pitch micro-fluctuations",
      "Engagement Biometrics — eye-tracking & interaction-speed metrics",
      'Adaptive Pacing — switches to "Storytelling" mode on boredom detection',
    ],
  },
  {
    icon: Smartphone,
    title: "Ethos-Tablet",
    subtitle: "Hardware Interface",
    color: "bg-gradient-amber",
    items: [
      "Solar-Charging Cases for off-grid schools",
      "Offline-First Storage with local CKB caching",
      "Edge Computing for on-device Emotion AI processing",
    ],
  },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium font-body mb-4">
            Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Local-Global Hybrid Model
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Three interconnected systems that make culturally adaptive learning possible.
          </p>
        </motion.div>

        {/* Transcreation Flow */}
        <motion.div
          className="mb-16 p-8 rounded-2xl bg-card border border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6 font-body">Transcreation Workflow</h3>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            {[
              { step: "Input", text: "Global Curriculum: Physics — Force & Motion" },
              { step: "Query", text: 'CKB Search: "Local examples of motion"' },
              { step: "Output", text: '"Let\'s learn Force by looking at how a water-mill grinds grain"' },
              { step: "Deliver", text: "Spoken in local dialect via high-quality TTS" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-4 flex-1">
                <div className="flex-1 p-4 rounded-xl bg-background border border-border">
                  <span className="text-xs font-bold text-primary font-body uppercase tracking-wider">
                    {item.step}
                  </span>
                  <p className="text-sm text-foreground font-body mt-2">{item.text}</p>
                </div>
                {i < 3 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block shrink-0" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="rounded-2xl overflow-hidden border border-border bg-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className={`${pillar.color} p-6 flex items-center gap-4`}>
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-foreground">{pillar.title}</h3>
                  <p className="text-sm text-primary-foreground/80 font-body">{pillar.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
