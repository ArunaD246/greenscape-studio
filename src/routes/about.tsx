import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Counter, Reveal } from "@/components/site/Reveal";
import projectOffice from "@/assets/project-office.jpg";
import { Compass, Sprout, ShieldCheck, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Verdantia Green Building Consultancy" },
      { name: "description", content: "Meet Verdantia: 18 years of climate-positive architecture, integrated engineering, and certified results." },
    ],
  }),
});

function About() {
  return (
    <PageShell>
      <PageHero eyebrow="About us" title="Architects of a regenerative future." subtitle="We are designers, engineers and ecologists united by one belief — buildings should give more than they take." />

      <section className="container-x py-20 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <img src={projectOffice} width={1024} height={768} loading="lazy" alt="LEED office" className="rounded-3xl shadow-elegant aspect-[4/3] object-cover w-full" />
        </Reveal>
        <Reveal delay={100}>
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Our story</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">From a small studio to a global practice.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Verdantia began in 2007 as a three-person studio convinced that climate goals and design
            elegance were not opposites. Today we work alongside developers, governments and
            visionaries across 14 countries — quietly delivering some of the most measurably
            sustainable buildings in their region.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our integrated team brings architects, MEP engineers, ESG analysts and material
            scientists under one roof — so sustainability is designed in, never bolted on.
          </p>
        </Reveal>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container-x grid md:grid-cols-2 gap-10">
          {[
            { icon: Compass, title: "Mission", text: "To prove that profitable buildings can also be the most climate-positive ones — and to make that the new normal." },
            { icon: Sprout, title: "Vision", text: "A built environment that regenerates ecosystems, restores communities, and respects planetary boundaries." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i*80}>
              <div className="rounded-2xl bg-card border border-border p-8 h-full">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-leaf text-primary-foreground"><b.icon className="h-5 w-5" /></div>
                <h3 className="mt-5 font-display text-2xl">{b.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium text-center">Why choose us</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-center max-w-3xl mx-auto">Numbers that quietly speak for our practice.</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: 320, s: "+", label: "Buildings designed" },
            { n: 14, s: "", label: "Countries served" },
            { n: 62, s: "%", label: "Avg. energy reduction" },
            { n: 100, s: "%", label: "Client referencability" },
          ].map((s,i)=>(
            <Reveal key={i} delay={i*70}>
              <div className="rounded-2xl border border-border p-8 text-center">
                <div className="font-display text-4xl text-primary"><Counter to={s.n} suffix={s.s} /></div>
                <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Certified expertise", text: "LEED APs, IGBC APs, WELL APs, and PHIs in-house." },
            { icon: Users, title: "Integrated team", text: "Architects, engineers and ESG analysts collaborating from day zero." },
            { icon: Sprout, title: "Lifecycle thinking", text: "We design for the building's entire lifespan — including its end." },
          ].map((b,i) => (
            <Reveal key={b.title} delay={i*60}>
              <div className="rounded-2xl border border-border bg-card p-7 h-full hover:shadow-soft transition-shadow">
                <b.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-xl">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="btn-hero">Work with us</Link>
        </div>
      </section>
    </PageShell>
  );
}
