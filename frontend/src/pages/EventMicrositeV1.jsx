import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  Download,
  CalendarDays,
  MapPin,
  Clock,
  Check,
  Users,
  Mic2,
  Building2,
} from "lucide-react";

/**
 * Event 1 — a corporate-themed microsite (Version 1).
 * Deliberately NOT the Bizora look: restrained navy/slate/blue palette,
 * thin borders, soft shadows, clean serif-free corporate typography.
 */

// Corporate palette
const NAVY = "#0A2540";
const BLUE = "#0C6CF2";
const SKY = "#2E90FA";
const SLATE = "#475467";

const IMG = {
  hero: "https://images.unsplash.com/photo-1758399750112-366c3c804eb7?auto=format&fit=crop&w=1600&q=80",
  overview: "https://images.unsplash.com/photo-1608303588026-884930af2559?auto=format&fit=crop&w=1600&q=80",
  why: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?auto=format&fit=crop&w=1600&q=80",
  speakers: "https://images.unsplash.com/photo-1724866976376-4b217d29a462?auto=format&fit=crop&w=1600&q=80",
  agenda: "https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?auto=format&fit=crop&w=1600&q=80",
  cta: "https://images.unsplash.com/photo-1666843527155-14ec5f016802?auto=format&fit=crop&w=1600&q=80",
};

const EVENT = {
  title: "Autodesk Construction Connect",
  subtitle: "Contractor Series — Mumbai Edition",
  date: "27 August 2026",
  venue: "Mumbai, Maharashtra",
  time: "08:30 AM Onwards",
};

const WHY = [
  { t: "Improve schedule confidence", d: "Plan with greater certainty, forecast earlier, and stay ahead of delays before they impact delivery." },
  { t: "Strengthen field coordination", d: "Keep project teams, subcontractors, and disciplines aligned with the latest approved information." },
  { t: "Build quality & safety into execution", d: "Standardise inspections, safety observations, corrective actions, and field processes." },
  { t: "Turn controls into performance intelligence", d: "Use project data to improve visibility, support faster decisions, and strengthen delivery outcomes." },
  { t: "Improve handover readiness", d: "Close out projects with complete documentation, reliable digital records, and the right asset information." },
  { t: "Learn from peers & practitioners", d: "Hear real-world perspectives from contractor leaders on the practices shaping predictable delivery." },
];

const SPEAKERS = [
  { name: "Shri. Sanjay Shankar Ghadi", role: "Deputy Mayor", org: "Brihanmumbai Municipal Corporation (BMC)" },
  { name: "Deepak Suvarna", role: "President – Operations", org: "Kalpataru Limited" },
  { name: "Himanshu Banthiya", role: "Technical Specialist, Construction", org: "Autodesk" },
  { name: "Manjay Singh", role: "President Projects", org: "Capacit'e Infraprojects Limited" },
  { name: "Rahul Jaiswal", role: "Director", org: "Jaiswal Construction & Piletech Pvt. Ltd." },
  { name: "Rakesh Dogra", role: "President Operations", org: "Runwal Enterprises" },
  { name: "Roshan Bucha", role: "Lead – Technical Sales (Construction, India)", org: "Autodesk" },
  { name: "Siddhi Shikhare", role: "Associate – Operations and Technology", org: "Shapoorji Pallonji Engineering & Construction" },
  { name: "Suneel Vora", role: "Partner & Head, Major Projects Advisory", org: "KPMG in India" },
  { name: "Tribhuwan Thakur", role: "Vice President (Projects)", org: "Patel Infrastructure Limited" },
  { name: "Vijay Chavan", role: "Project Director", org: "Shapoorji Pallonji Engineering & Construction" },
];

const ATTENDEES = [
  "CEOs & COOs", "Project Directors", "Construction Heads", "Project Management Leaders",
  "Digital Transformation Leaders", "Planning Heads", "Project Controls Teams",
  "Quality Leaders", "Safety Leaders", "PMO Teams",
];

const AGENDA = [
  { time: "08:30 – 10:00", title: "Registration & Networking Breakfast" },
  { time: "10:00 – 10:30", title: "Welcome Address & Delegate Engagement Activity", detail: "What Is Holding Back Predictable Delivery? — Roshan Bucha, Lead – Technical Sales (Construction, India), Autodesk" },
  { time: "10:30 – 10:45", title: "Chief Guest Address", detail: "Shri. Sanjay Shankar Ghadi, Deputy Mayor, Brihanmumbai Municipal Corporation (BMC), Mumbai" },
  { time: "10:45 – 11:40", title: "Leadership Panel — The New Contractor Mandate", detail: "Predictability, Performance & Project Intelligence. Panelists: Deepak Suvarna, Rakesh Dogra, Manjay Singh, Tribhuwan Thakur, Rahul Jaiswal, Roshan Bucha. Moderator: Suneel Vora, KPMG in India." },
  { time: "11:40 – 12:00", title: "Contractor Success Story", detail: "Real-world experience on project visibility, collaboration & delivery outcomes — Vijay Chavan & Siddhi Shikhare, Shapoorji Pallonji Engineering & Construction" },
  { time: "12:00 – 12:50", title: "From Project Data to Delivery Confidence", detail: "Himanshu Banthiya, Technical Specialist, Construction, Autodesk" },
  { time: "12:50 – 13:00", title: "Closing Note & Feedback" },
  { time: "13:00 Onwards", title: "Networking Lunch" },
];

