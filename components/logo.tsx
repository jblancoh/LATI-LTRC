import { Cog } from "lucide-react"

export function Logo({ className = "", size = "default" }) {
  const sizeClasses = {
    default: "h-8",
    small: "h-6",
    large: "h-12",
  }

  const heightClass = sizeClasses[size] || sizeClasses.default

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <Cog className={`${heightClass} text-secondary absolute`} style={{ left: "-3px" }} />
        <Cog className={`${heightClass} text-primary`} style={{ left: "3px" }} />
      </div>
      <div className="ml-6 leading-tight">
        <div className="text-xs font-semibold tracking-wider">LIGA TABASQUEÑA DE</div>
        <div className={`font-bold ${size === "large" ? "text-2xl" : "text-xl"}`}>ROBÓTICA</div>
        <div className="text-xs font-semibold tracking-wider">DE COMPETENCIA LTRC</div>
      </div>
    </div>
  )
}

