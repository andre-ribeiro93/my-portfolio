"use client"

import { useEffect, useState } from "react";
import { menuItems } from "./menu-items";

export default function Menu() {

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = menuItems.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { 
        root: null,
        rootMargin: "-40% 0px -60% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };

  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-col gap-y-[26px] text-xs font-bold tracking-widest">
        {menuItems.map((item) => {
          const isActive = item.href === activeSection;

          return (
            <li key={item.id}>
              <a 
                href={item.href}
                className={`flex items-center w-fit group ${
                  isActive ? "text-text-secondary-100" : ""
                }`} 
              >
                <span className={`content-[''] w-8 h-px mr-4 bg-text-secondary-60 transition-all duration-300 ease-in-out ${
                  isActive ? "w-16 h-0.5 bg-text-secondary-100" : "group-hover:w-16 group-hover:h-0.5 group-hover:bg-text-secondary-100"
                }`}></span>
                <span>{item.label}</span>
              </a>
            </li>
          );

        })}
      </ul>
    </nav>
  )
}