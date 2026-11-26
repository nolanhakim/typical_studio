import Link from 'next/link';
import { pricingPackages, PackageVisual, type PricingPackage } from '@/lib/pricing';

/* ─────────────────────────────────────────────
   PricingCards — kartu paket bergaya showcase:
   panel visual di atas, judul + deskripsi, harga & tautan detail.
───────────────────────────────────────────── */

function PackageCard({ pkg }: { pkg: PricingPackage }) {
  return (
    <article className="group flex flex-col transition-transform duration-300 hover:-translate-y-0.5">
      <Link
        href={`/pricing/${pkg.slug}`}
        className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b5b42]"
      >
        <PackageVisual
          kind={pkg.kind}
          className="aspect-[4/4.4] rounded-2xl border border-black/10 transition-colors duration-300 group-hover:border-[#0b5b42]/50"
        />

        <h3 className="mt-7 text-2xl font-black leading-tight tracking-[-0.02em] text-[#14170f] transition-colors group-hover:text-[#0b5b42]">
          {pkg.title}
        </h3>
      </Link>

      <p className="mt-3 mb-6 max-w-[34ch] text-[15px] leading-6 text-[#5f6258]">
        {pkg.description}
      </p>

      <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#14170f]/15 pt-5">
        <div>
          <p className="text-sm text-[#5f6258]">Starts from</p>
          <p className="mt-0.5 text-lg font-bold leading-6 text-[#14170f]">
            {pkg.price}
            <span className="ml-1 text-xs font-medium text-[#5f6258]">{pkg.unit}</span>
          </p>
        </div>
        <Link
          href={`/pricing/${pkg.slug}`}
          className="inline-flex flex-none items-center gap-2 rounded-full border border-[#14170f]/30 px-5 py-2.5 text-sm font-medium text-[#14170f] transition-all duration-200 hover:border-[#14170f] hover:bg-[#14170f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#02e4a4] active:scale-[0.98]"
        >
          See details
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
          >
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {pricingPackages.map((pkg) => (
        <PackageCard key={pkg.slug} pkg={pkg} />
      ))}
    </div>
  );
}
