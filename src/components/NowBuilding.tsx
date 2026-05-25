type NowBuildingProps = {
  project: string
  description: string
  href?: string
}

function NowBuilding({ project, description, href }: NowBuildingProps) {
  const content = (
    <div className="w-full rounded-2xl border border-forestgreen/30 bg-lightgreen/40 px-5 py-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-forestgreen animate-pulse" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-widest text-forestgreen/70">Now Building</span>
      </div>
      <p className="text-base font-bold text-forestgreen">{project}</p>
      <p className="mt-0.5 text-sm text-foreground/70">{description}</p>
    </div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="w-full transition hover:opacity-80">
        {content}
      </a>
    )
  }

  return content
}

export default NowBuilding
