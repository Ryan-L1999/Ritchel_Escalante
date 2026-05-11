import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden" id="hero" data-testid="section-hero">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20" data-testid="hero-badge">
            <Award size={16} />
            <span>TESDA Certified Professional</span>
          </div>
          
          <h1 className="font-serif text-5xl lg:text-7xl tracking-tight leading-[1.1] mb-6 text-foreground" data-testid="hero-title">
            Crafting beauty through <span className="text-primary italic">skill & care.</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md" data-testid="hero-subtitle">
            Mabuhay! I'm Maria, a passionate artisan bringing technical excellence and personal warmth to bread & pastry production and beauty care.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all font-medium" data-testid="hero-cta-work">
              View my work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent text-foreground border border-border hover:bg-muted transition-all font-medium" data-testid="hero-cta-contact">
              Let's connect
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-muted relative z-10 border-8 border-background shadow-2xl">
            <img 
              src="/images/hero-portrait.png" 
              alt="Maria Santos Portrait" 
              className="w-full h-full object-cover"
              data-testid="hero-image"
            />
          </div>
          {/* Decorative frame */}
          <div className="absolute -inset-4 rounded-[3rem] border border-primary/20 -z-0 rotate-3 transition-transform hover:rotate-6 duration-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;