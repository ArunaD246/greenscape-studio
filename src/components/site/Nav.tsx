import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 place-items-center rounded-full gradient-leaf text-primary-foreground shadow-soft transition-transform group-hover:scale-105">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-xl tracking-tight">
            Verdantia<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active ? "text-primary" : "text-foreground/75 hover:text-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-hero !py-2.5 !px-5">
            Free Consultation
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-background/70"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-3 rounded-lg text-sm font-medium hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-hero mt-2 self-start">Free Consultation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
