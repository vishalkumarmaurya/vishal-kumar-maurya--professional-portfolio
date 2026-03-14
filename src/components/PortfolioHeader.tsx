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
          duration={500}
          className="cursor-pointer text-lg font-medium text-portfolio-primary/70 transition-colors hover:text-portfolio-primary"
          activeClass="text-portfolio-primary font-bold"
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
          ? "bg-portfolio-background/80 shadow-md backdrop-blur-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer text-xl md:text-2xl font-bold font-display text-portfolio-primary"
          >
            Vishal Kumar Maurya
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinksContent />
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-portfolio-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col items-center space-y-8 mt-16">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.name}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className="cursor-pointer text-2xl font-medium text-portfolio-primary/70 transition-colors hover:text-portfolio-primary"
                        activeClass="text-portfolio-primary font-bold"
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