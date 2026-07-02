import { ArrowRight, ChevronDown, Download, GitBranchIcon } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";
import Button from "../components/Button";

export const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf";
        link.download = "Rubel-Hasan-CV.pdf";
        link.click();
    };

    const skills = [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Vercel",
        "javascript",
        "Figma",
        "Git",
        "GitHub Actions",
    ];
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20
                                }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 flex">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8 transition-transform duration-500 hover:scale-103">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Full Stack Web Developer •  React Specialist
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Building <span className="text-primary glow-text">Modern</span>
                                <br />
                                web experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    JavaScript, React, Next.js & node.js.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                I am Rubel Hasan, a passionate full-stack web developer with over 1 years of experience specializing in React and Next.js. I create modern, responsive web applications that deliver exceptional user experiences.
                            </p>
                        </div>

                        {/* Call to action section */}
                        <div className="flex gap-2">
                            <Button size="lg">
                                Contact Me <ArrowRight />
                            </Button>

                            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                                <AnimatedBorderButton onClick={handleDownload}>
                                    <span className="hidden lg:block">Download</span> CV <Download />
                                </AnimatedBorderButton>
                            </a>
                        </div>

                        {/* Social LInks */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow: </span>
                            {[
                                { icon: FaGithub, href: "https://github.com/Rubelhasan-Hub" },
                                { icon: GrLinkedin, href: "https://www.linkedin.com/in/rubelhasan-/" },
                                { icon: SiDiscord, href: "https://discord.com/users/997819259315032129" },
                            ].map((social, idx) => (
                                <a target="_blank" key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"><social.icon className="w-5 h-5" /></a>
                            ))}
                        </div>


                    </div>

                    {/* Right side for image */}
                    <div className="relative animate-fade-in animate-delay-300 ">
                        <div >
                            <div >
                                <div className="flex justify-center rounded-3xl p-2">
                                    <img src="/hero-person.jpg" alt="Rubel Hasan's image" className="w-[65%] object-right glow-border glass rounded-3xl transition-transform duration-500 hover:scale-105" />


                                    {/* Floating badge */}
                                    <div className="absolute -bottom-4 lg:bottom-20 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-puls" />
                                            <span className="text-sm font-medium">Available For Work</span>
                                        </div>
                                    </div>
                                    {/* State badge */}
                                    <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                        <div className="text-3xl font-bold text-primary">1+</div>
                                        <div className="text-xl text-muted-foreground">Years Exp.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-14 space-y-8">
                {/* Technologies marquee */}
                <div className="animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                        Technologies I work with
                    </p>

                    <div className="relative max-w-5xl mx-auto overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-background to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-background to-transparent z-10" />

                        <div className="flex w-max animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="shrink-0 px-6 py-3">
                                    <span className="text-base md:text-lg font-medium text-muted-foreground/70 hover:text-primary transition-colors duration-300">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll button */}
                <div className="flex justify-center animate-fade-in animation-delay-800">
                    <a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <span className="text-xs tracking-widest uppercase">Scroll</span>
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </a>
                </div>
            </div>
        </section >
    );
};
