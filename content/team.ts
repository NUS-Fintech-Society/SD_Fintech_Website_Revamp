import type { DepartmentSlug } from '@/content/departments';

// The committee for the current AY. The About page owns it; department pages
// read their directors from here, so the two pages can't disagree.
export type TeamGroup = 'advisors' | 'president' | DepartmentSlug;
export type Person = { id: string; name: string; roles: { group: TeamGroup; label: string }[] };

const director = (group: DepartmentSlug, n: number): Person => ({
  id: `${group}-director-${n}`,
  name: '[Director name]',
  roles: [{ group, label: 'Co-director' }],
});

export const team: { ay: string; people: Person[] } = {
  ay: '2026/27',
  people: [
    director('blockchain', 1), director('blockchain', 2),
    director('machine-learning', 1), director('machine-learning', 2),
    director('quant', 1), director('quant', 2), director('quant', 3),
    director('external-relations', 1), director('external-relations', 2),
    director('internal-affairs', 1), director('internal-affairs', 2),
  ],
};

export const directorsOf = (slug: DepartmentSlug) => team.people.filter((p) => p.roles.some((r) => r.group === slug));
