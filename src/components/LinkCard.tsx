type LinkCardProps = {
  href: string
  title: string
  subtitle: string
  icon: React.ReactNode
}

function LinkCard({ href, title, subtitle, icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-green-200 bg-white px-5 py-4 transition hover:border-green-700 hover:bg-green-100/40"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-green-700">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <span className="text-green-700 transition group-hover:translate-x-1">→</span>
    </a>
  )
}

export default LinkCard
