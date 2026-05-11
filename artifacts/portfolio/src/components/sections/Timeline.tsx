import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";

const Timeline = () => {
  const events = [
    {
      year: "2023 - Present",
      title: "Freelance Artisan & Consultant",
      organization: "Self-Employed",
      description: "Providing custom dressmaking services and specialty baked goods to private clients. Conducting personal beauty care sessions.",
      icon: <Briefcase size={20} />
    },
    {
      year: "2023",
      title: "Bread & Pastry Production NC II",
      organization: "TESDA Provincial Training Center",
      description: "Completed rigorous training in artisan baking, cake decorating, and pastry arts. Passed the national competency assessment.",
      icon: <Award size={20} />
    },
    {
      year: "2022",
      title: "Dressmaking NC II",
      organization: "Regional Technical Vocational School",
      description: "Mastered pattern making, garment construction, and finishing techniques for casual apparel.",
      icon: <Award size={20} />
    },
    {
      year: "2021",
      title: "Beauty Care NC II",
      organization: "TESDA Accredited Assessment Center",
      description: "Certified in comprehensive beauty care services including specialized massages and facial treatments.",
      icon: <Award size={20} />
    },
    {
      year: "2020",
      title: "Senior High School (TVL Track)",
      organization: "National High School",
      description: "Graduated with honors in the Technical-Vocational-Livelihood (TVL) track, laying the foundation for my specialized skills.",
      icon: <GraduationCap size={20} />
    }
  ];

  return (
    <section className="py-24 bg-background" id="timeline" data-testid="section-timeline">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl mb-4 text-foreground" data-testid="timeline-title">
            Education & Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            My path of continuous learning and professional development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center marker */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-background border-4 border-background shadow-md rounded-full flex items-center justify-center text-primary z-10 md:-translate-x-1/2 text-sm font-bold">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    {event.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="pl-20 md:pl-0 md:w-1/2">
                  <div className={`md:px-12 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <span className="inline-block py-1 px-3 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-3">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-1">{event.title}</h3>
                    <h4 className="text-primary font-medium mb-3">{event.organization}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
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

export default Timeline;