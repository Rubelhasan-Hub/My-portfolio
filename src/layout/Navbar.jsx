import { Menu, X } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
]


const Navbar = () => {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="relative inline-block text-xl font-bold tracking-tight transition-colors duration-300hover:text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:w-full">
                    Rubel Hasan <span className="text-primary font-bold">|</span>
                </a>
                <div className="hidden md:flex items-center gap-1 ">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-10">
                        {navLinks.map((navLink, index) => <a href={navLink.href} key={index} className="px-4 py-2 text-gray-300 hover:text-foreground rounded-full hover:bg-surface relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full">{navLink.label}</a>)}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button size="sm">Reach Out</Button>
                </div>

                {/* Mobile menu button are here */}
                <button onClick={()=> setIsMobileMenuOpen((currentValue)=> !currentValue)} className="md:hidden p-2 text-foreground">
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu */}

            {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((navLink, index) => <a href={navLink.href} key={index} className="text-lg text-white hover:text-foreground py-2
                    ">{navLink.label}</a>)}

                    <Button onClick={() => setIsMobileMenuOpen(false)}>
                        Contact Me
                    </Button>
                </div>
            </div>)}
        </header>
    );
};

export default Navbar;