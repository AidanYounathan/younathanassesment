type AvatarProps = {
  initials: string
}

function Avatar({ initials }: AvatarProps) {
  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-forestgreen bg-lightgreen text-2xl font-bold text-forestgreen sm:h-28 sm:w-28 sm:text-3xl">
      {initials}
    </div>
  )
}

export default Avatar
