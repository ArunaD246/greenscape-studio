import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "./index";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Verdantia Green Building Consultancy" },
      { name: "description", content: "Green building design, energy efficiency, solar, rainwater harvesting and LEED/IGBC certification support." },
    ],
  }),
});

const FAQS = [
  { q: "How early should we engage a sustainability consultant?", a: "Ideally at the concept stage. Decisions made in the first 10% of a project influence over 70% of its lifecycle impact." },
  { q: "Do you guarantee certification outcomes?", a: "We have a 95% first-attempt success rate across LEED, IGBC and GRIHA — and provide a clear, milestone-based engagement model." },
  { q: "Can existing buildings be retrofitted?", a: "Yes. Retrofits typically deliver 30–55% energy savings with payback periods of 3–7 years." },
  { q: "Do you work outside India?", a: "We have delivered projects in 14 countries and work remotely with local execution partners." },
];

function Services() {
  return (
    <PageShell>
      <PageHero eyebrow="Services" title="End-to-end sustainability, by design." subtitle="From early concept simulations to final certification submission — we make the complex feel effortless." />

      <section className="container-x py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i*60}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-leaf text-primary-foreground"><s.icon className="h-5 w-5" /></div>
                <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full gradient-leaf" style={{ width: `${70 + (i*4)}%` }} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">Avg. impact: {70 + i*4}% benchmark improvement</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium text-center">FAQ</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-center">Questions we hear often.</h2>
          </Reveal>
          <div className="mt-12 max-w-3xl mx-auto space-y-3">
            {FAQS.map((f, i) => <FaqItem key={i} {...f} />)}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="btn-hero">Book a free consultation</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-medium">{q}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
