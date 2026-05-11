import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-muted/30" id="about" data-testid="section-about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden bg-background border-8 border-background shadow-xl">
                <img 
                  src="/images/beauty-skill.png" 
                  alt="Maria working on her craft" 
                  className="w-full h-full object-cover opacity-90"
                  data-testid="about-image"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-full shadow-lg hidden md:block">
                <Heart size={32} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <h2 className="font-serif text-4xl mb-6 text-foreground" data-testid="about-title">
              My Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                My journey began with a simple belief: that true beauty and quality come from dedication to one's craft. Growing up, I was always fascinated by the precision of a perfectly tailored dress and the delicate artistry of pastry making.
              </p>
              <p>
                Through the Technical Education and Skills Development Authority (TESDA), I transformed my passions into professional skills. The rigorous training taught me not just techniques, but discipline, patience, and the value of hard work.
              </p>
              <p>
                Today, I am proud to hold multiple National Certificates (NC II). Whether I'm creating a custom garment or crafting artisan pastries, my goal is always the same: to bring joy to others through my work.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Continuous Learner</h4>
                  <p className="text-sm text-muted-foreground mt-1">Always refining my skills</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-2xl text-secondary-foreground">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Detail Oriented</h4>
                  <p className="text-sm text-muted-foreground mt-1">Focusing on the little things</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;