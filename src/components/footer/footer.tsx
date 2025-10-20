import { footerItems as url } from "./footer-items";
import Links from "../Links";

type FooterLinkProps = {
  href: string
  children: React.ReactNode
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <Links href={href} variant="footer">
    {children}
  </Links>
)

export default function Footer() {
  return (
    <footer className="pl-7 pr-20 pb-24">

      <span className="font-light">
        Projetado no <FooterLink href={url.figma}>Figma</FooterLink>,{' '}

        codificado no <FooterLink href={url.vscode}>Visual Studio Code</FooterLink>.{' '}

        Desenvolvido com <FooterLink href={url.next}>Next.js</FooterLink> {' '}

        e <FooterLink href={url.tailwind}>Tailwind CSS</FooterLink>,{' '}

        com deploy via <FooterLink href={url.vercel}>Vercel</FooterLink>.{' '}

        Texto composto com as fontes <FooterLink href={url.jetbrains}>JetBrains Mono</FooterLink>{' '}

        e <FooterLink href={url.inter}>Inter</FooterLink>.
      </span>

    </footer>
  )
}