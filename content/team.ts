import type { DepartmentSlug } from '@/content/departments';

// The committee for the current AY. The About page owns it; department pages
// read their directors from here, so the two pages can't disagree.
export type TeamGroup = 'advisors' | 'president' | DepartmentSlug;
export type Person = {
  id: string;
  name: string;
  photo?: string; // 4:5 headshot in public/images/team/<id>.jpg, at least 600px wide
  linkedin?: string; // students only, and only when they agree to publish it
  // One entry per group the person appears in; `also` is the card's second line.
  roles: { group: TeamGroup; label: string; also?: string }[];
};

const director = (id: string, name: string, group: DepartmentSlug): Person => ({
  id,
  name,
  roles: [{ group, label: 'Co-Director' }],
});

// Advisors carry their title in the name, and have no LinkedIn button.
const advisor = (id: string, name: string, photo: string): Person => ({
  id,
  name,
  photo,
  roles: [{ group: 'advisors', label: 'Advisor' }],
});

// Cards in each group follow this order.
export const team: { ay: string; people: Person[] } = {
  ay: '2026/27',
  people: [
    advisor('hahn-jungpil', 'Prof Hahn Jungpil', '/images/team/hahn-jungpil.jpg'),
    advisor('nicholas-garcia', 'Dr Nicholas Garcia', '/images/team/nicholas-garcia.jpg'),
    director('jing-yuan', 'Jing Yuan', 'blockchain'),
    director('khang-sian', 'Khang Sian', 'blockchain'),
    director('sean', 'Sean', 'machine-learning'),
    {
      id: 'shuo',
      name: 'Shuo',
      roles: [
        { group: 'president', label: 'President', also: 'Also ML Co-Director' },
        { group: 'machine-learning', label: 'Co-Director', also: 'Also President' },
      ],
    },
    director('jun-feng', 'Jun Feng', 'quant'),
    director('gwen', 'Gwen', 'quant'),
    director('bao-chau', 'Bao Chau', 'quant'),
    director('yong-wei', 'Yong Wei', 'external-relations'),
    director('tingan', 'Tingan', 'external-relations'),
    director('bryan', 'Bryan', 'internal-affairs'),
    director('diego', 'Diego', 'internal-affairs'),
  ],
};

export const membersOf = (group: TeamGroup) =>
  team.people.flatMap((person) => person.roles.filter((r) => r.group === group).map((role) => ({ person, role })));

export const directorsOf = (slug: DepartmentSlug) => membersOf(slug).map((m) => m.person);
