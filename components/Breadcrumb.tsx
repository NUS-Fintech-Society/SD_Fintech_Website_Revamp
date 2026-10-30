import Link from 'next/link';

/** The trail above an inner page's h1: ancestors as links, the current page as plain text. */
export default function Breadcrumb({ trail, current }: { trail: [label: string, href: string][]; current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="fs-crumbs t-ui">
        {trail.map(([label, href]) => (
          <li key={href}><Link href={href}>{label}</Link></li>
        ))}
        <li><span aria-current="page">{current}</span></li>
      </ol>
    </nav>
  );
}
