import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Artisan Pastry Collection",
      category: "Bread & Pastry",
      image: "/images/baking-skill.png",
      description: "A delicate assortment of French-inspired pastries and artisanal breads prepared for a local cafe's grand opening."
    },
    {
      title: "Summer Floral Collection",
      category: "Dressmaking",
      image: "/images/dressmaking-skill.png",
      description: "Custom-tailored summer dresses featuring breathable fabrics and hand-stitched floral embellishments."
    },
    {
      title: "Holistic Wellness Spa Setup",
      category: "Beauty Care",
      image: "/images/beauty-skill.png",
      description: "Design and execution of a calming, professional spa environment prioritizing hygiene and client comfort."
    }
  ];

  return (
    <section className="py-24 bg-muted/50" id="portfolio" data-testid="section-portfolio">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h2 className="font-serif text-4xl mb-4 text-foreground" data-testid="portfolio-title">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg">
              A selection of projects that showcase my technical skills applied in real-world scenarios.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              data-testid={`portfolio-item-${index}`}
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-card">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight size={20} className="text-foreground" />
                </div>
              </div>
              <div>
                <div className="text-primary text-sm font-medium mb-2 tracking-wide uppercase">{project.category}</div>
                <h3 className="text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;