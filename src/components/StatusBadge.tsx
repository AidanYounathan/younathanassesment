type Status = "open" | "casual" | "unavailable"

type StatusBadgeProps = {
  status: Status
}

const config: Record<Status, { label: string; dot: string; badge: string }> = {
  open:        { label: "Open to opportunities", dot: "bg-green-500",  badge: "bg-green-100 text-green-800 border-green-200" },
  casual:      { label: "Casually looking",      dot: "bg-yellow-400", badge: "bg-yellow-50 text-yellow-800 border-yellow-200" },
  unavailable: { label: "Not available",         dot: "bg-red-400",    badge: "bg-red-50 text-red-800 border-red-200" },
}

function StatusBadge({ status }: StatusBadgeProps) {
  const { label, dot, badge } = config[status]
  return (
    <span className={`mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${badge}`}>
      <span className={`h-2 w-2 rounded-full ${dot} animate-pulse`} aria-hidden="true" />
      {label}
    </span>
  )
}

export default StatusBadge
