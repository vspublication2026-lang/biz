import { Reveal, MaskedLine } from "@/components/Reveal";
import Sticker from "@/components/Sticker";
import { FileText } from "lucide-react";
import Footer from "@/components/Footer";

const COPY = {
  "Privacy Policy": [
    "Bizora Media (\"Bizora\") respects your privacy. This policy explains what information we collect when you visit our website or get in touch with us, and how we use it.",
    "We collect only the details you choose to share with us — typically your name, work email and message when you contact us — along with basic, anonymised usage data that helps us understand how the site is used.",
    "We never sell your information. We use it to respond to your enquiry, to improve our platforms and experiences, and occasionally to share relevant updates if you have asked for them.",
    "You can ask us at any time to see, correct or delete the information we hold about you by writing to marketing@bizoramedia.com.",
  ],
  "Cookie Policy": [
    "This website uses a small number of cookies to work properly and to help us understand how visitors use it.",
    "Essential cookies keep the site functioning — remembering your preferences as you move between pages. Analytics cookies, where enabled, give us anonymous, aggregated insight into what visitors read and watch.",
    "You can control or delete cookies through your browser settings at any time. The site will continue to work, though some features may be affected.",
    "Questions about cookies? Write to marketing@bizoramedia.com.",
  ],
  "Terms & Conditions": [
    "By using this website you agree to these terms. The content on this site — text, design, video and imagery — belongs to Bizora Media and may not be reproduced without written permission.",
    "The information here is provided in good faith and may change as our platforms, partnerships and programmes evolve. Nothing on this site constitutes a binding offer.",
    "Bizora Media is not liable for any indirect loss arising from the use of this website. Links to third-party sites are provided for convenience and are outside our control.",
    "For any questions about these terms, contact marketing@bizoramedia.com.",
  ],
};

export default function LegalPage({ title }) {
  const paragraphs = COPY[title] ?? [];
  return (
    <main data-testid="legal-page" className="bg-biz-paper">
      <section className="relative overflow-hidden pt-36 pb-20 sm:pb-28">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 10%, rgba(146,115,252,0.12) 0%, rgba(250,250,250,0) 55%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Sticker tone="paper" rotate="-rotate-2">
              <FileText size={14} strokeWidth={2.5} /> Legal
            </Sticker>
          </Reveal>
          <h1 className="mt-6 font-display font-black tracking-[-0.02em] text-[clamp(2.2rem,5vw,3.6rem)] text-biz-ink">
            <MaskedLine delay={0.1}>{title}</MaskedLine>
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-3 text-sm font-medium text-biz-ink/45">Last updated: January 2026</p>
            <div className="mt-8 space-y-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-biz-ink/70">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
