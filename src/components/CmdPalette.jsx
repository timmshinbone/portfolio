import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { caseStudies } from "@/data/caseStudies";

const EMAIL = "timmschoenborn@gmail.com";

function buildCommands(copied) {
  return [
    ...caseStudies.map((cs) => ({
      label: cs.title,
      sub: cs.kicker,
      action: "route",
      href: `/projects/${cs.slug}`,
    })),
    {
      label: "Book a call",
      sub: "Calendly · 30 min intro",
      action: "route",
      href: "/hire-me#book-me",
    },
    {
      label: copied ? "Copied!" : `Copy email — ${EMAIL}`,
      sub: "Clipboard",
      action: "copy",
    },
    {
      label: "View all work",
      sub: "Projects",
      action: "route",
      href: "/projects",
    },
    {
      label: "Hire me",
      sub: "Services overview",
      action: "route",
      href: "/hire-me",
    },
  ];
}

export default function CmdPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const commands = buildCommands(copied);
  const filtered = query
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.sub.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  // Open / close on Cmd+K / Ctrl+K
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) {
            setQuery("");
            setSelected(0);
          }
          return !prev;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Reset selection when query changes
  useEffect(() => {
    setSelected(0);
  }, [query]);

  // Scroll selected item into view
  useEffect(() => {
    const el = listRef.current?.children[selected];
    el?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  const runCommand = (cmd) => {
    if (cmd.action === "route") {
      router.push(cmd.href);
      setOpen(false);
    } else if (cmd.action === "copy") {
      navigator.clipboard.writeText(EMAIL).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      if (filtered[selected]) runCommand(filtered[selected]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[9999] bg-dark/30 dark:bg-dark/60"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative mx-auto mt-[15vh] max-w-[560px] bg-[#f3f2f2] dark:bg-[#2d2b2b] rounded-sm shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search…"
          aria-label="Search commands"
          className="w-full px-4 py-3 font-serif text-[15px] text-dark dark:text-light bg-transparent border-b border-dark/15 dark:border-light/15 focus:outline-none placeholder:text-dark/35 dark:placeholder:text-light/35"
        />

        {/* Results list */}
        <ul
          ref={listRef}
          role="listbox"
          className="max-h-[320px] overflow-y-auto p-1"
        >
          {filtered.length === 0 && (
            <li className="px-4 py-3 font-serif text-[13px] text-dark/50 dark:text-light/50">
              No results
            </li>
          )}
          {filtered.map((cmd, i) => {
            const active = i === selected;
            return (
              <li key={`${cmd.label}-${i}`} role="option" aria-selected={active}>
                <button
                  className={`w-full text-left px-4 py-2.5 rounded-sm transition-colors font-serif flex flex-col gap-0.5 ${
                    active
                      ? "bg-[#006786] dark:bg-[#62c5ee] text-[#f3f2f2] dark:text-[#201e1d]"
                      : "text-dark dark:text-light hover:bg-dark/5 dark:hover:bg-light/5"
                  }`}
                  onClick={() => runCommand(cmd)}
                  onMouseEnter={() => setSelected(i)}
                >
                  <span className="text-[14px] leading-[1.3]">{cmd.label}</span>
                  <span
                    className={`text-[10px] tracking-[0.07em] uppercase font-serif ${
                      active ? "opacity-75" : "opacity-45"
                    }`}
                  >
                    {cmd.sub}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Footer hint */}
        <div className="px-4 py-2 border-t border-dark/10 dark:border-light/10 flex items-center">
          <span className="font-serif text-[10px] tracking-[0.07em] uppercase text-dark/35 dark:text-light/35">
            ↑↓ Navigate · Enter Select · Esc Close
          </span>
          <span className="font-serif text-[10px] tracking-[0.07em] uppercase text-dark/35 dark:text-light/35 ml-auto">
            ⌘K
          </span>
        </div>
      </div>
    </div>
  );
}
