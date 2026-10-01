import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  Download,
  CalendarDays,
  MapPin,
  Clock,
  CheckCircle2,
  Users,
  Mic2,
  Building2,
} from "lucide-react";
import Sticker from "@/components/Sticker";
import Note from "@/components/Note";
import { EASE, Reveal, MaskedLine } from "@/components/Reveal";
import Footer from "@/components/Footer";

const EVENT = {
  title: "Autodesk Construction Connect",
  subtitle: "Contractor Series — Mumbai Edition",
  date: "27 August 2026",
  venue: "Mumbai, Maharashtra",
  time: "08:30 AM Onwards",
};

const WHY = [
  { t: "Improve schedule confidence", d: "Plan with greater certainty, forecast earlier, and stay ahead of delays before they impact delivery.", c: "#6D28D9" },
  { t: "Strengthen field coordination", d: "Keep project teams, subcontractors, and disciplines aligned with the latest approved information.", c: "#D81B74" },
  { t: "Build quality & safety into execution", d: "Standardise inspections, safety observations, corrective actions, and field processes.", c: "#5286fc" },
  { t: "Turn controls into performance intelligence", d: "Use project data to improve visibility, support faster decisions, and strengthen delivery outcomes.", c: "#FF3E8E" },
  { t: "Improve handover readiness", d: "Close out projects with complete documentation, reliable digital records, and the right asset information.", c: "#012362" },
  { t: "Learn from peers & practitioners", d: "Hear real-world perspectives from contractor leaders on the practices shaping predictable delivery.", c: "#8B5CF6" },
];

