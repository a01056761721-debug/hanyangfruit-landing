"use client";

import { useEffect } from "react";

export default function ScrollRevealController() {
  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    const reveal = (target: Element) => {
      target.classList.add("hf-scroll-reveal-visible");
    };

    const setup = () => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-reveal]"));
      if (!targets.length) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion || !("IntersectionObserver" in window)) {
        targets.forEach(reveal);
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target);
            observer?.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -22% 0px",
          threshold: 0.18,
        },
      );

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const isAlreadyVisible = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;

        if (isAlreadyVisible) {
          reveal(target);
          return;
        }

        target.classList.add("hf-scroll-reveal-pending");
        observer?.observe(target);
      });
    };

    const timer = window.setTimeout(setup, 120);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  return null;
}
