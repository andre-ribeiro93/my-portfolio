import Links from "../Links"
import { socialItems } from "./social-items"

export default function Social() {
  return (
    <ul className="mt-8 flex items-center gap-x-5 font-mono font-bold text-[28px]">
      
      {socialItems.map((item) => (
        <li key={item.id}>
          <Links
            href={item.href}
            variant="default"
          >
            {typeof item.icon === "string" ? item.icon : <item.icon />}
          </Links>
        </li>
      ))}
      
    </ul>
  )
}