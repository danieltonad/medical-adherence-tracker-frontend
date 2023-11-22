"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
import Photo from "@/public/user.png";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center gap-x-2 rounded-md bg-secondary-bg px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-zinc-800 hover:bg-zinc-800 text-zinc-400">
          <Image
            src={Photo}
            width={28}
            height={28}
            alt="User photo"
            className="rounded-full"
          />
          Account
          <BiChevronDown
            className="-mr-1 h-5 w-5 text-zinc-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-secondary-bg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-zinc-800" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account settings
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/support"
                  className={classNames(
                    active ? "bg-zinc-800" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Support
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="license"
                  className={classNames(
                    active ? "bg-zinc-800" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  License
                </Link>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-zinc-800" : "text-white",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
