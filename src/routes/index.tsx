import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-building.jpg";
import projectSolar from "@/assets/project-solar.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import { PageShell } from "@/components/site/PageShell";
import { Counter, Reveal } from "@/components/site/Reveal";
import {
  ArrowRight, Leaf, Sun, Droplets, Building2, BadgeCheck, Sparkles,
  Quote, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-20 pt-20">
        <img
          src={heroImg}
          alt="Sustainable green building with vertical gardens"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-leaf/30 blur-3xl animate-float" />
        <div className="absolute right-10 bottom-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container-x relative z-10 py-20">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em]">
              <Leaf className="h-3.5 w-3.5" /> Regenerative Architecture
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight">
              Buildings that <em className="italic text-accent">breathe</em><br/>
              with the planet.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Verdantia is a premium green building consultancy turning ambitious sustainability
              goals into certified, net-zero architecture — beautifully and measurably.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-hero">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn-ghost-light">
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-background">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8 py-14">
          {[
            { n: 320, s: "+", label: "Projects Delivered" },
            { n: 48, s: "M kWh", label: "Energy Saved Annually" },
            { n: 95, s: "%", label: "LEED/IGBC Success Rate" },
            { n: 18, s: " yrs", label: "Of Climate Expertise" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="text-center">
                <div className="font-display text-4xl md:text-5xl text-primary">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">What we do</p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-2xl">
                  Consulting that takes you from concept to certification.
                </h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                All services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0,6).map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-leaf text-primary-foreground shadow-soft">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT — WHY US */}
      <section className="py-24 bg-secondary/40">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img src={projectOffice} alt="LEED certified office" width={1024} height={768} loading="lazy"
                className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elegant p-5 max-w-[200px] hidden md:block">
                <BadgeCheck className="h-6 w-6 text-primary" />
                <p className="mt-2 text-sm font-medium">LEED Platinum certified — within budget.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Why choose Verdantia</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              A partner who measures impact, not just intent.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We blend deep climate science with elegant architectural craft. Every recommendation
              is backed by simulation, measurable in kWh, liters, and tonnes — and translated into
              spaces people genuinely love to inhabit.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Integrated team of architects, engineers & ESG analysts",
                "Proven track record across 14 countries",
                "Lifecycle thinking — from material to demolition",
                "Transparent reporting aligned with global frameworks",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary mt-0.5">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium">Featured work</p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl">Projects that prove it.</h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { img: projectSolar, title: "Helios Rooftop Farm", tag: "Solar + Biophilic" },
              { img: projectOffice, title: "Cedar Works HQ", tag: "LEED Platinum" },
              { img: projectVilla, title: "Banyan Residence", tag: "Net Zero Home" },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Link to="/projects" className="group block overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500">
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest text-primary">{p.tag}</p>
                    <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 20% 20%, white 0%, transparent 40%)" }} />
        <div className="container-x relative">
          <Reveal>
            <Quote className="h-10 w-10 text-accent" />
            <p className="mt-6 font-display text-3xl md:text-4xl leading-snug max-w-4xl">
              "Verdantia turned an ambitious net-zero brief into a building that actually performs.
              Energy use is 62% below baseline — and the team genuinely loves coming to work."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-accent/30" />
              <div>
                <p className="font-medium">Anika Rao</p>
                <p className="text-sm text-primary-foreground/70">Director, Cedar Works</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-secondary to-background p-10 md:p-16 text-center shadow-soft">
              <h2 className="font-display text-4xl md:text-5xl max-w-3xl mx-auto">
                Ready to build with the climate in mind?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Get a complimentary 30-minute strategy call with a senior consultant.
              </p>
              <Link to="/contact" className="btn-hero mt-8">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

export const SERVICES = [
  { icon: Building2, title: "Green Building Design", desc: "Holistic architectural design centered on passive performance, daylight, and human wellbeing." },
  { icon: Sun, title: "Energy Efficiency Consulting", desc: "Simulation-led strategies that cut operational energy by 40–70% without compromising comfort." },
  { icon: Leaf, title: "Sustainable Architecture", desc: "Low-carbon materials, circular construction, and biophilic detailing for timeless design." },
  { icon: Droplets, title: "Rainwater Harvesting", desc: "Integrated catchment, treatment and reuse systems that close the urban water loop." },
  { icon: Sun, title: "Solar Energy Solutions", desc: "Rooftop, BIPV and hybrid systems engineered for maximum yield and grid resilience." },
  { icon: BadgeCheck, title: "LEED / IGBC Certification", desc: "End-to-end documentation and submission support — Silver to Platinum, on the first try." },
];
