import { Link, useLocation, useNavigate } from "react-router-dom";
import asset from "@/lib/asset";

const ENGAGE_ITEMS = ["Intelligence", "Forums", "Networks", "Access"];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const go = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  const linkCls = "block text-left text-sm text-biz-ink/65 hover:text-biz-ink transition-colors duration-300 py-1";

  return (
    <footer data-testid="footer" className="border-t border-biz-ink/10 bg-biz-paper">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <img src={asset("/assets/logo-full.png?v=3")} alt="Bizora — Where access turns into outcomes" className="h-20 w-auto" data-testid="footer-logo" />
            <a
              href="mailto:marketing@bizoramedia.com"
              data-testid="footer-email"
              className="mt-6 inline-block font-semibold text-biz-ink hover:text-biz-blue transition-colors duration-300"
            >
              marketing@bizoramedia.com
            </a>
          </div>

          <div>
            <p className="font-display font-bold text-sm text-biz-ink/40 mb-3">Explore</p>
            <button data-testid="footer-link-what-we-build" onClick={() => go("what-we-build")} className={linkCls}>What We Build</button>
            <button data-testid="footer-link-who-we-work-with" onClick={() => go("who-we-work-with")} className={linkCls}>Who We Work With</button>
            <button data-testid="footer-link-about" onClick={() => go("north-star")} className={linkCls}>About Us</button>
            <Link to="/contact-us" data-testid="footer-link-contact" className={linkCls}>Contact</Link>
          </div>

          <div>
            <p className="font-display font-bold text-sm text-biz-ink/40 mb-3">How We Engage</p>
            {ENGAGE_ITEMS.map((item) => (
              <button
                key={item}
                data-testid={`footer-engage-${item.toLowerCase()}`}
                onClick={() => go("engage")}
                className={linkCls}
              >
                {item}
              </button>
            ))}
          </div>

          <div>
            <p className="font-display font-bold text-sm text-biz-ink/40 mb-3">Legal</p>
            <Link to="/privacy-policy" data-testid="footer-privacy-link" className={linkCls}>Privacy Policy</Link>
            <Link to="/cookie-policy" data-testid="footer-cookie-link" className={linkCls}>Cookie Policy</Link>
            <Link to="/terms-and-conditions" data-testid="footer-terms-link" className={linkCls}>Terms &amp; Conditions</Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-biz-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-biz-ink/40">© 2026 Bizora</p>
          <p className="text-sm text-biz-ink/40">Where access turns into outcomes.</p>
        </div>
      </div>
    </footer>
  );
}
