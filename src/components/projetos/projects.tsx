import Links from "../Links";
import { projectsItems } from "./projects-items"
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Projetos() {
  return (
    <section id="projetos" className="lg:pt-24">

        <h2 className="subtitle block sticky top-0 bg-bg-page z-20 py-2 lg:hidden">Projetos</h2>

        <ul className="flex flex-col gap-y-5 w-full">

          {projectsItems.map((item) => (
            <li key={item.id}>
              <Links
                href={item.href_app}
                variant="projects_app"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full sm:w-1/4 aspect-[16/9] object-cover rounded-sm border border-border-50"
                />

                <div className="pt-5 sm:pt-0">

                  <h2 className="subtitle mb-2.5 group-hover:text-detail2-90 transition-colors duration-300">{item.title}</h2>

                  <p>
                    {item.description}
                  </p>

                  <ul className="flex flex-wrap lg:max-w-4/5 gap-x-1.5 gap-y-2.5 mt-3">
                    {item.stacks.map((stack) => (
                      <li key={stack.id}>
                        <span className="flex items-center rounded-full bg-bg-stack-10 px-3 py-1 text-xs font-medium leading-5 text-detail2-100">{stack.name}</span>
                      </li>
                    ))}
                  </ul>

                  <Links
                    href={item.href_repo}
                    variant="projects_repo"
                  >
                    <FaGithub size={22} />
                    <span className="font-semibold text-sm">Repositório</span>
                  </Links>

                </div>
              </Links>
            </li>
          ))}

        </ul>

        <Links
          href="https://github.com/andre-ribeiro93?tab=repositories"
          variant="all_repo"
        >
          <span className="font-medium border-b-[1px] border-transparent group-hover:border-detail2-90 transition-colors duration-300">Ver todos projetos no GitHub</span>
          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
        </Links>
      
    </section>
  )
}