import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Mail, MapPin, Phone, CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Verdantia Green Building Consultancy" },
      { name: "description", content: "Book a free 30-minute consultation with our senior sustainability team." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!String(data.get("name")).trim()) errs.name = "Please tell us your name.";
    const email = String(data.get("email"));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email.";
    if (String(data.get("message")).trim().length < 10) errs.message = "A few more details would help us reply well.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  };

  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Let's design something better, together." subtitle="Tell us about your project — we typically respond within one working day." />

      <section className="container-x py-20 grid lg:grid-cols-5 gap-12">
        <Reveal className="lg:col-span-2">
          <div className="space-y-8">
            {[
              { icon: MapPin, label: "Studio", value: "24 Banyan Road,\nBengaluru 560001, India" },
              { icon: Phone, label: "Call", value: "+91 80 4567 8910" },
              { icon: Mail, label: "Email", value: "hello@verdantia.eco" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-leaf text-primary-foreground shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="mt-1 whitespace-pre-line">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-2xl border border-border aspect-[4/3]">
              <iframe
                title="Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.55%2C12.93%2C77.65%2C13.02&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-3">
          <form onSubmit={submit} noValidate className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-soft">
            {sent && (
              <div className="mb-6 flex items-center gap-3 rounded-xl bg-primary/10 text-primary px-4 py-3 text-sm">
                <CheckCircle2 className="h-5 w-5" /> Thanks — your message is on its way. We'll be in touch shortly.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
            </div>
            <div className="mt-5 grid md:grid-cols-2 gap-5">
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Service</label>
                <select name="service" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                  <option>Green Building Design</option>
                  <option>Energy Efficiency</option>
                  <option>Solar Energy</option>
                  <option>LEED / IGBC Certification</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Project details</label>
              <textarea
                name="message"
                rows={5}
                className={`mt-2 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary ${errors.message ? "border-destructive" : "border-border"}`}
                placeholder="Tell us about your goals, timeline and site..."
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-hero mt-7">
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className={`mt-2 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:border-primary ${error ? "border-destructive" : "border-border"}`}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
