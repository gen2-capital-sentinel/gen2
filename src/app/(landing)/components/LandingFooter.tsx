import { Logo } from '@/components/Logo';
import Link from 'next/link';

export function LandingFooter() {
  const footerLinks = {
    platform: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#' },
      { name: 'Security', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about-us' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="text-foreground">
      <div className="bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-3">
              <Logo />
              <p className="mt-4 text-xs text-muted-foreground">
                The future of wealth is intelligent.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:col-span-9 md:grid-cols-3">
              <div>
                <h3 className="font-semibold">Platform</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.platform.map(link => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xs text-muted-foreground hover:text-foreground">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Company</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.company.map(link => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xs text-muted-foreground hover:text-foreground">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Legal</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.legal.map(link => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-xs text-muted-foreground hover:text-foreground">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t pt-8">
            <div className="text-xs text-muted-foreground space-y-4">
              <p>
                <span className="font-semibold">IMPORTANT NOTICE:</span> Information transmitted in this email communication is intended solely for the person or entity to which it is addresses and contains confidential and privileged material. Any review, re-transmission, dissemination or other unauthorised use of material contained within this email , included taking action in reliance upon the material is prohibited by the sender. The material contained within this email are exclusively the views and opinions of the sender, and are not endorsed or known to the Employer. Nothing within with email constitutes financial advice, mortgage advice and it does not contain any legal advice. You are strongly urged to obtain professional advice before taking any actions in relation to the materials provided. None of the material contained within this email is an offer for investment, and no part of it constitutes an offer of investment or forms any sort of contract between the sender and the recipient. Gen2Wealth cannot guarantee the integrity of this email, which may contain viruses. The value of investments can go up as well as down. Your money is at risk.
              </p>
              <p>
                Gen2Wealth® MANAGEMENT a trading name of Premier Independent Investments UK Limited (PIIUK), part of the Strategic Value Group, registered in England and Wales at Companies House with registration number 03339739 whose registered offices are at C23G, The Print Rooms, Holly Farm Business Park, Honiley, Kenilworth, Warwickshire, England, CV81NP. Fully authorised and regulated by the Financial Conduct Authority (FCA) with Firm Reference Number (FRN): 186697.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Gen2 Wealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
