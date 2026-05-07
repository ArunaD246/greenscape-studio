import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import projectSolar from "@/assets/project-solar.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectSchool from "@/assets/project-school.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title: "Insights — Verdantia Journal" },
      { name: "description", content: "Tips, research and reflections on sustainable architecture and regenerative living." },
    ],
  }),
});

const POSTS = [
  { img: projectSolar, cat: "Energy", title: "5 rooftops that pay for themselves in 4 years", excerpt: "How smart solar layouts shrink payback periods without compromising aesthetics.", read: "6 min read" },
  { img: projectOffice, cat: "Materials", title: "The quiet rise of mass timber in commercial design", excerpt: "Why developers across Asia are switching from concrete to engineered wood.", read: "8 min read" },
  { img: projectVilla, cat: "Living", title: "What a net-zero home actually feels like to live in", excerpt: "Notes from a year inside a fully off-grid coastal residence.", read: "5 min read" },
  { img: projectSchool, cat: "Education", title: "Designing classrooms that don't need air-conditioning", excerpt: "Passive cooling principles applied to a 1,200-student campus.", read: "7 min read" },
  { img: projectHotel, cat: "Hospitality", title: "Eco-luxury isn't an oxymoron — here's the playbook", excerpt: "How to design hotels that delight guests and tread lightly.", read: "9 min read" },
  { img: projectIndustrial, cat: "Industry", title: "The case for net-zero logistics parks", excerpt: "Logistics is 11% of global emissions. Here's how to fix it at the building scale.", read: "6 min read" },
];

function Blog() {
  return (
    <PageShell>
      <PageHero eyebrow="Journal" title="Field notes from a greener industry." subtitle="Practical insights and bold ideas for designers, developers and curious humans." />

      <section className="container-x py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((p, i) => (
          <Reveal key={p.title} delay={i*60}>
            <article className="group h-full flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all duration-500">
              <div className="overflow-hidden aspect-[16/10]">
                <img src={p.img} alt={p.title} width={1024} height={640} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs uppercase tracking-widest">
                  <span className="text-primary">{p.cat}</span>
                  <span className="text-muted-foreground">{p.read}</span>
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                  Read article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
