import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
export function PortfolioHeader() {
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const NavLinksContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
          className="cursor-pointer text-xs font-bold uppercase tracking-widest text-portfolio-primary/60 transition-all hover:text-portfolio-primary hover:drop-shadow-[0_0_8px_rgba(30,64,175,0.3)] pb-1 border-b-2 border-transparent"
          activeClass="!text-portfolio-primary !border-portfolio-primary"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        hasScrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md border-b border-slate-200/50 h-16"
          : "bg-transparent h-20"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
            className="cursor-pointer text-lg sm:text-xl md:text-2xl font-black font-display text-slate-950 tracking-tighter leading-tight hover:text-blue-700 hover:scale-[1.02] transition-all"
          >
            Vishal Kumar Maurya
          </Link>
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLinksContent />
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                  <Menu className="h-6 w-6 text-slate-950" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-slate-100 bg-white/95 backdrop-blur-xl">
                <nav className="flex flex-col items-center space-y-8 mt-16">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        className="cursor-pointer text-xl font-black font-display uppercase tracking-tighter text-slate-400 transition-colors hover:text-portfolio-primary"
                        activeClass="text-portfolio-primary"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}