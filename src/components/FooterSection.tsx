import { Globe } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-terracotta-light" />
            <span className="text-2xl font-bold text-background font-display">Ethos-AI</span>
          </div>
          <p className="text-background/60 font-body mb-8 leading-relaxed">
            For technology to be truly global, it must be deeply local. Every child deserves to feel
            that science and math belong to them — not a distant culture.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-background/40 font-body">
            <span>FII Innovators Pitch 2026</span>
            <span className="w-1 h-1 rounded-full bg-background/20" />
            <span>Culture-First AI Education</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
