type LinksProps = {
  href: string
  children: React.ReactNode
  variant?: "default" | "projects_app" | "projects_repo" | "all_repo" | "footer"
  className?: string
}

export default function Links({ href, children, variant = "default", className = ""}: LinksProps) {

  const baseStyle = "duration-300 cursor-pointer"
  const variants = {
    default: "text-text-secondary-60 hover:text-text-secondary-100 transition-colors",
    projects_app: "group flex flex-col sm:flex-row items-start  gap-x-5 w-full px-7 pt-6 pb-8 bg-transparent border-t-[1px] border-transparent transition-all ease-in-out hover:bg-bg-hover-5 hover:rounded-md hover:border-border-25",
    projects_repo: "flex items-center justyfy-center gap-x-1.5 mt-4 px-1.5 py-1 w-fit rounded-full border-t-[1px] border-transparent transition-all hover:text-text-primary hover:bg-white/5 hover:border-white/15",
    all_repo: "group flex items-center text-text-primary gap-x-1 pt-5 w-fit mb-12 px-7",
    footer: "text-text-primary font-medium hover:text-teal-300"
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}