const initials = (n) =>
  n.replace(/^Shri\.\s*/, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const Eyebrow = ({ children }) => (
  <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: BLUE }}>
    <span className="h-px w-8" style={{ background: BLUE }} />
    {children}
  </span>
);

const CtaRow = ({ center, onDark }) => (
  <div className={`flex flex-col sm:flex-row gap-3 ${center ? "sm:justify-center" : ""}`}>
    <a
      href="mailto:marketing@bizoramedia.com?subject=Register%20-%20Autodesk%20Construction%20Connect%20Mumbai"
      data-testid="ev1-register"
      className="group inline-flex items-center justify-center gap-2.5 rounded-md px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      style={{ background: BLUE }}
    >
      Register Now
      <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
    <a
      href="mailto:marketing@bizoramedia.com?subject=Brochure%20Request%20-%20Autodesk%20Construction%20Connect%20Mumbai"
      data-testid="ev1-brochure"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md px-6 py-3.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        onDark ? "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20" : "bg-white text-[#0A2540] ring-1 ring-[#0A2540]/15 hover:ring-[#0A2540]/30"
      }`}
    >
      Download Brochure
      <Download size={17} />
    </a>
  </div>
);

export default function EventMicrositeV1() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 });

  return (
    <main ref={ref} data-testid="event-microsite-v1" className="bg-white" style={{ color: NAVY, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* scroll progress */}
      <motion.div aria-hidden style={{ scaleX: bar, transformOrigin: "left", background: BLUE }} className="fixed top-[72px] left-0 right-0 z-40 h-0.5" />

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: NAVY }}>
        <img src={IMG.hero} alt="Construction site at dusk" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div aria-hidden className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${NAVY} 30%, rgba(10,37,64,0.78) 60%, rgba(12,108,242,0.35))` }} />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-36 pb-24 sm:pt-40 sm:pb-28">
          <motion.div {...fade}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping" style={{ background: SKY }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: SKY }} />
              </span>
              Leadership Forum · Registrations Open
            </span>
          </motion.div>

          <motion.h1 {...fade} transition={{ ...fade.transition, delay: 0.1 }} className="mt-6 max-w-4xl font-extrabold tracking-tight text-white text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.05]">
            {EVENT.title}
            <span className="block mt-2 text-[clamp(1.1rem,2.4vw,2rem)] font-semibold" style={{ color: SKY }}>
              {EVENT.subtitle}
            </span>
          </motion.h1>

          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.2 }} className="mt-8 flex flex-wrap gap-3">
            {[
              { Icon: CalendarDays, label: EVENT.date },
              { Icon: MapPin, label: EVENT.venue },
              { Icon: Clock, label: EVENT.time },
            ].map(({ Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2.5 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
                <Icon size={16} style={{ color: SKY }} />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.3 }} className="mt-9">
            <CtaRow onDark />
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...fade}>
            <div className="overflow-hidden rounded-lg ring-1 ring-black/5 shadow-xl">
              <img src={IMG.overview} alt="Engineers reviewing construction plans" className="h-[300px] sm:h-[400px] w-full object-cover" />
            </div>
          </motion.div>
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.1 }}>
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              A new phase of growth for India&rsquo;s construction sector.
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: SLATE }}>
              India&rsquo;s construction sector is entering a new phase of growth — across infrastructure,
              industrial, commercial, residential, manufacturing, and data center projects. For contractors,
              this means greater pressure to deliver faster, protect margins, coordinate complex project teams,
              and meet rising expectations around quality, safety, and compliance.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: SLATE }}>
              Project success today depends on predictable outcomes at every stage — with the right information,
              connected teams, and proactive risk management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY ATTEND */}
      <section className="py-16 sm:py-24" style={{ background: "#F7F9FC" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="max-w-2xl">
            <Eyebrow>Why attend</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              An exclusive forum for contractor leaders shaping project delivery in India.
            </h2>
          </motion.div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((w, i) => (
              <motion.div
                key={w.t}
                data-testid={`ev1-why-${i}`}
                {...fade}
                transition={{ ...fade.transition, delay: (i % 3) * 0.08 }}
                className="rounded-lg bg-white p-7 ring-1 ring-black/5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md" style={{ background: "#E8F1FE", color: BLUE }}>
                  <Check size={18} strokeWidth={2.5} />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug">{w.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed" style={{ color: SLATE }}>{w.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="flex items-center gap-3">
            <Mic2 size={18} style={{ color: BLUE }} />
            <Eyebrow>Speakers</Eyebrow>
          </motion.div>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.05 }} className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Industry leaders on stage.
          </motion.h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPEAKERS.map((s, i) => (
              <motion.div
                key={s.name}
                data-testid={`ev1-speaker-${i}`}
                {...fade}
                transition={{ ...fade.transition, delay: (i % 3) * 0.06 }}
                className="flex items-center gap-4 rounded-lg bg-white p-5 ring-1 ring-black/5 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${NAVY}, ${BLUE})` }}
                >
                  {initials(s.name)}
                </span>
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold leading-tight">{s.name}</h3>
                  <p className="mt-0.5 text-[13px] font-semibold" style={{ color: BLUE }}>{s.role}</p>
                  <p className="mt-0.5 text-[12px]" style={{ color: SLATE }}>{s.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section className="py-16 sm:py-24" style={{ background: "#F7F9FC" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="flex items-center gap-3">
            <Users size={18} style={{ color: BLUE }} />
            <Eyebrow>Who should attend</Eyebrow>
          </motion.div>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.05 }} className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            The people in the room.
          </motion.h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {ATTENDEES.map((a, i) => (
              <motion.span
                key={a}
                {...fade}
                transition={{ ...fade.transition, delay: i * 0.03 }}
                className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold ring-1 ring-black/5 shadow-sm"
              >
                {a}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <motion.div {...fade} className="flex items-center gap-3">
            <Clock size={18} style={{ color: BLUE }} />
            <Eyebrow>Agenda · 27 August 2026</Eyebrow>
          </motion.div>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.05 }} className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            How the day unfolds.
          </motion.h2>

          <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 overflow-hidden rounded-lg ring-1 ring-black/5 shadow-xl">
                <img src={IMG.agenda} alt="Glass skyscraper" className="h-[460px] w-full object-cover" />
              </div>
            </div>

            <div className="lg:col-span-8 divide-y divide-black/5 rounded-lg bg-white ring-1 ring-black/5 shadow-sm overflow-hidden">
              {AGENDA.map((row, i) => (
                <motion.div
                  key={row.time}
                  data-testid={`ev1-agenda-${i}`}
                  {...fade}
                  transition={{ ...fade.transition, delay: i * 0.04 }}
                  className="flex flex-col sm:flex-row gap-2 sm:gap-6 p-6 transition-colors duration-200 hover:bg-[#F7F9FC]"
                >
                  <span className="shrink-0 text-sm font-bold tabular-nums sm:w-32" style={{ color: BLUE }}>{row.time}</span>
                  <div>
                    <h3 className="text-[17px] font-bold leading-snug">{row.title}</h3>
                    {row.detail && <p className="mt-1.5 text-sm leading-relaxed" style={{ color: SLATE }}>{row.detail}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden" style={{ background: NAVY }}>
        <img src={IMG.cta} alt="Mumbai skyline" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div aria-hidden className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${NAVY} 40%, rgba(12,108,242,0.5))` }} />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
          <motion.p {...fade} className="text-[12px] font-semibold uppercase tracking-[0.24em]" style={{ color: SKY }}>Seats are limited</motion.p>
          <motion.h2 {...fade} transition={{ ...fade.transition, delay: 0.08 }} className="mt-4 text-white font-extrabold tracking-tight text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08]">
            Be in the room where delivery gets predictable.
          </motion.h2>
          <motion.p {...fade} transition={{ ...fade.transition, delay: 0.15 }} className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-white/80">
            Join contractor leaders, practitioners and decision-makers in Mumbai on 27 August 2026.
          </motion.p>
          <motion.div {...fade} transition={{ ...fade.transition, delay: 0.22 }} className="mt-9">
            <CtaRow center onDark />
          </motion.div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="rounded-lg bg-white p-10 sm:p-14 ring-1 ring-black/5 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-12 sm:gap-0 sm:divide-x divide-black/10">
              <div className="sm:px-8 flex flex-col items-center text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: SLATE }}>Presented by</p>
                <img src="/assets/autodesk-platinum.png" alt="Autodesk Platinum Partner" className="mt-6 h-14 sm:h-16 w-auto object-contain" />
              </div>
              <div className="sm:px-8 flex flex-col items-center text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: SLATE }}>In association with</p>
                <img src="/assets/fast-company-india.png" alt="Fast Company India" className="mt-6 h-10 sm:h-12 w-auto object-contain" />
              </div>
            </div>
            <div className="mt-12 pt-10 border-t border-black/10 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: SLATE }}>Brought to you by</p>
              <p className="mt-3 text-2xl font-extrabold" style={{ color: NAVY }}>Bizora</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="text-sm font-semibold transition-colors duration-300" style={{ color: SLATE }}>
              ← Back to Bizora
            </Link>
          </div>
        </div>
      </section>

      {/* minimal corporate footer */}
      <footer className="border-t border-black/5" style={{ background: "#F7F9FC" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm" style={{ color: SLATE }}>
          <span>© 2026 Bizora · Autodesk Construction Connect</span>
          <a href="mailto:marketing@bizoramedia.com" className="font-semibold" style={{ color: BLUE }}>marketing@bizoramedia.com</a>
        </div>
      </footer>
    </main>
  );
}
