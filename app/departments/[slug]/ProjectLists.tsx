'use client';

import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import type { Project } from '@/content/departments';
import { academicYear } from '@/lib/events';
import { useNow } from '@/lib/use-now';

const SHOWN_PAST = 6;

/** Projects split into Current (this AY or later; the AY turns over on 1 Aug) and Past, by the browser's clock after hydrating. */
export default function ProjectLists({ projects, buildNow }: { projects: Project[]; buildNow: number }) {
  const ay = academicYear(new Date(useNow(buildNow)).toISOString()).slice(2); // "2026/27"
  const current = projects.filter((p) => p.ay >= ay);
  const past = projects.filter((p) => p.ay < ay).sort((a, b) => b.ay.localeCompare(a.ay));
  const [showAll, setShowAll] = useState(false);
  const firstEarlier = useRef<HTMLLIElement>(null);

  // Only Past is cut to SHOWN_PAST rows; Current always shows in full.
  const row = (p: Project, i: number, inPast: boolean) => (
    <li
      key={p.title}
      className="fs-rowitem"
      hidden={inPast && i >= SHOWN_PAST && !showAll}
      ref={inPast && i === SHOWN_PAST ? firstEarlier : undefined}
      tabIndex={inPast && i === SHOWN_PAST ? -1 : undefined}
    >
      <div className="fs-rowtext">
        <p className="t-label">AY{p.ay}</p>
        <h4 className="t-row">{p.title}</h4>
        <p className="fs-muted">{p.summary}</p>
        {p.partner && <p className="t-ui">With {p.partner}</p>}
        {p.link && (
          <a href={p.link.url} className="fs-pill fs-pill--outline fs-pill--small">
            {p.link.label}<span className="fs-sr"> for {p.title}</span>
          </a>
        )}
      </div>
    </li>
  );

  return (
    <section className="ev-wide" aria-labelledby="projects-title">
      <h2 className="t-h2" id="projects-title">Projects</h2>
      {current.length > 0 && (
        <div className="ev-stack">
          <h3 className="t-h3">Current</h3>
          <ul className="fs-rows">{current.map((p, i) => row(p, i, false))}</ul>
        </div>
      )}
      {past.length > 0 && (
        <div className="ev-stack">
          <h3 className="t-h3">Past</h3>
          <ul className="fs-rows" id="past-projects">{past.map((p, i) => row(p, i, true))}</ul>
          {past.length > SHOWN_PAST && !showAll && (
            <button
              type="button"
              className="fs-pill fs-pill--outline self-start"
              aria-expanded={showAll}
              aria-controls="past-projects"
              onClick={() => {
                flushSync(() => setShowAll(true));
                firstEarlier.current?.focus();
              }}
            >
              Show earlier projects
            </button>
          )}
        </div>
      )}
    </section>
  );
}
