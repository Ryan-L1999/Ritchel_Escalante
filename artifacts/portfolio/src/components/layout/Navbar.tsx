import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
      data-testid="navbar"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight text-foreground hover:text-primary transition-colors" data-testid="nav-logo">
          Maria Santos
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors" data-testid="nav-link-about">About</a>
          <a href="#skills" className="hover:text-primary transition-colors" data-testid="nav-link-skills">Skills</a>
          <a href="#portfolio" className="hover:text-primary transition-colors" data-testid="nav-link-portfolio">Portfolio</a>
          <a href="#timeline" className="hover:text-primary transition-colors" data-testid="nav-link-timeline">Journey</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm" data-testid="nav-link-contact">
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;