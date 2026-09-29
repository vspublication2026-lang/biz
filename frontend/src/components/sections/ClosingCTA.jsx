import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
export default function ClosingCTA() {
  return (
    <section data-testid="closing-cta-section" className="py-24 sm:py-36 lg:py-44">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-biz-ink/45">Ready when you are</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display font-black tracking-[-0.03em] leading-[0.92] text-[clamp(3rem,10vw,9rem)] text-biz-ink">
              Let&rsquo;s build
              <br />
              what&rsquo;s next.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-12 sm:mt-16 flex flex-col items-center gap-8">
              <Link
                to="/contact-us"
                data-testid="cta-start-conversation"
                className="group inline-flex items-center gap-3 rounded-full bg-biz-ink px-10 py-5 font-display font-semibold text-lg text-biz-paper transition-colors duration-300 hover:bg-biz-blue"
              >
                Start a conversation
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:marketing@bizoramedia.com"
                data-testid="cta-email"
                className="font-display text-base sm:text-lg font-semibold text-biz-ink underline decoration-2 decoration-biz-ink/25 underline-offset-[6px] transition-colors duration-300 hover:decoration-biz-ink"
              >
                marketing@bizoramedia.com
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
