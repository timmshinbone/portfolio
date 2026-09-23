import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
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
          : "text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light"
      }`}
    >
      {title}
    </Link>
  );
};

const ThickThinRule = () => (
  <div
    className="text-dark dark:text-light"
    style={{
      height: "5px",
      borderTop: "2px solid currentColor",
      borderBottom: "1px solid currentColor",
      borderLeft: 0,
      borderRight: 0,
    }}
  />
);

const ThinRule = () => (
  <div
    className="text-dark dark:text-light"
    style={{
      height: 0,
      borderTop: "1px solid currentColor",
      borderLeft: 0,
      borderRight: 0,
    }}
  />
);

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const toggleEdition = () => setMode(mode === "light" ? "dark" : "light");

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

          {/* Thick-thin rule */}
          <div className="mt-5">
            <ThickThinRule />
          </div>

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
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/timmshinbone"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors"
              >
                GitHub
              </a>
              <button
                onClick={toggleEdition}
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
              className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors"
            >
              {isOpen ? "Close" : "More"}
            </button>
          </div>

          <ThinRule />
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
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/timmshinbone"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="font-serif text-[11px] tracking-[0.08em] uppercase text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors"
              >
                GitHub
              </a>
              <button
                onClick={() => { toggleEdition(); close(); }}
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
