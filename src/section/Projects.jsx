import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    id: "flexflow",
    title: "FLEXFLOW",
    description:
      "FlexFlow is a modern, full-stack web application designed to bridge the gap between fitness trainers and health enthusiasts. It provides a seamless platform for class scheduling, professional booking management, and interactive community engagement.",
    image: "/Image/project-5.png",
    tags: ["Node.js", "Express.js", "Next.js", "React", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
  {
    id: "docappointment",
    title: "DocAppointment",
    description:
      "Finding the right healthcare provider and booking medical consultations shouldn't be a hassle. To make healthcare more accessible and streamlined, I developed DocAppointment—a modern, responsive, and user-friendly web application designed to connect patients with top healthcare professionals effortlessly.",
    image: "/Image/project-6.png",
    tags: ["Express.js", "Node.js", "Next.js", "React", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
  {
    id: "keen-keeper",
    title: "keen-keeper",
    description:
      "KeenKeeper is a clean and interactive relationship management app designed to track friendships, monitor communication patterns, and enable quick check-ins like call, text, and video in one place.",
    image: "/Image/project1.png",
    tags: ["Next.js", "React", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
  {
    id: "digitools-platform",
    title: "DigiTools-Platform",
    description:
      "A fast and modern web app to explore and purchase premium digital assets like AI tools, design templates, and stock resources. Built with React & Vite, it offers a smooth shopping experience with cart management, real-time price updates, simple checkout, and instant action-based notifications.",
    image: "/Image/project2.png",
    tags: ["Next.js", "React", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
  {
    id: "english-janala",
    title: "English Janala",
    description:
      "An interactive English learning app where users can explore lesson-based vocabulary, view meanings and pronunciation, and access detailed information through a modal for better understanding.",
    image: "/Image/project3.png",
    tags: ["JavaScript", "Tailwind", "HTML", "CSS"],
  },
  {
    id: "github-issue-tracker",
    title: "GitHub Issues Tracker",
    description:
      "A simple GitHub Issues Tracker web app where users can log in and view issues in card format. It shows total issues, filter by open/closed status, and allows searching issues easily. Built with modern frontend technologies.",
    image: "/Image/project4.png",
    tags: ["React", "JavaScript", "Tailwind", "HTML", "CSS"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid (At least 3 Projects) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col justify-between border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div>
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>

                {/* Project Name & Description */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View More / Details Button */}
              <div className="p-6 pt-0">
                <Link
                  to={`/project/${project.id}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground font-medium text-sm transition-all duration-300"
                >
                  View More / Details <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};