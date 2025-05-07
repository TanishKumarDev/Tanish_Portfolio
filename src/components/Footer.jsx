import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-start">
      <div className="w-full flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
      
      <div className="w-full mt-6 flex justify-start space-x-6">
        <a
          href="https://github.com/TanishKumarDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/tanish_29/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://leetcode.com/u/tanish2_9/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-accent transition-colors"
        >
          LeetCode
        </a>
      </div>
    </footer>
  );
};
