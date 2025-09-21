"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
  isMobileMenu,
  handleMobileMenu,
}: {
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
}) {
  const [isAccordion, setIsAccordion] = useState<number | null>(null);

  const handleAccordion = (key: number) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style button-bg-2 ${
          isMobileMenu ? "sidebar-visible" : ""
        }`}
      >
        <div className="mobile-header-wrapper-inner">
          {/* Logo + Close button */}
          <div className="mobile-header-logo d-flex justify-between align-items-center">
            <Link
              className="navbar-brand d-flex main-logo align-items-center"
              href="/"
            >
              <img src="/assets/imgs/template/favicon.svg" alt="infinia" />
              <span>
                My Yoga <br />
                Network
              </span>
            </Link>

            <div
              className={`burger-icon burger-icon-white border rounded-3 ${
                isMobileMenu ? "burger-close" : ""
              }`}
              onClick={handleMobileMenu}
            >
              <span className="burger-icon-top" />
              <span className="burger-icon-mid" />
              <span className="burger-icon-bottom" />
            </div>
          </div>

          {/* Mobile menu items */}
          <div className="mobile-header-content-area">
            <div className="mobile-menu-wrap mobile-header-border">
              <nav>
                <ul className="mobile-menu font-heading ps-0">
                  {/* About */}
                  <li>
                    <Link href="/page-about">About</Link>
                  </li>

                  {/* Services Dropdown */}
                  <li
                    className={`has-children ${
                      isAccordion === 1 ? "active" : ""
                    }`}
                  >
                    <span
                      className="menu-expand"
                      onClick={() => handleAccordion(1)}
                    >
                      <i className="arrow-small-down"></i>
                    </span>
                    <Link href="#">Services</Link>
                    <ul
                      className="sub-menu"
                      style={{
                        display: `${isAccordion === 1 ? "block" : "none"}`,
                      }}
                    >
                      <li>
                        <Link href="/page-about">Hotels and Resorts</Link>
                      </li>
                      <li>
                        <Link href="/page-about-2">Workplace Yoga</Link>
                      </li>
                      <li>
                        <Link href="/page-about-3">Healthcare</Link>
                      </li>
                      <li>
                        <Link href="/page-about-3">Kid&apos;s Program</Link>
                      </li>
                    </ul>
                  </li>

                  {/* Yoga AI */}
                  <li>
                    <Link href="#">Yoga AI</Link>
                  </li>

                  {/* Contact */}
                  <li>
                    <Link href="/page-contact-1">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
