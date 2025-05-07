import { Code, Puzzle } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative text-left">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-black tracking-tight">
              Tanish Kumar
            </h1>

            <h3 className="text-sm font-semibold ">
              Frontend Dev | DTU | Ex-Intern @ TechMahindra | StartupX | Roundtable | SAE | DSEU
            </h3>

            <p className="text-muted-foreground">
              I have hands-on experience as an intern at Tech Mahindra, where I worked on building real-world web applications using the latest technologies. I specialize in full-stack development with a focus on creating responsive and user-friendly interfaces.
            </p>

            <p className="text-muted-foreground">
              I'm driven by problem-solving and constantly enhancing my skills to stay ahead in the fast-paced world of web development. Whether it's front-end or back-end, I am committed to crafting elegant and efficient solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Web Development */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Dev</h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic websites using modern technologies and frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem Solving */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Passionate about solving complex problems with optimal, efficient solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
