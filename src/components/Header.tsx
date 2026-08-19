"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";

interface HeaderProps {
  locale: string;
  nav: { home: string; services: string; portfolio: string; contact: string; utilities: string };
  homeAnchors: { home: string; services: string; portfolio: string; contact: string };
  isSubPage?: boolean;
}

export default function Header({ locale, nav, homeAnchors }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the homepage (exact locale path)
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On homepage, use hash-only links for smooth scrolling
  // On sub-pages, navigate to homepage with hash
  function getHref(anchor: string) {
    if (isHome) return anchor; // e.g. "#inicio"
    return `/${locale}${anchor}`; // e.g. "/pt-br#inicio"
  }

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="container nav">
        <Link href={`/${locale}`} className="logo" aria-label="jldatainfo">
          <Image src="/assets/img/logo-jldatainfo.svg" alt="JL DataInfo" width={180} height={52} priority />
        </Link>
        <nav>
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href={getHref(homeAnchors.home)} onClick={() => setMenuOpen(false)}>
                {nav.home}
              </a>
            </li>
            <li>
              <a href={getHref(homeAnchors.services)} onClick={() => setMenuOpen(false)}>
                {nav.services}
              </a>
            </li>
            <li>
              <a href={getHref(homeAnchors.portfolio)} onClick={() => setMenuOpen(false)}>
                {nav.portfolio}
              </a>
            </li>
            <li>
              <a href={getHref(homeAnchors.contact)} onClick={() => setMenuOpen(false)}>
                {nav.contact}
              </a>
            </li>
            <li>
              <Link href={`/${locale}/util`} onClick={() => setMenuOpen(false)}>
                {nav.utilities}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
