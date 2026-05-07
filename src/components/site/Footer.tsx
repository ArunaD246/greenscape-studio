import { Link } from "@tanstack/react-router";
import { Leaf, Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-full gradient-leaf text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display text-xl">Verdantia.</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Designing tomorrow's buildings with the wisdom of nature — sustainable, certified, and beautifully human.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/70">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[["About","/about"],["Services","/services"],["Projects","/projects"],["Blog","/blog"],["Contact","/contact"]].map(([l, h]) => (
              <li key={h}><Link to={h} className="text-muted-foreground hover:text-primary transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/70">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-primary"/> 24 Banyan Road, Bengaluru 560001</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-primary"/> +91 80 4567 8910</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-primary"/> hello@verdantia.eco</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground/70">Newsletter</h4>
          <p className="mt-4 text-sm text-muted-foreground">Quarterly insights on sustainable design.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}
            className="mt-4 flex rounded-full border border-border bg-background overflow-hidden"
          >
            <input
              required
              type="email"
              placeholder="you@example.com"
              className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
            />
            <button className="px-5 text-sm font-medium gradient-leaf text-primary-foreground">Join</button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Verdantia Green Building Consultancy. All rights reserved.</p>
          <p>Crafted with care for a regenerative future 🌿</p>
        </div>
      </div>
    </footer>
  );
}
