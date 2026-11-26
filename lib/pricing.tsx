export type PackageKind = 'starter' | 'growth' | 'website' | 'launch';

export interface PackageSpec {
  label: string;
  value: string;
}

export interface PackageStep {
  number: string;
  title: string;
  detail: string;
}

export interface PricingPackage {
  slug: string;
  number: string;
  kind: PackageKind;
  title: string;
  description: string;
  price: string;
  unit: string;
  timeline: string;
  bestFor: string;
  overview: string;
  workflowSummary: string;
  features: string[];
  specs: PackageSpec[];
  steps: PackageStep[];
}

export const pricingPackages: PricingPackage[] = [
  {
    slug: 'social-media-starter',
    number: '01',
    kind: 'starter',
    title: 'Social media starter',
    description: 'A steady monthly feed of posts and short videos, planned and reported.',
    price: 'Rp 6.500.000',
    unit: '/ month',
    timeline: 'Monthly cycle',
    bestFor: 'Teams building a consistent weekly presence',
    overview:
      'Designed for brands that need a reliable publishing cadence without managing freelancers every week. We handle the monthly editorial plan, visual design, short-form edits, and basic community moderation in one recurring rhythm.',
    workflowSummary:
      'Each month starts with a single content plan sign-off. Once approved, visuals and short-form videos are produced in a batch, scheduled on time, and reviewed in a concise end-of-month summary.',
    features: [
      '12 posts per month (carousels & single frames)',
      '4 short-form videos (Reels / TikTok)',
      'Community moderation during studio hours',
      'Monthly performance report',
    ],
    specs: [
      { label: 'Example rate', value: 'Rp 6.500.000 / month' },
      { label: 'Feed output', value: '12 posts (3 per week)' },
      { label: 'Video output', value: '4 short-form edits' },
      { label: 'Approval', value: 'Single monthly batch sign-off' },
    ],
    steps: [
      {
        number: '01',
        title: 'Monthly plan & angles',
        detail:
          'Topics, visual formats, and key dates are mapped out in one editorial calendar before production starts.',
      },
      {
        number: '02',
        title: 'Batch design & video edit',
        detail:
          'Carousel frames, static posts, and 9:16 video cuts are produced together so the feed holds one visual voice.',
      },
      {
        number: '03',
        title: 'Publishing & monthly notes',
        detail:
          'Posts go live on schedule, comments are moderated on weekdays, and a short summary closes each month.',
      },
    ],
  },
  {
    slug: 'social-media-growth',
    number: '02',
    kind: 'growth',
    title: 'Social media growth',
    description: 'More content, more formats, and closer tracking for brands ready to scale.',
    price: 'Rp 9.500.000',
    unit: '/ month',
    timeline: 'Monthly cycle',
    bestFor: 'Active brands running campaigns and frequent launches',
    overview:
      'Built for teams publishing almost daily across multiple formats. With 20 feed posts and 8 short-form videos per month, there is room for product education, campaign carousels, and faster iteration based on what audiences respond to.',
    workflowSummary:
      'We pair structured content pillars with weekly check-ins on performance and upcoming promos, keeping production ahead of schedule while leaving room for timely campaign adjustments.',
    features: [
      '20 posts per month across pillars',
      '8 short-form videos (Reels / TikTok)',
      'Editorial calendar & pillar rotation',
      'Community moderation & monthly report',
    ],
    specs: [
      { label: 'Example rate', value: 'Rp 9.500.000 / month' },
      { label: 'Feed output', value: '20 posts (5 per week)' },
      { label: 'Video output', value: '8 short-form edits' },
      { label: 'Review cadence', value: 'Monthly report + mid-month check' },
    ],
    steps: [
      {
        number: '01',
        title: 'Pillar & campaign mapping',
        detail:
          'Content is balanced across education, product proof, and campaign pushes so promos never crowd out value.',
      },
      {
        number: '02',
        title: 'Multi-format production',
        detail:
          'Higher video volume and multi-slide carousels are edited with locked typography, safe zones, and captions.',
      },
      {
        number: '03',
        title: 'Tracking & next-month tuning',
        detail:
          'Top-performing hooks and formats inform the next editorial cycle so output sharpens over time.',
      },
    ],
  },
  {
    slug: 'website-build',
    number: '03',
    kind: 'website',
    title: 'Website build',
    description: 'A landing page or company profile, designed, built, and handed over ready to edit.',
    price: 'Rp 12.000.000',
    unit: 'one-time',
    timeline: '4–6 weeks',
    bestFor: 'Businesses needing a fast, maintainable site',
    overview:
      'A fixed-scope build for a landing page or multi-page company profile. We handle information architecture, UI/UX design in Figma, front-end development, CMS setup, and launch handover so your team can update copy and pages without friction.',
    workflowSummary:
      'Work moves in three clear stages: structure and copy outline first, full visual design in Figma second, and production code with CMS wiring and launch checks third.',
    features: [
      'UI/UX design in Figma',
      'Responsive front-end build & development',
      'CMS setup for editable content',
      'Launch handover & basic documentation',
    ],
    specs: [
      { label: 'Example rate', value: 'Rp 12.000.000 (one-time)' },
      { label: 'Typical scope', value: 'Landing page or company profile' },
      { label: 'Delivery', value: '4–6 weeks from brief' },
      { label: 'Handover', value: 'Source code, CMS & edit guide' },
    ],
    steps: [
      {
        number: '01',
        title: 'Structure & copy alignment',
        detail:
          'We lock the sitemap, page sections, and core messaging before opening visual design.',
      },
      {
        number: '02',
        title: 'UI design & responsive states',
        detail:
          'Desktop and mobile layouts are designed together with clear typography, spacing, and interactive states.',
      },
      {
        number: '03',
        title: 'Build, CMS & launch handover',
        detail:
          'Built for speed and accessibility, wired to a CMS where needed, and handed over with a walkthrough.',
      },
    ],
  },
  {
    slug: 'launch-package',
    number: '04',
    kind: 'launch',
    title: 'Launch package',
    description: 'Social media and website on one schedule with one team.',
    price: 'Rp 17.500.000',
    unit: 'starting price',
    timeline: '6–8 weeks',
    bestFor: 'Product launches, rebrands, and new studio rollouts',
    overview:
      'When a brand launches a new website and social presence with two separate vendors, the visuals and timing drift apart. The Launch package puts both tracks under one team so your site, feed, and launch videos speak the same visual language on day one.',
    workflowSummary:
      'We establish the shared visual system first, build the website in parallel with launch-month social assets, and coordinate the final rollout across web and social channels.',
    features: [
      'Full website build (UI/UX, code, handover)',
      'Launch-month social media content & videos',
      'One schedule, one team, one visual voice',
      'Coordinated launch support',
    ],
    specs: [
      { label: 'Starting rate', value: 'Rp 17.500.000' },
      { label: 'Disciplines', value: 'Web design & build + Social content' },
      { label: 'Timeline', value: '6–8 weeks coordinated rollout' },
      { label: 'Team', value: 'Single studio point of contact' },
    ],
    steps: [
      {
        number: '01',
        title: 'Shared visual direction',
        detail:
          'Type, colour, and layout rules are set once and applied across both web screens and social templates.',
      },
      {
        number: '02',
        title: 'Parallel web & content build',
        detail:
          'Website pages are coded while launch carousels and teaser videos are produced on the same milestone calendar.',
      },
      {
        number: '03',
        title: 'Synchronized launch week',
        detail:
          'The site goes live alongside the opening social posts so visitors see a unified brand from first click.',
      },
    ],
  },
];

