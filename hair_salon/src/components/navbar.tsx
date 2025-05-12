"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/aboutus" },
  { name: "Contact us", href: "/contactus" },
  { name: "Products", href: "/products" },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-200">
      {({ open }) => (
        <>
          {/* Top Bar */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image src="/logo.png" alt="FixMyHair" width={90} height={90} />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? "text-black border-b-2 border-black"
                        : "text-gray-600 hover:text-black hover:border-b-2 hover:border-black",
                      "text-sm font-medium pb-1 transition-all"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden sm:block">
                <Link
                  href="/booknow"
                  className="bg-black text-white text-sm font-bold px-5 py-2 rounded hover:bg-gray-800 transition"
                >
                  BOOK NOW
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <DisclosureButton className="text-black hover:text-gray-600 focus:outline-none transition">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Fullscreen Menu */}
          <DisclosurePanel className="sm:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-8 text-lg font-medium">
            {/* Close Button */}
            <DisclosureButton className="absolute top-4 right-4 text-black hover:text-gray-600 transition">
              <XMarkIcon className="h-6 w-6" />
            </DisclosureButton>

            {/* Mobile Navigation Links */}
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                className={classNames(
                  pathname === item.href
                    ? "text-black font-semibold underline underline-offset-4"
                    : "text-gray-800 hover:text-black",
                  "text-xl transition"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/booknow"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
              BOOK NOW
            </Link>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
