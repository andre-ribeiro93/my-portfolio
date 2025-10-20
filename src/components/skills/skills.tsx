import { skillsItems } from "./skills-items"
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Skills() {
  return (
    <section id="skills" className="w-full px-0 lg:pt-24">

      <h2 className="subtitle block sticky top-0 bg-bg-page z-20 py-2 lg:hidden">Skills</h2>

      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 w-full min-h-fit">

        {skillsItems.map((item) => (
          <div key={item.id} className="w-full min-h-fit bg-bg-hover-5 rounded-md px-4 py-6 border-t-[1px] border-border-25">

            <div className="subtitle items-center">
              <item.icon size={36} className="rounded-full bg-bg-stack-10 text-detail2-90 p-1 mb-2.5"/>
              <h2>{item.title}</h2>
            </div>
            
            <div className="flex flex-col items-start gap-2">
              {item.stacks.map((stack) => (
                <div
                  key={stack.id}
                  className="flex items-center gap-x-2"
                >
                  <span className="text-detail2-90"><FaRegCircleCheck /></span>
                  <span className="text-sm md:text-base">{stack.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}