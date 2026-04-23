import React from 'react';

const FALLBACK_POSTER = 'https://fakeimg.pl/600x900/111827/f5f1e8?text=MovieLand';

const MediaCard = ({
  title,
  subtitle,
  meta,
  imageSrc,
  href,
  ctaLabel,
  external = false,
}) => {
  const cardBody = (
    <>
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={imageSrc || FALLBACK_POSTER}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(5,8,12,0.1)_45%,rgba(5,8,12,0.92)_100%)]"
          aria-hidden="true"
        />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[var(--accent-gold)] backdrop-blur-sm">
          {meta || 'Archive'}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/60">
            {subtitle || 'Movie'}
          </p>
          <h3 className="mt-2 line-clamp-2 text-3xl leading-[1.02] text-white transition duration-300 group-hover:text-[var(--accent-gold)]">
            {title}
          </h3>
          {ctaLabel ? (
            <span className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-gold)]">
              {ctaLabel}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );

  const classes =
    'group block overflow-hidden rounded-[1.75rem] border border-[var(--surface-border)] bg-[var(--surface-panel)] transition duration-500 hover:-translate-y-1 hover:border-[var(--accent-gold)]/35 hover:bg-[var(--surface-elevated)] dark:border-white/8 dark:bg-[rgba(255,255,255,0.03)] dark:hover:bg-[rgba(255,255,255,0.05)]';

  if (!href) {
    return <article className={classes}>{cardBody}</article>;
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {cardBody}
      </a>
    );
  }

  return (
    <a href={href} className={classes}>
      {cardBody}
    </a>
  );
};

export default MediaCard;
