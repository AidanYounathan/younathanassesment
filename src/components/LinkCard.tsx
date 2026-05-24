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
            className="roup flex items-center gap-4 rounded-2xl border border-lightgreen bg-cardbg px-5 py-4 transition hover:border-forestgreen hover:bg-lightgreen/40"
        >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lightgreen text-forestgreen">
                {icon}
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-forestgreen">{title}</h3>
                <p className="text-sm text-foreground/70">{subtitle}</p>
            </div>
            <span className="text-forestgreen transition group-hover:translate-x-1">→</span>
        </a>
    )
}

export default LinkCard
