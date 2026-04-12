import { ArrowRight, Download, GitBranchIcon } from "lucide-react";
import Button from "../components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
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
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Software Engineer • React Specialist
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    precision.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Pedro Machado — a software engineer specializing in
                                React, Next.js, and TypeScript. I build scalable, performant web
                                applications that users love.
                            </p>
                        </div>

                        {/* Call to action section */}
                        <div className="flex gap-2">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5"></ArrowRight>
                            </Button>
                            <button>
                                <AnimatedBorderButton>
                                    Download CV <Download></Download>
                                </AnimatedBorderButton>
                            </button>
                        </div>

                        {/* Social LInks */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow: </span>
                            {[
                                { icon: FaGithub, href: "#" },
                                { icon: GrLinkedin, href: "#" },
                                { icon: SiDiscord, href: "#" },
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"><social.icon className="w-5 h-5"/></a>
                            ))}
                        </div>


                    </div>

                    {/* Right side for image */}
                    <div className="relative animate-fade-in">
                        <div>
                            <div className="flex justify-center rounded-3xl p-2">
                                <img src="/public/hero-person.jpg" alt="Rubel Hasan's image" className="w-[65%] object-right lg:aspect-7/10 glow-border glass rounded-3xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};
