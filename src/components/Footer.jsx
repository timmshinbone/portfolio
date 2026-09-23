import React from "react"

const Footer = () => {
  return (
    <footer className="w-full mt-16 pb-14">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,64px)]">
        <div
          className="text-dark dark:text-light mb-4"
          style={{ height: 0, borderTop: "1px solid currentColor" }}
        />
        <div className="flex flex-wrap gap-x-7 gap-y-1 font-serif text-[13px] leading-[28px] tracking-[0.04em] uppercase text-dark/60 dark:text-light/60">
          <span>© {new Date().getFullYear()} Timm Schoenborn</span>
          <span>Highland Park, IL</span>
          <a
            href="mailto:timmschoenborn@gmail.com"
            className="hover:text-dark dark:hover:text-light hover:underline hover:underline-offset-2 transition-colors"
          >
            timmschoenborn@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
