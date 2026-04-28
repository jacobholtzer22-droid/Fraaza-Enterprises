"use client";

import { useState } from "react";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[var(--border)]">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-[var(--text-primary)]">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`mt-1 shrink-0 text-[var(--accent)] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        >
          <path d="M10 4v12M4 10h12" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-7 text-[var(--text-secondary)] pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-2xl bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-sm)] sm:p-10">
      {items.map((faq, idx) => (
        <AccordionItem
          key={idx}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}
