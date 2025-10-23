import Menu from "@/components/menu/menu";
import Social from "@/components/social/social";
import Sobre from "@/components/sobre";
import Skills from "@/components/skills/skills";
import Projetos from  "@/components/projetos/projects";
import Footer from "@/components/footer/footer";
import MouseEffect from "@/components/mouse-effect";
import ContactForm from "@/components/contact/contact";

export default function Home() {
  return (
    <div className="w-full min-h-screen z-40">
      <MouseEffect />

      <div className="mx-auto max-w-screen-xl px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col lg:flex-row justify-between items-start">

        <header className="w-full lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:w-2/5 flex-col justify-between py-12 lg:py-24">
          <div>
            <h1 className="title">
              André<span className="text-detail1">.ribeiro</span>
            </h1>

            <h2 className="subtitle text-[22px]">Desenvolvedor Full Stack</h2>

            <p className="mb-16 max-w-xl lg:max-w-xs">Desenvolvo experiências digitais completas, acessíveis e escaláveis, conectando tecnologia e resultados.</p>

            <Menu />
          </div>

          <Social />

        </header>

        <main className="w-full lg:w-3/5 flex flex-col items-center justify-center gap-36 lg:pl-10">
          <Sobre />
          
          <Skills />

          <Projetos />

          <ContactForm />

          <Footer />
        </main>
      </div>
    </div>
  );
}