"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About us", href: "aboutus", current: false },
  { name: "Contact us", href: "contactus", current: false },
  { name: "Products", href: "products", current: false },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="absolute top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-md border-b border-gray-200"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}

              <Image src="/logo.png" alt="FixMyHair" width={90} height={90} />

              {/* Navigation */}
              <div className="hidden sm:flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-black border-b-2 border-black"
                        : "text-gray-600 hover:text-black",
                      "text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Book Now Button */}
              <div className="hidden sm:block">
                <Link
                  href="booknow"
                  className="bg-black text-white text-sm font-bold px-5 py-2 rounded hover:bg-gray-800"
                >
                  BOOK NOW
                </Link>
              </div>

              {/* Mobile Menu */}
              <div className="sm:hidden">
                <DisclosureButton className="text-black hover:text-gray-600 focus:outline-none">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-4 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block text-sm text-gray-700 hover:text-black"
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <Link
                href="booknow"
                className="block text-sm font-bold text-black mt-2"
              >
                BOOK NOW
              </Link>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
