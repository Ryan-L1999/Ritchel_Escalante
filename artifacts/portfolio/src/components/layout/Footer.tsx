import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-border/40 text-center" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Maria Santos. Proudly TESDA Certified.
        </p>
      </div>
    </footer>
  );
};

export default Footer;