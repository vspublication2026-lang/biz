import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { EASE } from "@/components/Reveal";
import asset from "@/lib/asset";

const MENUS = [
  {
    label: "What We Build",
    target: "what-we-build",
    items: ["Signature Properties", "Licensed Brands", "Growth Partnerships", "Experiential Platforms"],
  },
  {
    label: "Who We Work With",
    target: "who-we-work-with",
    items: ["Businesses", "Industry Leaders", "Industry Associations", "Global Brands & Media"],
  },
  {
    label: "How We Engage",
    target: "engage",
    items: ["Intelligence", "Forums", "Networks", "Access"],
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const go = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        data-testid="main-nav"
        className="fixed top-0 left-0 right-0 z-50 bg-biz-paper/80 backdrop-blur-xl border-b border-biz-ink/5"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
          <Link
            to="/"
            data-testid="nav-logo"
            aria-label="Bizora home"
            onClick={() => {
              if (location.pathname === "/") {
                if (window.__lenis) window.__lenis.scrollTo(0);
                else window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img src={asset("/assets/logo-full.png?v=3")} alt="Bizora — Where access turns into outcomes" className="h-9 sm:h-11 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {MENUS.map((menu) => (
              <div key={menu.label} className="relative group">
                <button
                  data-testid={`nav-${menu.target}`}
                  onClick={() => go(menu.target)}
                  className="flex items-center gap-1 text-[15px] font-medium text-biz-ink/80 hover:text-biz-ink transition-colors duration-300"
                >
                  {menu.label}
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white rounded-2xl shadow-[0_24px_60px_-24px_rgba(17,17,17,0.25)] border border-biz-ink/5 p-2 w-72">
                    {menu.items.map((item) => (
                      <button
                        key={item}
                        data-testid={`nav-item-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        onClick={() => go(menu.target)}
                        className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-biz-ink/75 hover:bg-biz-paper hover:text-biz-ink transition-colors duration-300"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/contact-us"
              data-testid="nav-contact"
              className="rounded-full bg-biz-ink text-biz-paper px-5 py-2.5 text-sm font-semibold hover:bg-biz-blue transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          <button
            data-testid="nav-menu-button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 -mr-2"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-[60] bg-biz-paper flex flex-col"
          >
            <div className="h-[72px] px-5 flex items-center justify-between">
              <img src={asset("/assets/logo-full.png?v=3")} alt="Bizora — Where access turns into outcomes" className="h-9 w-auto" />
              <button data-testid="nav-close-button" aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 -mr-2">
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2 overflow-y-auto">
              {MENUS.map((m) => ({ label: m.label, target: m.target })).map(
                (item, i) => (
                  <motion.button
                    key={item.label}
                    data-testid={`mobile-nav-${item.target}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.07 }}
                    onClick={() => go(item.target)}
                    className="text-left font-display font-bold text-3xl sm:text-4xl py-3 text-biz-ink"
                  >
                    {item.label}
                  </motion.button>
                )
              )}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
                className="pt-6 flex flex-col gap-4"
              >
                <Link
                  to="/contact-us"
                  data-testid="mobile-nav-contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-full bg-biz-ink text-biz-paper px-8 py-4 font-display font-semibold text-lg"
                >
                  Contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