export function getPackageBySlug(slug: string): PricingPackage | undefined {
  return pricingPackages.find((pkg) => pkg.slug === slug);
}

/* ── Shared CSS illustrations for package cards & detail pages ── */

function Phone({ tiles, className = '' }: { tiles: string[]; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`aspect-[9/18.5] rounded-[1.6rem] border-[5px] border-[#2a2f2c] bg-[#14170f] p-2 shadow-[0_18px_30px_rgba(20,23,15,0.25)] ${className}`}
    >
      <div className="mx-auto mb-2 h-1.5 w-1/3 rounded-full bg-white/15" />
      <div className="mb-2 flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-[#02e4a4]" />
        <span className="h-1.5 w-1/3 rounded-full bg-white/40" />
      </div>
      <div className="grid grid-cols-3 gap-1">
        {tiles.map((bg, i) => (
          <div key={i} className="aspect-[3/4] rounded-[3px]" style={{ background: bg }} />
        ))}
      </div>
    </div>
  );
}

function Browser({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-xl border border-black/10 bg-[#f7f6f0] shadow-[0_18px_30px_rgba(20,23,15,0.18)] ${className}`}
    >
      <div className="flex h-6 items-center gap-1.5 border-b border-black/10 bg-white px-3">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
      </div>
      <div className="p-4">
        <div className="h-1.5 w-12 rounded-full bg-[#02e4a4]" />
        <div className="mt-3 h-4 w-4/5 rounded bg-[#14170f]" />
        <div className="mt-1.5 h-4 w-3/5 rounded bg-[#14170f]" />
        <div className="mt-3 h-1.5 w-2/3 rounded-full bg-[#5f6258]/40" />
        <div className="mt-4 h-6 w-20 rounded-full bg-[#02e4a4]" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-md bg-[#0b5b42]/20" />
          <div className="h-10 rounded-md bg-[#14170f]/10" />
          <div className="h-10 rounded-md bg-[#0b5b42]/20" />
        </div>
      </div>
    </div>
  );
}

const g = (a: string, b: string) => `linear-gradient(150deg,${a},${b})`;
const feedTiles = [
  g('#02e4a4', '#0b5b42'),
  '#2d3437',
  g('#eae6dc', '#8a8d84'),
  '#20262a',
  '#f3f0e8',
  g('#0b5b42', '#14170f'),
  '#2d3437',
  g('#02e4a4', '#0b5b42'),
  '#20262a',
];

export function PackageVisual({
  kind,
  className = 'aspect-[4/4.4] rounded-2xl',
}: {
  kind: PackageKind;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#eceee0] ${className}`}>
      {kind === 'starter' && (
        <Phone tiles={feedTiles} className="absolute left-1/2 top-[9%] w-[52%] max-w-[240px] -translate-x-1/2 -rotate-6" />
      )}

      {kind === 'growth' && (
        <>
          <Phone tiles={feedTiles} className="absolute left-[10%] top-[10%] w-[46%] max-w-[220px] -rotate-6" />
          <div
            aria-hidden="true"
            className="absolute right-[8%] top-[22%] w-[46%] max-w-[240px] rotate-6 rounded-xl bg-[#14170f] p-3 shadow-[0_18px_30px_rgba(20,23,15,0.25)]"
          >
            <div className="h-1.5 w-1/2 rounded-full bg-white/40" />
            <div className="mt-4 flex h-24 items-end gap-1.5">
              {[28, 40, 36, 58, 72, 92].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-sm bg-[#02e4a4]"
                  style={{ height: `${h}%`, opacity: 0.45 + i * 0.11 }}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {kind === 'website' && (
        <Browser className="absolute inset-x-[9%] top-[16%] mx-auto max-w-[560px] -rotate-2" />
      )}

      {kind === 'launch' && (
        <>
          <Browser className="absolute left-[7%] top-[12%] w-[72%] max-w-[520px] -rotate-2" />
          <Phone
            tiles={feedTiles.slice(0, 6)}
            className="absolute bottom-[-6%] right-[9%] w-[36%] max-w-[200px] rotate-6"
          />
        </>
      )}
    </div>
  );
}
