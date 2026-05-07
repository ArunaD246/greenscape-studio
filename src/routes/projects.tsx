import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import projectSolar from "@/assets/project-solar.jpg";
import projectOffice from "@/assets/project-office.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import projectSchool from "@/assets/project-school.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectIndustrial from "@/assets/project-industrial.jpg";
import { X } from "lucide-react";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — Verdantia Green Building Consultancy" },
      { name: "description", content: "Selected work across commercial, residential, hospitality, education and industrial sectors." },
    ],
  }),
});

type Project = {
  img: string;
  title: string;
  tag: string;
  category: "Commercial" | "Residential" | "Hospitality" | "Education" | "Industrial";
  location: string;
  year: number;
  impact: string;
  description: string;
};

const PROJECTS: Project[] = [
  { img: projectSolar, title: "Helios Rooftop Farm", tag: "Solar + Biophilic", category: "Commercial", location: "Bengaluru, IN", year: 2024, impact: "1.2 GWh solar generation / yr", description: "A rooftop transformed into a productive solar+garden ecosystem, offsetting 100% of building load while creating community amenity space." },
  { img: projectOffice, title: "Cedar Works HQ", tag: "LEED Platinum", category: "Commercial", location: "Pune, IN", year: 2023, impact: "62% energy reduction", description: "Mass-timber headquarters with 100% daylight-autonomous workspaces, certified LEED Platinum on the first attempt." },
  { img: projectVilla, title: "Banyan Residence", tag: "Net Zero Home", category: "Residential", location: "Goa, IN", year: 2024, impact: "Net-zero water + energy", description: "A coastal villa designed around prevailing winds and rain — fully off-grid for water and electricity, year-round." },
  { img: projectSchool, title: "Tara Bamboo Campus", tag: "Biophilic Education", category: "Education", location: "Auroville, IN", year: 2022, impact: "92% material from <300 km", description: "An open-air bamboo learning campus harnessing cross-ventilation and natural daylight to eliminate mechanical cooling." },
  { img: projectHotel, title: "Saanjh Eco Resort", tag: "Sustainable Hospitality", category: "Hospitality", location: "Bali, ID", year: 2023, impact: "78% local sourcing", description: "Thatched eco-villas integrated into the rainforest canopy, with closed-loop greywater and solar-thermal systems." },
  { img: projectIndustrial, title: "GreenWorks Logistics Park", tag: "Industrial Net-Zero", category: "Industrial", location: "Chennai, IN", year: 2024, impact: "8.4 MW on-site renewables", description: "A 200,000 sqm logistics park powered entirely by on-site solar and wind, with rainwater meeting 65% of operational demand." },
];

const CATEGORIES = ["All", "Commercial", "Residential", "Hospitality", "Education", "Industrial"] as const;

function Projects() {
  const [filter, setFilter] = useState<typeof CATEGORIES[number]>("All");
  const [active, setActive] = useState<Project | null>(null);
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <PageShell>
      <PageHero eyebrow="Projects" title="Built proof of a better way." subtitle="A small selection of certified, occupied buildings designed by Verdantia." />

      <section className="container-x py-14">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >{c}</button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i*60}>
              <button onClick={() => setActive(p)} className="text-left group block w-full overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elegant transition-all duration-500">
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <span className="text-primary-foreground text-sm font-medium">View project →</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-primary">{p.tag}</p>
                  <h3 className="mt-2 font-display text-xl">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.location} · {p.year}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-foreground/60 backdrop-blur-sm p-4 animate-in" onClick={() => setActive(null)}>
          <div className="relative max-w-3xl w-full bg-card rounded-3xl overflow-hidden shadow-elegant" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActive(null)} className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/90 backdrop-blur"><X className="h-4 w-4" /></button>
            <img src={active.img} alt={active.title} className="w-full aspect-[16/9] object-cover" />
            <div className="p-8">
              <p className="text-xs uppercase tracking-widest text-primary">{active.tag}</p>
              <h3 className="mt-2 font-display text-3xl">{active.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{active.location} · {active.year} · {active.category}</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">{active.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-primary" /> Impact: {active.impact}
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
