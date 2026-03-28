import { motion } from "framer-motion";
import heroImage from "@/assets/hero-ethos.jpg";
import { Globe, BookOpen, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-warm">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-terracotta/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-sage/5 blur-3xl" />

      <div className="container mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium font-body">
                FII Innovators Pitch
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-gradient-primary">Ethos-AI</span>
              <br />
              <span className="text-foreground">The Cultural</span>
              <br />
              <span className="text-foreground">Context Tutor</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 font-body leading-relaxed">
              For technology to be truly global, it must be deeply local. We transcreate curriculum into cultural frameworks—not just translate words.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <motion.a
                href="#architecture"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-terracotta text-primary-foreground font-medium shadow-warm hover:shadow-warm-lg transition-shadow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore the Platform
              </motion.a>
              <motion.a
                href="#problem"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary/20 text-foreground font-medium hover:border-primary/40 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </div>

            <div className="flex gap-8">
              {[
                { icon: Globe, label: "99+ Languages" },
                { icon: BookOpen, label: "Culture-First" },
                { icon: Heart, label: "Emotion AI" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium font-body">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              <img
                src={heroImage}
                alt="Diverse children learning together with AI technology in a culturally rich setting"
                width={1920}
                height={1024}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-warm border border-border"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-muted-foreground font-body">Transcreation Example</p>
              <p className="text-sm font-semibold text-foreground font-body mt-1">
                "Force = How a water-mill grinds grain"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
