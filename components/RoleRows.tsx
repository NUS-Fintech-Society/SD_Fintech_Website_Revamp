import Link from 'next/link';
import Icon from '@/components/Icon';
import type { Role } from '@/content/join';

/** Role link rows in a white panel: the title is each row's one link. h4 under a department (Join), h3 elsewhere. */
export default function RoleRows({ roles, level = 'h4' }: { roles: Role[]; level?: 'h3' | 'h4' }) {
  const Title = level;
  return (
    <ul className="fs-rows">
      {roles.map((r) => (
        <li key={r.slug} className="fs-rowitem">
          <div className="fs-rowtext">
            <Title className="t-row"><Link href={`/join/${r.slug}`} className="fs-rowlink">{r.title}</Link></Title>
            <p className="fs-muted">{r.line}</p>
          </div>
          <Icon name="next" size={20} className="fs-chev" />
        </li>
      ))}
    </ul>
  );
}
