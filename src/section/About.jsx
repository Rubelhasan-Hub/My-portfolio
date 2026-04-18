import { Code2, Rocket } from "lucide-react";
import { FcCollaboration } from "react-icons/fc";


const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "I write clean and maintainable code, following best practices and industry standards to ensure our projects are scalable and easy to understand."
    },
    {
        icon: Rocket,
        title: "Fast Delivery",
        description: "I am committed to delivering high-quality work on time, ensuring that our projects are completed efficiently and meet the expectations of our clients."
    },
    {
        icon: FcCollaboration,
        title: "Collaboration",
        description: "I believe in the power of teamwork and collaboration, working closely with my colleagues to achieve our goals and deliver exceptional results."

    }
]

const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building smart UI,
                            <span className="font-serif italic font-normal text-white">
                                {" "}
                                one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                            <p>
                                I'm a passionate frontend developer with around 1 year of experience building modern web applications. My journey started with curiosity about how websites work, and it has grown into a strong interest in creating clean, interactive, and user-friendly interfaces.
                            </p>
                            <p>
                                I work mainly with React and Next.js, along with JavaScript and Tailwind CSS. I enjoy building responsive UI, managing state, and turning ideas into real, functional products—from simple landing pages to more dynamic web apps.
                            </p>
                            <p>
                                I'm constantly learning new technologies, improving my skills, and exploring better ways to write clean and efficient code. My goal is to grow as a developer and build impactful digital experiences.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                            <p className="text-lg font-medium italic text-foreground">
                                "My mission is to create digital experiences that are not just
                                functional, but truly delightful — products that users love to
                                use and developers love to maintain."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;