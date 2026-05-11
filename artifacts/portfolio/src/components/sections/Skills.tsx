import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Scissors, Sparkles, CheckCircle2 } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      title: "Bread & Pastry Production NC II",
      icon: <ChefHat size={32} />,
      color: "bg-orange-100 text-orange-800",
      description: "Mastery in preparing and producing bakery products, pastry products, gateaux, tortes, and cakes.",
      competencies: [
        "Prepare bakery products",
        "Prepare pastry products",
        "Prepare gateaux, tortes and cakes",
        "Prepare and display petit fours"
      ]
    },
    {
      title: "Dressmaking NC II",
      icon: <Scissors size={32} />,
      color: "bg-rose-100 text-rose-800",
      description: "Proficiency in drafting and cutting pattern, laying-out pattern on the material, sewing and applying finishing touches.",
      competencies: [
        "Draft and cut pattern for casual apparel",
        "Prepare and cut materials",
        "Sew casual apparel",
        "Apply finishing touches"
      ]
    },
    {
      title: "Beauty Care NC II",
      icon: <Sparkles size={32} />,
      color: "bg-teal-100 text-teal-800",
      description: "Expertise in performing pre- and post-beauty care services, performing hand spa, body massage and facial treatment.",
      competencies: [
        "Perform hand spa",
        "Perform body massage",
        "Perform facial treatment",
        "Maintain beauty care environment"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-background" id="skills" data-testid="section-skills">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl mb-4 text-foreground" data-testid="skills-title">
              TESDA Qualifications
            </h2>
            <p className="text-muted-foreground text-lg">
              Proudly certified and formally trained. These qualifications represent hours of rigorous practice, assessment, and dedication to excellence.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-card border border-card-border rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow group"
              data-testid={`skill-card-${index}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${skill.color} group-hover:scale-110 transition-transform duration-500`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{skill.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {skill.description}
              </p>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Core Competencies</h4>
                <ul className="space-y-2">
                  {skill.competencies.map((comp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;