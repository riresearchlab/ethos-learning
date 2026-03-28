import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    weeks: "Weeks 1–6",
    title: "Knowledge Base Indexing",
    color: "bg-gradient-terracotta",
    tasks: [
      'Build the "Cultural Scraper" with local educators',
      "Digitize regional knowledge into Vector Embeddings (Pinecone / Milvus)",
      "MVP: Teach one math concept using three cultural lenses",
    ],
  },
  {
    phase: "Phase 2",
    weeks: "Weeks 7–12",
    title: "Multi-Modal LLM Fine-Tuning",
    color: "bg-gradient-sage",
    tasks: [
      "Fine-tune Llama-3 (8B) or Mistral using LoRA on local dialects",
      "Implement ElevenLabs API for voice delivery",
      "Integrate Emotion AI voice-stress analysis",
    ],
  },
  {
    phase: "Phase 3",
    weeks: "Weeks 13–18",
    title: "Hardware & Connectivity",
    color: "bg-gradient-amber",
    tasks: [
      'Optimize "Sync Protocol" with Edge Computing',
      "Local Emotion AI processing on tablet",
      "Analytics sync via low-energy Bluetooth or 2G/3G bursts",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium font-body mb-4">
            Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            18-Week Development Plan
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.phase}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                <div className="flex-1" />
                <div className="flex-1">
                  <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-warm transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-primary-foreground ${phase.color}`}>
                        {phase.phase}
                      </span>
                      <span className="text-sm text-muted-foreground font-body">{phase.weeks}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.tasks.map((task) => (
                        <li key={task} className="flex gap-3 text-sm text-muted-foreground font-body">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
