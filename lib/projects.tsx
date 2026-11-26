import type { ReactNode } from 'react';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectDecision {
  number: string;
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  status: string;
  timeline: string;
  scope: string;
  overview: string;
  approach: string;
  specs: ProjectSpec[];
  decisions: ProjectDecision[];
  deliverables: string[];
  preview: ReactNode;
}

export const projects: Project[] = [
  {
    slug: 'steady-rhythm-feed',
    number: '01',
    category: 'Social media',
    title: 'A feed with a steady rhythm',
    description: 'Illustrative feed layout for daily posts and carousels.',
    status: 'Illustrative sample',
    timeline: 'Ongoing monthly system',
    scope: 'Feed architecture, grid templates, visual pacing',
    overview:
      'A social feed breaks down when every post invents a new layout. This sample shows a 3-column grid system built around three recurring post roles: educational carousels, quiet typographic notes, and high-contrast product frames.',
    approach:
      'Instead of treating each post as a standalone poster, the grid alternates density and breathing room. Dark charcoal frames anchor product shots, paper-toned tiles carry short editorial statements, and mint-to-forest gradients mark campaign announcements.',
    specs: [
      { label: 'Format', value: '4:5 Portrait & 1:1 Square' },
      { label: 'Grid cadence', value: '3-column alternating rhythm' },
      { label: 'Typography', value: 'Archivo + Instrument Serif' },
      { label: 'Handover', value: 'Modular Figma template library' },
    ],
    decisions: [
      {
        number: '01',
        title: 'Alternating visual weight',
        detail:
          'Dense multi-slide posts sit next to minimal single-subject frames so the profile grid stays scannable at a glance.',
      },
      {
        number: '02',
        title: 'Locked colour roles',
        detail:
          'Mint and forest green are reserved for launches and key callouts, keeping daily posts calm and recognizable.',
      },
      {
        number: '03',
        title: 'Template-first production',
        detail:
          'Safe margins, baseline grids, and headline limits are baked into components so weekly output stays consistent.',
      },
    ],
    deliverables: [
      '12-tile grid blueprint',
      'Carousel cover & inner slide system',
      'Quote & announcement templates',
      'Caption & hashtag structure guide',
    ],
    preview: (
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-3 gap-2 p-5">
        <div className="rounded-lg" style={{ background: 'linear-gradient(150deg,#02e4a4,#0b5b42)' }} />
        <div className="rounded-lg" style={{ background: '#20262a' }} />
        <div className="rounded-lg" style={{ background: 'linear-gradient(160deg,#eae6dc,#8a8d84)' }} />
        <div className="rounded-lg" style={{ background: '#2d3437' }} />
        <div className="grid place-items-center rounded-lg" style={{ background: '#f3f0e8' }}>
          <span className="h-6 w-6 rounded-full border-[3px] border-[#14170f]" />
        </div>
        <div className="rounded-lg" style={{ background: 'linear-gradient(140deg,#0b5b42,#14170f)' }} />
      </div>
    ),
  },
  {
    slug: 'first-two-seconds-video',
    number: '02',
    category: 'Short-form video',
    title: 'Frames made for the first two seconds',
    description: 'Illustrative phone layout for Reels and TikTok.',
    status: 'Illustrative sample',
    timeline: '2-week sprint',
    scope: 'Vertical video framing, hook pacing, subtitle system',
    overview:
      'Vertical video is watched on a crowded screen with platform UI covering the bottom and right edges. This sample maps out safe zones, opening hook composition, and kinetic caption placement for 9:16 Reels and TikTok.',
    approach:
      'Every cut is framed around a clear focal zone in the upper two-thirds of the viewport. Captions sit above the platform description area with high-contrast backing, while the opening two seconds pair a direct visual shift with a single-line premise.',
    specs: [
      { label: 'Format', value: '9:16 Vertical (1080 × 1920)' },
      { label: 'Frame rate', value: '30 / 60 fps delivery' },
      { label: 'Safe zone', value: 'Top 15% & bottom 25% clear' },
      { label: 'Audio', value: 'Beat-synced cut markers' },
    ],
    decisions: [
      {
        number: '01',
        title: 'UI-aware safe margins',
        detail:
          'On-screen titles and lower-thirds stay clear of like, comment, and caption overlays across Reels and TikTok.',
      },
      {
        number: '02',
        title: 'Two-second visual hook',
        detail:
          'The opening frame establishes the subject and tension immediately without a slow fade-in or logo bumper.',
      },
      {
        number: '03',
        title: 'Readable sound-off captions',
        detail:
          'Short 3–5 word phrase blocks timed to speech cadence so the story holds up even on mute.',
      },
    ],
    deliverables: [
      '9:16 safe-zone overlay kit',
      'Hook & pacing storyboard',
      'Animated subtitle presets',
      'Export specs for IG Reels & TikTok',
    ],
    preview: (
      <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
        <div className="relative aspect-[9/16] h-[82%] overflow-hidden rounded-2xl border border-white/15 bg-[#1b2023]">
          <div className="absolute inset-x-0 top-0 h-1/2" style={{ background: 'linear-gradient(155deg,#02e4a4,#0b5b42 65%,#14170f)' }} />
          <div className="absolute bottom-5 left-4 right-5 space-y-2">
            <div className="h-2 w-4/5 rounded-full bg-white/75" />
            <div className="h-2 w-3/5 rounded-full bg-white/40" />
          </div>
          <div className="absolute bottom-16 right-3 grid gap-3">
            <span className="h-6 w-6 rounded-full border border-white/50" />
            <span className="h-6 w-6 rounded-full border border-white/50" />
            <span className="h-6 w-6 rounded-full border border-white/50" />
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: 'maintainable-company-website',
    number: '03',
    category: 'Website',
    title: 'A page built to be read and maintained',
    description: 'Illustrative browser view for a company profile.',
    status: 'Illustrative sample',
    timeline: '4–6 weeks',
    scope: 'Information architecture, UI design, Next.js build',
    overview:
      'Company websites often look sharp on launch day and rot within six months because nobody can update them cleanly. This sample illustrates a structured editorial layout built with reusable sections and restrained typography.',
    approach:
      'Content is organized into clear reading bands with generous line-height, predictable column widths, and high-contrast ink-on-paper surfaces. Components are typed and isolated so adding a new service or case study never breaks layout rhythm.',
    specs: [
      { label: 'Stack', value: 'Next.js, TypeScript, Tailwind CSS' },
      { label: 'Layout width', value: '1360px max container' },
      { label: 'Accessibility', value: 'Keyboard nav & semantic landmarks' },
      { label: 'Performance', value: 'Static prerendered routes' },
    ],
    decisions: [
      {
        number: '01',
        title: 'Readable measure',
        detail:
          'Body copy is capped at 46–60 characters per line so long explanations stay effortless to scan on desktop.',
      },
      {
        number: '02',
        title: 'Section-level modularity',
        detail:
          'Each band owns its spacing and contrast tokens, making reordering or adding pages straightforward.',
      },
      {
        number: '03',
        title: 'Zero unnecessary motion',
        detail:
          'Transitions are limited to subtle hover feedback and respects prefers-reduced-motion out of the box.',
      },
    ],
    deliverables: [
      'Sitemap & content hierarchy',
      'Responsive desktop & mobile UI',
      'Production Next.js codebase',
      'Component & content update guide',
    ],
    preview: (
      <div aria-hidden="true" className="absolute inset-5 flex flex-col overflow-hidden rounded-xl border border-black/10 bg-[#f3f0e8]">
        <div className="flex h-7 flex-none items-center gap-1.5 border-b border-black/10 bg-white px-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#d8d5cd]" />
        </div>
        <div className="p-5">
          <div className="h-2 w-16 rounded-full bg-[#02e4a4]" />
          <div className="mt-3 h-5 w-3/4 rounded bg-[#14170f]" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-[#5f6258]/40" />
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="h-14 rounded-lg bg-[#0b5b42]/15" />
            <div className="h-14 rounded-lg bg-[#14170f]/10" />
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: 'split-story-campaign-carousel',
    number: '04',
    category: 'Campaign carousel',
    title: 'One story, split into clean frames',
    description: 'Illustrative swipe-through layout for a short campaign.',
    status: 'Illustrative sample',
    timeline: '1–2 weeks',
    scope: 'Narrative pacing, multi-slide layout, CTA framing',
    overview:
      'Multi-slide carousels fail when every slide looks identical or crams an entire article onto one image. This sample breaks a single campaign narrative into sequential beats with a clear visual climax on the middle frame.',
    approach:
      'Slide one states the hook in under eight words. Middle slides alternate between dark supporting context and a mint-accented proof frame, pulling the reader forward until the final slide lands on one direct action.',
    specs: [
      { label: 'Slide count', value: '5 to 7 sequential frames' },
      { label: 'Aspect ratio', value: '4:5 (1080 × 1350)' },
      { label: 'Copy budget', value: '15–25 words max per slide' },
      { label: 'Pacing', value: 'Hook → Context → Proof → Action' },
    ],
    decisions: [
      {
        number: '01',
        title: 'One idea per frame',
        detail:
          'Each slide carries a single headline and supporting line so readers never have to pinch-to-zoom.',
      },
      {
        number: '02',
        title: 'Contrast shift for emphasis',
        detail:
          'The core takeaway slide flips to the bright mint-forest gradient to break monotony mid-swipe.',
      },
      {
        number: '03',
        title: 'Consistent anchor elements',
        detail:
          'Slide numbers and category tags stay pinned to the top-left corner to reinforce sequence.',
      },
    ],
    deliverables: [
      'Campaign narrative outline',
      '7-slide editable Figma deck',
      'Exported PNG/JPG carousel set',
      'Alt-text & caption copy',
    ],
    preview: (
      <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-3 p-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-32 flex-1 rounded-xl border border-white/10 p-4"
            style={{
              background: i === 1 ? 'linear-gradient(150deg,#02e4a4,#0b5b42)' : '#20262a',
              transform: `translateY(${i === 1 ? '-10px' : '7px'})`,
            }}
          >
            <div className={`h-2 w-8 rounded-full ${i === 1 ? 'bg-black/30' : 'bg-white/40'}`} />
            <div className={`mt-3 h-3 w-3/4 rounded ${i === 1 ? 'bg-black/60' : 'bg-white/70'}`} />
          </div>
        ))}
      </div>
    ),
  },
  {
    slug: 'consistent-visual-identity',
    number: '05',
    category: 'Visual identity',
    title: 'A system that stays consistent',
    description: 'Illustrative type, colour, and mark sheet.',
    status: 'Illustrative sample',
    timeline: '3–4 weeks',
    scope: 'Brand typography, colour tokens, usage rules',
    overview:
      'A logo alone does not hold a brand together across Instagram, pitch decks, and web pages. This sample shows a compact identity system built around two contrasting typefaces, four calibrated surface tokens, and clear spacing rules.',
    approach:
      'We pair a sturdy grotesk sans for structure with an italic serif for editorial emphasis. Warm paper grounds replace sterile pure white, while forest green and electric mint provide disciplined contrast without clutter.',
    specs: [
      { label: 'Display & UI font', value: 'Archivo (400, 500, 600, 900)' },
      { label: 'Editorial accent', value: 'Instrument Serif (Italic)' },
      { label: 'Core palette', value: '#f3f0e8, #14170f, #0b5b42, #02e4a4' },
      { label: 'Output', value: 'Brand sheet + CSS tokens' },
    ],
    decisions: [
      {
        number: '01',
        title: 'Two-font tension',
        detail:
          'Tight-tracked black sans headlines paired with italic serif subheads create immediate hierarchy without extra weights.',
      },
      {
        number: '02',
        title: 'Surface-first palette',
        detail:
          'Warm paper (#f3f0e8) and deep ink (#14170f) carry 90% of the UI so mint remains a sharp signal.',
      },
      {
        number: '03',
        title: 'Ready for both print and code',
        detail:
          'Every swatch ships with hex, RGB, and CSS custom property names for zero translation loss.',
      },
    ],
    deliverables: [
      'Logo & wordmark lockups',
      'Type scale & pairing rules',
      'Colour token specification',
      'Social & web application examples',
    ],
    preview: (
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-[1fr_1.2fr] gap-4 p-5">
        <div className="rounded-xl border border-white/10 bg-[#20262a] p-4">
          <div className="font-serif text-4xl italic text-paper">Aa</div>
          <div className="mt-4 h-2 w-2/3 rounded-full bg-white/30" />
        </div>
        <div className="grid grid-rows-[1fr_auto] gap-4">
          <div className="rounded-xl border border-white/10 bg-[#f3f0e8] p-4">
            <div className="flex gap-2">
              <span className="h-9 flex-1 rounded-lg" style={{ background: '#02e4a4' }} />
              <span className="h-9 flex-1 rounded-lg" style={{ background: '#0b5b42' }} />
              <span className="h-9 flex-1 rounded-lg" style={{ background: '#14170f' }} />
              <span className="h-9 flex-1 rounded-lg" style={{ background: '#eae6dc' }} />
            </div>
            <div className="mt-4 h-2 w-4/5 rounded-full bg-[#14170f]/25" />
          </div>
          <div className="rounded-xl border border-white/10 bg-[#1b2023] p-3">
            <div className="h-5 w-20 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: 'single-action-landing-page',
    number: '06',
    category: 'Landing page',
    title: 'One clear action, nothing competing',
    description: 'Illustrative landing page with a single call to action.',
    status: 'Illustrative sample',
    timeline: '2–3 weeks',
    scope: 'Conversion layout, above-the-fold framing, copy hierarchy',
    overview:
      'Landing pages lose visitors when navigation links, popups, and secondary buttons compete with the primary offer. This sample strips the first screen down to one value proposition, one supporting visual, and one unmistakable button.',
    approach:
      'A 55/45 split places the headline, concise proof line, and primary CTA on the left while a clean visual frame anchors the right. Everything above the fold answers what it is, who it is for, and what happens on click.',
    specs: [
      { label: 'Hero split', value: '1.2fr Copy / 1fr Visual' },
      { label: 'Primary CTA', value: 'Single pill button (#02e4a4)' },
      { label: 'Header', value: 'Minimal brand mark + single action' },
      { label: 'Build', value: 'Fast static HTML / Next.js' },
    ],
    decisions: [
      {
        number: '01',
        title: 'No competing links above the fold',
        detail:
          'Removing extra header links keeps attention focused on the single conversion path.',
      },
      {
        number: '02',
        title: 'Plain-spoken headline',
        detail:
          'Two short lines state the concrete outcome rather than abstract marketing slogans.',
      },
      {
        number: '03',
        title: 'High-contrast CTA',
        detail:
          'Mint fill on dark ink or warm paper gives the button immediate visual priority without heavy drop shadows.',
      },
    ],
    deliverables: [
      'Wireframe & copy structure',
      'Desktop & mobile landing UI',
      'Interactive states & form validation',
      'Analytics event hooks',
    ],
    preview: (
      <div aria-hidden="true" className="absolute inset-5 flex flex-col overflow-hidden rounded-xl border border-black/10 bg-[#eae6dc]">
        <div className="flex h-7 flex-none items-center justify-between border-b border-black/10 bg-white px-3">
          <span className="h-2 w-16 rounded-full bg-[#14170f]/20" />
          <span className="h-2 w-8 rounded-full bg-[#02e4a4]" />
        </div>
        <div className="grid flex-1 grid-cols-[1.2fr_1fr]">
          <div className="p-5">
            <div className="h-2 w-12 rounded-full bg-[#0b5b42]/40" />
            <div className="mt-3 h-4 w-11/12 rounded bg-[#14170f]" />
            <div className="mt-2 h-4 w-2/3 rounded bg-[#14170f]" />
            <div className="mt-4 h-2 w-3/4 rounded-full bg-[#5f6258]/40" />
            <div className="mt-5 h-6 w-20 rounded-full bg-[#02e4a4]" />
          </div>
          <div className="m-4 rounded-lg" style={{ background: 'linear-gradient(150deg,#0b5b42,#14170f)' }} />
        </div>
      </div>
    ),
  },
  {
    slug: 'monthly-content-calendar',
    number: '07',
    category: 'Content calendar',
    title: 'A month planned before it ships',
    description: 'Illustrative 28-day editorial schedule and pillar balance.',
    status: 'Illustrative sample',
    timeline: 'Monthly retainer',
    scope: 'Editorial planning, pillar rotation, approval workflow',
    overview:
      'Last-minute posting leads to repetitive topics and rushed visuals. This sample shows a 4-week content matrix that balances educational posts, behind-the-scenes clips, and direct product features before production begins.',
    approach:
      'Every week follows a predictable 7-day cadence with highlighted anchor days for hero Reels and carousels. Approvals happen in one batch at the start of the month so shooting and editing run smoothly.',
    specs: [
      { label: 'Horizon', value: '28-day rolling cycle' },
      { label: 'Anchor slots', value: '2–3 hero posts per week' },
      { label: 'Content pillars', value: 'Education, Proof, Culture, Offer' },
      { label: 'Workflow', value: 'Batch brief → Shoot → Review' },
    ],
    decisions: [
      {
        number: '01',
        title: 'Pillar distribution',
        detail:
          'Promotional posts are spaced evenly between value-driven content so the feed never feels like a catalog.',
      },
      {
        number: '02',
        title: 'Single-batch sign-off',
        detail:
          'Clients review the full month’s angles in one session instead of approving daily drafts.',
      },
      {
        number: '03',
        title: 'Format pairing',
        detail:
          'Each topic is assigned to either video, carousel, or static early so production resources are allocated properly.',
      },
    ],
    deliverables: [
      '28-day editorial matrix',
      'Pillar & format ratio map',
      'Weekly production checklist',
      'Asset status tracker',
    ],
    preview: (
      <div aria-hidden="true" className="absolute inset-0 p-5">
        <div className="grid h-full grid-cols-7 grid-rows-4 gap-1.5">
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[4px]"
              style={{
                background:
                  i % 7 === 0 || i % 9 === 0
                    ? 'rgba(2,228,164,0.55)'
                    : 'rgba(255,255,255,0.07)',
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    slug: 'rhythm-motion-graphics',
    number: '08',
    category: 'Motion graphics',
    title: 'Type that moves with the beat',
    description: 'Illustrative kinetic typography and audio-synced stings.',
    status: 'Illustrative sample',
    timeline: '1–2 weeks',
    scope: 'Kinetic type, rhythm timing, reusable motion templates',
    overview:
      'Motion graphics add clarity when they emphasize cadence and structure rather than spinning randomly. This sample explores rhythmic bar and type animation timed to audio transients for short-form intros and social stings.',
    approach:
      'Movement uses snappy ease-out curves and alternating vertical rhythms. Each element enters on a beat marker and settles cleanly so text remains legible without motion blur.',
    specs: [
      { label: 'Frame rate', value: '60 fps vector rendering' },
      { label: 'Easing', value: 'Expo-out & crisp step cuts' },
      { label: 'Formats', value: '9:16, 1:1, and 16:9 masters' },
      { label: 'Delivery', value: 'MOGRT / ProRes 4444 alpha' },
    ],
    decisions: [
      {
        number: '01',
        title: 'Beat-locked keyframes',
        detail:
          'Transitions snap to percussion hits rather than drifting on generic linear timelines.',
      },
      {
        number: '02',
        title: 'Legibility first',
        detail:
          'Words settle to 100% crisp alignment for at least 1.2 seconds before exiting.',
      },
      {
        number: '03',
        title: 'Reusable alpha overlays',
        detail:
          'Stings and lower-thirds export with transparency so editors can drop them over any footage.',
      },
    ],
    deliverables: [
      'Kinetic title sequence',
      'Audio-synced transition pack',
      'Lower-third & callout templates',
      'Multi-ratio master exports',
    ],
    preview: (
      <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
        <div className="flex items-end gap-1.5">
          {[18, 34, 26, 46, 30, 52, 22, 38].map((h, i) => (
            <span
              key={i}
              className="w-2.5 rounded-full"
              style={{
                height: h,
                background: i % 2 ? '#02e4a4' : '#eae6dc',
                transform: `rotate(${i % 2 ? 6 : -6}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    slug: 'readable-web-app-ui',
    number: '09',
    category: 'Web app UI',
    title: 'Dense information, still readable',
    description: 'Illustrative dashboard and sidebar workspace layout.',
    status: 'Illustrative sample',
    timeline: '4–8 weeks',
    scope: 'Dashboard IA, component tokens, responsive states',
    overview:
      'Operational tools often drown users in nested borders, tiny badges, and competing charts. This sample demonstrates a quiet workspace layout with a dark navigation rail and a warm paper canvas for primary data.',
    approach:
      'Navigation stays anchored on the left in low-glare ink, while summary metrics and activity rows sit on a high-contrast paper surface. Spacing and tabular numerals do the heavy lifting instead of heavy card shadows.',
    specs: [
      { label: 'Layout', value: 'Fixed rail + fluid content canvas' },
      { label: 'Numbers', value: 'Tabular lining numerals' },
      { label: 'States', value: 'Empty, loading, error, keyboard' },
      { label: 'Implementation', value: 'React + Tailwind design tokens' },
    ],
    decisions: [
      {
        number: '01',
        title: 'Quiet chrome, clear data',
        detail:
          'Muted hairline dividers replace heavy drop shadows so rows remain scannable during long sessions.',
      },
      {
        number: '02',
        title: 'Predictable 3-metric header',
        detail:
          'Top summary cards cap at three key figures to prevent horizontal crowding on smaller laptops.',
      },
      {
        number: '03',
        title: 'Keyboard-first navigation',
        detail:
          'Visible focus rings and logical tab order across sidebar links, filters, and table rows.',
      },
    ],
    deliverables: [
      'Workspace layout & navigation spec',
      'Component & state library',
      'Responsive tablet & desktop views',
      'Front-end UI implementation',
    ],
    preview: (
      <div aria-hidden="true" className="absolute inset-4 flex overflow-hidden rounded-xl border border-white/10 bg-[#f3f0e8]">
        <div className="w-1/4 bg-[#14170f] p-3">
          <div className="h-2 w-3/4 rounded-full bg-[#02e4a4]" />
          <div className="mt-4 space-y-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: `${90 - i * 12}%` }} />
            ))}
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="h-3 w-1/2 rounded bg-[#14170f]" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-12 rounded-lg bg-[#0b5b42]/10" />
            ))}
          </div>
          <div className="mt-3 space-y-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-2 rounded-full bg-[#14170f]/15" style={{ width: `${95 - i * 15}%` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
