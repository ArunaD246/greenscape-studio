import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="gradient-soft border-b border-border">
      <div className="container-x py-20 lg:py-28 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
