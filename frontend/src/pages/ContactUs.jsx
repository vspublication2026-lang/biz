import { useState } from "react";
import { ArrowRight, Check, Mail, MessagesSquare } from "lucide-react";
import { motion } from "framer-motion";
import Sticker from "@/components/Sticker";
import { EASE, Reveal, MaskedLine } from "@/components/Reveal";
import Footer from "@/components/Footer";

const EMAIL = "marketing@bizoramedia.com";

const inputCls =
  "w-full rounded-xl border-2 border-biz-ink bg-biz-paper px-4 py-3 text-sm font-medium text-biz-ink placeholder:text-biz-ink/35 outline-none focus:shadow-[4px_4px_0_0_#111111] transition-shadow duration-200";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("bizora-enquiries") || "[]");
    saved.push({ ...form, at: new Date().toISOString() });
    localStorage.setItem("bizora-enquiries", JSON.stringify(saved));
    setSent(true);
  };

  return (
    <main data-testid="contact-page" className="bg-biz-paper">
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-28">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, rgba(146,115,252,0.14) 0%, rgba(250,250,250,0) 55%), radial-gradient(ellipse at 85% 30%, rgba(252,62,160,0.12) 0%, rgba(250,250,250,0) 55%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Sticker tone="paper" rotate="-rotate-2">
                <MessagesSquare size={14} strokeWidth={2.5} /> Contact
              </Sticker>
            </Reveal>
            <h1 className="mt-6 font-display font-black uppercase tracking-[-0.02em] leading-[0.95] text-[clamp(2.6rem,6vw,5rem)] text-biz-ink">
              <MaskedLine delay={0.1}>Start a</MaskedLine>
              <MaskedLine delay={0.22}>
                <span className="text-sweep inline-block">conversation.</span>
              </MaskedLine>
            </h1>
            <Reveal delay={0.3}>
              <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-biz-ink/65">
                Tell us where you want to be seen, who you want to meet, or what you want to build —
                we&rsquo;ll take it from there.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <a
                href={`mailto:${EMAIL}`}
                data-testid="contact-email"
                className="mt-8 inline-flex items-center gap-2.5 font-display font-bold text-lg text-biz-ink underline decoration-2 decoration-biz-ink/25 underline-offset-[6px] hover:decoration-biz-pink transition-colors duration-300"
              >
                <Mail size={19} />
                {EMAIL}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="rounded-[26px] border-2 border-biz-ink bg-white p-7 sm:p-9 shadow-[8px_8px_0_0_#111111]">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="py-14 text-center"
                  data-testid="contact-success"
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-biz-ink bg-biz-pink text-biz-paper shadow-[4px_4px_0_0_#111111]">
                    <Check size={24} strokeWidth={3} />
                  </span>
                  <h2 className="mt-6 font-display font-extrabold text-2xl text-biz-ink">Message noted.</h2>
                  <p className="mt-3 text-sm sm:text-base text-biz-ink/60 max-w-sm mx-auto">
                    Thanks for reaching out — we usually reply within a working day. You can also write to us
                    directly at {EMAIL}.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="flex flex-col gap-4" data-testid="contact-form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} data-testid="contact-name" />
                    <input required type="email" placeholder="Work email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} data-testid="contact-email-input" />
                  </div>
                  <input placeholder="Company (optional)" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputCls} data-testid="contact-company" />
                  <textarea required rows={5} placeholder="What would you like to build?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputCls} resize-none`} data-testid="contact-message" />
                  <button
                    type="submit"
                    data-testid="contact-submit"
                    className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full border-2 border-biz-ink bg-biz-ink px-8 py-4 font-display font-bold text-base text-biz-paper shadow-[6px_6px_0_0_#9273fc] transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_0_#9273fc]"
                  >
                    Send message
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