const SPEAKERS = [
  { name: "Shri. Sanjay Shankar Ghadi", role: "Deputy Mayor", org: "Brihanmumbai Municipal Corporation (BMC)", c: "#D81B74" },
  { name: "Deepak Suvarna", role: "President – Operations", org: "Kalpataru Limited", c: "#6D28D9" },
  { name: "Himanshu Banthiya", role: "Technical Specialist, Construction", org: "Autodesk", c: "#5286fc" },
  { name: "Manjay Singh", role: "President Projects", org: "Capacit'e Infraprojects Limited", c: "#FF3E8E" },
  { name: "Rahul Jaiswal", role: "Director", org: "Jaiswal Construction & Piletech Pvt. Ltd.", c: "#012362" },
  { name: "Rakesh Dogra", role: "President Operations", org: "Runwal Enterprises", c: "#8B5CF6" },
  { name: "Roshan Bucha", role: "Lead – Technical Sales (Construction, India)", org: "Autodesk", c: "#D81B74" },
  { name: "Siddhi Shikhare", role: "Associate – Operations and Technology", org: "Shapoorji Pallonji Engineering & Construction", c: "#6D28D9" },
  { name: "Suneel Vora", role: "Partner & Head, Major Projects Advisory", org: "KPMG in India", c: "#5286fc" },
  { name: "Tribhuwan Thakur", role: "Vice President (Projects)", org: "Patel Infrastructure Limited", c: "#FF3E8E" },
  { name: "Vijay Chavan", role: "Project Director", org: "Shapoorji Pallonji Engineering & Construction", c: "#012362" },
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

const CtaRow = ({ center }) => (
  <div className={`flex flex-col sm:flex-row gap-3 ${center ? "sm:justify-center" : ""}`}>
    <a
      href="mailto:marketing@bizoramedia.com?subject=Register%20-%20Autodesk%20Construction%20Connect%20Mumbai"
      data-testid="event-register"
      className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-biz-ink bg-biz-ink px-7 py-3.5 font-display font-bold text-base text-biz-paper shadow-[6px_6px_0_0_#9273fc] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_#9273fc]"
    >
      Register Now
      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
    <a
      href="mailto:marketing@bizoramedia.com?subject=Brochure%20Request%20-%20Autodesk%20Construction%20Connect%20Mumbai"
      data-testid="event-brochure"
      className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-biz-ink bg-biz-paper px-6 py-3.5 font-display font-bold text-base text-biz-ink shadow-[6px_6px_0_0_#111111] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_#111111]"
    >
      Download Brochure
      <Download size={18} />
    </a>
  </div>
);

export default function EventMicrosite() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 });

  return (
    <main ref={ref} data-testid="event-microsite" className="bg-biz-paper">
      {/* scroll progress bar */}
      <motion.div
        aria-hidden
        style={{ scaleX: bar, transformOrigin: "left" }}
        className="fixed top-[72px] left-0 right-0 z-40 h-1 bg-gradient-to-r from-biz-magenta via-biz-purple to-biz-blue"
      />

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-28">
        <div aria-hidden className="pointer-events-none absolute -left-[12%] top-[6%] w-[46vw] h-[46vw] max-w-[620px] max-h-[620px]">
          <div className="blob w-full h-full" style={{ background: "#9273fc", opacity: 0.16 }} />
        </div>
        <div aria-hidden className="pointer-events-none absolute -right-[14%] top-[20%] w-[40vw] h-[40vw] max-w-[540px] max-h-[540px]">
          <div className="blob w-full h-full" style={{ background: "#fc3ea0", opacity: 0.14, animationDelay: "-7s" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Sticker tone="paper" rotate="-rotate-2">
              <CalendarDays size={14} strokeWidth={2.5} /> Bizora Experiences · Microsite
            </Sticker>
          </Reveal>

          <h1 className="mt-6 font-display font-black uppercase tracking-[-0.02em] leading-[0.92] text-[clamp(2.4rem,6.5vw,6rem)] text-biz-ink">
            <MaskedLine delay={0.05}>{EVENT.title}</MaskedLine>
            <MaskedLine delay={0.18}>
              <span className="text-sweep inline-block">{EVENT.subtitle}</span>
            </MaskedLine>
          </h1>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { Icon: CalendarDays, label: EVENT.date },
                { Icon: MapPin, label: EVENT.venue },
                { Icon: Clock, label: EVENT.time },
              ].map(({ Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2.5 rounded-full border-2 border-biz-ink bg-white px-4 py-2 font-display text-sm font-bold text-biz-ink shadow-[4px_4px_0_0_#111111]">
                  <Icon size={16} strokeWidth={2.5} className="text-biz-magenta" />
                  {label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="mt-10">
              <CtaRow />
            </div>
          </Reveal>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <Sticker tone="paper" rotate="-rotate-2">
              <Building2 size={14} strokeWidth={2.5} /> Overview
            </Sticker>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-4xl text-biz-ink">
              A new phase of growth for India&rsquo;s construction sector.
            </h2>
            <Note color="#5286fc" rotate="rotate-1" className="mt-8 max-w-sm">
              Predictable outcomes at every stage of delivery.
            </Note>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-[28px] border-2 border-biz-ink bg-white p-8 sm:p-10 shadow-[8px_8px_0_0_#111111]">
              <p className="text-base sm:text-lg leading-relaxed text-biz-ink/75">
                India&rsquo;s construction sector is entering a new phase of growth — across infrastructure,
                industrial, commercial, residential, manufacturing, and data center projects. For contractors,
                this means greater pressure to deliver faster, protect margins, coordinate complex project teams,
                and meet rising expectations around quality, safety, and compliance.
              </p>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-biz-ink/75">
                Project success today depends on predictable outcomes at every stage — with the right information,
                connected teams, and proactive risk management.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY ATTEND */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Sticker tone="paper" rotate="-rotate-2">
                <CheckCircle2 size={14} strokeWidth={2.5} /> Why attend
              </Sticker>
              <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink max-w-2xl">
                An exclusive forum for contractor leaders.
              </h2>
            </div>
            <Note color="#D81B74" rotate="rotate-1" className="max-w-xs">
              Shaping the future of project delivery in India.
            </Note>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((w, i) => (
              <motion.div
                key={w.t}
                data-testid={`why-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-[24px] border-2 border-biz-ink bg-white p-7 shadow-[6px_6px_0_0_#111111]"
              >
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-biz-ink text-biz-paper transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
                  style={{ background: w.c }}
                >
                  <CheckCircle2 size={19} strokeWidth={2.25} />
                </span>
                <h3 className="mt-5 font-display font-bold text-lg text-biz-ink leading-snug">{w.t}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-biz-ink/65">{w.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-12">
            <Sticker tone="paper" rotate="-rotate-2">
              <Mic2 size={14} strokeWidth={2.5} /> Speakers
            </Sticker>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink">
              Voices <span className="text-sweep inline-block">on stage.</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPEAKERS.map((s, i) => (
              <motion.div
                key={s.name}
                data-testid={`speaker-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[24px] border-2 border-biz-ink bg-white p-6 shadow-[6px_6px_0_0_#111111]"
              >
                <span
                  aria-hidden
                  className="absolute -top-14 -right-14 h-40 w-40 rounded-full blur-2xl opacity-20 transition-all duration-700 group-hover:scale-150 group-hover:opacity-30"
                  style={{ background: s.c }}
                />
                <div className="relative flex items-center gap-4">
                  <span
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-biz-ink font-display font-black text-xl text-biz-paper shadow-[3px_3px_0_0_#111111]"
                    style={{ background: s.c }}
                  >
                    {initials(s.name)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-[17px] text-biz-ink leading-tight">{s.name}</h3>
                    <p className="mt-1 text-[13px] font-semibold" style={{ color: s.c }}>{s.role}</p>
                  </div>
                </div>
                <div className="relative mt-4 pt-4 border-t border-biz-ink/10">
                  <p className="text-[13px] font-medium text-biz-ink/60">{s.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD ATTEND */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <Sticker tone="paper" rotate="-rotate-2">
              <Users size={14} strokeWidth={2.5} /> Who should attend
            </Sticker>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink">
              The people in the room.
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {ATTENDEES.map((a, i) => (
              <motion.span
                key={a}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.04 }}
                className="inline-flex items-center rounded-full border-2 border-biz-ink bg-white px-5 py-2.5 font-display text-sm font-bold text-biz-ink shadow-[4px_4px_0_0_#111111]"
              >
                {a}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Sticker tone="paper" rotate="-rotate-2">
                <Clock size={14} strokeWidth={2.5} /> Agenda
              </Sticker>
              <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-biz-ink">
                How the day <span className="text-sweep inline-block">unfolds.</span>
              </h2>
            </div>
            <Note color="#9273fc" rotate="rotate-1" className="max-w-xs">
              27 August 2026 · Mumbai
            </Note>
          </Reveal>

          <div className="relative pl-8 sm:pl-12">
            <span className="absolute left-2 sm:left-3 top-3 bottom-3 w-px bg-gradient-to-b from-biz-magenta via-biz-purple to-biz-blue" aria-hidden />
            <div className="space-y-5">
              {AGENDA.map((row, i) => (
                <motion.div
                  key={row.time}
                  data-testid={`agenda-${i}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                  className="group relative rounded-[22px] border-2 border-biz-ink bg-white p-6 shadow-[5px_5px_0_0_#111111] transition-transform duration-300 hover:-translate-y-1"
                >
                  <span
                    aria-hidden
                    className="absolute -left-[26px] sm:-left-[38px] top-7 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-biz-ink bg-biz-paper"
                  >
                    <span className="h-2 w-2 rounded-full bg-biz-magenta" />
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="shrink-0 font-display font-black text-sm text-biz-magenta tabular-nums sm:w-36">
                      {row.time}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg text-biz-ink leading-snug">{row.title}</h3>
                      {row.detail && <p className="mt-2 text-sm leading-relaxed text-biz-ink/60">{row.detail}</p>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <CtaRow center />
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="rounded-[30px] border-2 border-biz-ink bg-white p-10 sm:p-14 shadow-[10px_10px_0_0_#111111] text-center">
            <div className="grid sm:grid-cols-2 gap-10 sm:gap-0 sm:divide-x-2 divide-biz-ink/10">
              <div className="sm:px-8">
                <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-biz-ink/40">Presented by</p>
                <p className="mt-4 font-display font-black text-3xl sm:text-4xl text-biz-ink">Autodesk</p>
              </div>
              <div className="sm:px-8">
                <p className="font-display text-xs font-black uppercase tracking-[0.2em] text-biz-ink/40">Brought to you by</p>
                <p className="mt-4 font-display font-black text-3xl sm:text-4xl text-sweep inline-block">Bizora</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="font-display font-semibold text-sm text-biz-ink/60 hover:text-biz-ink transition-colors duration-300"
            >
              ← Back to Bizora
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
