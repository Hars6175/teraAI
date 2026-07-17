// Shared dark two-column auth shell, used by BOTH the Stack Auth handler
// (/handler/[...stack], cloud) and the local/OSS auth pages (/auth/login,
// /auth/signup). LEFT: a centered card that wraps the auth form (`children`).
// RIGHT (lg+ only): a brand/value panel with the Dograh logo, proof points, and
// a Bland-style enterprise CTA block at the bottom (passed in as `enterpriseSlot`).
// Mobile collapses to the single card column. The form column scrolls and stays
// centered so tall (sign-up) forms never clip on short viewports. Palette is the
// app's blacks/greys with one warm CTA accent.

import type { ReactNode } from "react";

import { BrandLogo } from "@/components/BrandLogo";

const HIGHLIGHTS = [
  "Speech to Speech",
  "MCP Native",
  "Bring Your Own Key",
  "Self Host or Cloud",
  "Carrier Agnostic",
  "Full Audit Trail",
];

export function AuthShell({
  children,
  enterpriseSlot,
}: {
  children: ReactNode;
  enterpriseSlot?: ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full bg-background lg:grid-cols-[55%_45%]">
      {/* Form column (LEFT) — scrolls and stays centered so tall forms never
          clip. Carries the giant faded "dograh" imprint along its bottom. */}
      <main className="auth-imprint flex min-h-screen flex-col overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md space-y-6 rounded-[20px] border border-border/60 bg-card p-6 shadow-lg sm:p-8">
            {/* Mobile-only wordmark (brand panel is hidden) */}
            <div className="lg:hidden">
              <BrandLogo className="h-7" />
            </div>
            {children}
          </div>
        </div>
      </main>

      {/* Brand / value panel (RIGHT) — hidden on mobile */}
      <aside className="relative hidden flex-col justify-between overflow-hidden border-l border-border/60 bg-zinc-950 p-10 lg:flex xl:p-14">
        <div className="relative">
          <BrandLogo inverse className="h-8" />
        </div>

        <div className="relative max-w-md space-y-5 my-auto">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-50 xl:text-4xl">
            Automated receptionists your customers love talking to.
          </h1>
          <p className="text-sm text-zinc-400">
            Set up a custom, realistic AI voice to answer customer calls, answer questions, and route calls in minutes. Use your own carriers and models.
          </p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {HIGHLIGHTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 text-cta"><path d="M5 12l5 5 9-11"/></svg>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonial */}
        <div className="relative max-w-md space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 mt-8">
          <p className="text-sm italic text-zinc-300">
            “We set up one Tera phone helper to answer our common shop questions. Now, our customers get answers immediately, we don't miss calls when we are busy, and we save hours every week.”
          </p>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cta text-sm font-bold text-white">
              MC
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-100">Marcus Chen</div>
              <div className="text-xs text-zinc-400">VP Customer Experience, Northwind Logistics</div>
            </div>
          </div>
          {enterpriseSlot && (
            <div className="pt-4 mt-4 border-t border-white/10">
              {enterpriseSlot}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
