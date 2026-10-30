import { events, getEvent } from '@/content/events';
import { SITE_URL } from '@/content/site';
import { icsFile } from '@/lib/events';

// Built at build time, one file per event, so "Add to calendar" needs no outside service.
export const dynamic = 'force-static';
export const dynamicParams = false;
export const generateStaticParams = () => events.map((e) => ({ slug: e.slug }));

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const e = getEvent((await params).slug);
  if (!e) return new Response('Not found', { status: 404 });
  return new Response(icsFile(e, SITE_URL), {
    headers: { 'Content-Type': 'text/calendar; charset=utf-8', 'Content-Disposition': `attachment; filename="${e.slug}.ics"` },
  });
}
