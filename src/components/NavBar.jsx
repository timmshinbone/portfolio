import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const NavLink = ({ href, title, onClick }) => {
  const router = useRouter();
  const active = router.asPath === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-serif text-[11px] tracking-[0.08em] uppercase transition-colors ${
        active
          ? "text-primary dark:text-primaryDark"
          : "text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light"
      }`}
    >
      {title}
    </Link>
  );
};

// DateLine: newspaper-style dateline showing today's date and availability
const DateLine = () => {
  const [dateText, setDateText] = useState("");
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
  }, []);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setDateText(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "America/Chicago",
        })
      );
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!dateText) return null;

  const openPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        metaKey: isMac === true,
        ctrlKey: isMac === false,
        bubbles: true,
      })
    );
  };

  return (
    <div className="flex items-center justify-between mt-2 mb-1">
      <div className="flex items-center gap-5">
        <span className="font-serif text-[10px] tracking-[0.08em] uppercase text-dark/45 dark:text-light/45 select-none">
          {dateText}
        </span>
        <span
          className="font-serif text-[10px] tracking-[0.08em] uppercase text-[#006786] dark:text-[#62c5ee] select-none"
          aria-label="Currently available for work"
        >
          Available for work
        </span>
      </div>
      <button
        onClick={openPalette}
        aria-label={`Search this site — press ${isMac ? "Command K" : "Control K"}`}
        className="hidden sm:inline-flex items-center gap-1.5 font-serif text-[10px] tracking-[0.08em] uppercase text-dark/40 dark:text-light/40 hover:text-dark/70 dark:hover:text-light/70 transition-colors select-none"
      >
        Search
        <kbd className="font-serif not-italic text-[9px] leading-none px-[5px] py-[2px] border border-current rounded-[2px] tracking-normal normal-case">
          {isMac ? "⌘K" : "Ctrl K"}
        </kbd>
      </button>
    </div>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtnRefDesktop = useRef(null);
  const toggleBtnRefMobile = useRef(null);

  // Animation controls for the two rules (items 1)
  const thickCtrl = useAnimation();
  const thinCtrl = useAnimation();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;
    if (!sessionStorage.getItem("rules-drawn")) {
      sessionStorage.setItem("rules-drawn", "1");
      thickCtrl.set({ scaleX: 0 });
      thinCtrl.set({ scaleX: 0 });
      thickCtrl.start({
        scaleX: 1,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      });
      thinCtrl.start({
        scaleX: 1,
        transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: 0.08 },
      });
    }
  }, [thickCtrl, thinCtrl]);

  const close = () => setIsOpen(false);

  // Clip-path reveal (item 6)
  const runClipReveal = (btnRef) => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const newMode = mode === "light" ? "dark" : "light";

    if (prefersReduced || !btnRef.current) {
      setMode(newMode);
      return;
    }

    const rect = btnRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const oldBg = mode === "light" ? "#f3f2f2" : "#201e1d";

    const overlay = document.createElement("div");
    overlay.style.cssText = [
      "position: fixed",
      "inset: 0",
      `background: ${oldBg}`,
      "z-index: 9999",
      `clip-path: circle(150vmax at ${x}px ${y}px)`,
      "pointer-events: none",
      "will-change: clip-path",
    ].join("; ");
    document.body.appendChild(overlay);

    // Apply theme immediately — new theme lives under the overlay
    setMode(newMode);

    // Two rAFs ensure the initial clip-path is painted before transition
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.style.transition = "clip-path 400ms ease-in";
        overlay.style.clipPath = `circle(0% at ${x}px ${y}px)`;
        overlay.addEventListener(
          "transitionend",
          () => document.body.removeChild(overlay),
          { once: true }
        );
      });
    });
  };

  return (
    <header className="bg-light dark:bg-dark w-full relative z-10">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,64px)]">
        <div className="pt-10">

          {/* Nameplate */}
          <Link
            href="/"
            className="inline-block font-serif font-semibold leading-[0.95] tracking-[-0.025em] text-dark dark:text-light text-[clamp(28px,3.5vw,56px)] hover:text-primary dark:hover:text-primaryDark transition-colors"
          >
            Timm Schoenborn
          </Link>

          {/* Live dateline (item 2) */}
          <DateLine />

          {/* Thick-thin rule — draws in on first visit (item 1) */}
          <motion.div
            className="mt-2 text-dark dark:text-light"
            animate={thickCtrl}
            style={{
              height: "5px",
              borderTop: "2px solid currentColor",
              borderBottom: "1px solid currentColor",
              borderLeft: 0,
              borderRight: 0,
              transformOrigin: "left",
            }}
          />

          {/* Desktop link row — hidden at lg (≤1023px) */}
          <div className="flex items-center justify-between py-[14px] lg:hidden">
            <nav className="flex items-center gap-7">
              <NavLink href="/projects" title="Work" />
              <NavLink href="/about" title="About" />
              <NavLink href="/hire-me" title="Hire Me" />
              <NavLink href="/pay-me" title="Pay Me" />
            </nav>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/timm-schoenborn/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/timmshinbone"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light transition-colors"
              >
                GitHub
              </a>
              <button
                ref={toggleBtnRefDesktop}
                onClick={() => runClipReveal(toggleBtnRefDesktop)}
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-primary dark:text-primaryDark hover:underline hover:underline-offset-2 transition-colors"
              >
                {mode === "light" ? "Night edition" : "Day edition"}
              </button>
            </div>
          </div>

          {/* Mobile row — only visible at lg (≤1023px) */}
          <div className="hidden lg:flex items-center justify-between py-[14px]">
            <div className="flex items-center gap-6 flex-wrap">
              <NavLink href="/projects" title="Work" onClick={close} />
              <NavLink href="/about" title="About" onClick={close} />
              <NavLink href="/hire-me" title="Hire Me" onClick={close} />
              <NavLink href="/pay-me" title="Pay Me" onClick={close} />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light transition-colors"
            >
              {isOpen ? "Close" : "More"}
            </button>
          </div>

          {/* Thin rule — draws in on first visit (item 1) */}
          <motion.div
            className="text-dark dark:text-light"
            animate={thinCtrl}
            style={{
              height: 0,
              borderTop: "1px solid currentColor",
              borderLeft: 0,
              borderRight: 0,
              transformOrigin: "left",
            }}
          />
        </div>
      </div>

      {/* Mobile sheet — social links + theme toggle */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="w-full bg-light dark:bg-dark border-b border-dark/10 dark:border-light/10"
          >
            <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,64px)] py-6 flex flex-wrap items-center gap-6">
              <a
                href="https://www.linkedin.com/in/timm-schoenborn/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/timmshinbone"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/70 dark:text-light/70 hover:text-dark dark:hover:text-light transition-colors"
              >
                GitHub
              </a>
              <button
                ref={toggleBtnRefMobile}
                onClick={() => {
                  runClipReveal(toggleBtnRefMobile);
                  close();
                }}
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-primary dark:text-primaryDark hover:underline hover:underline-offset-2 transition-colors"
              >
                {mode === "light" ? "Night edition" : "Day edition"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
