"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { SidebarLinks } from "@/app/data/SidebarLinks";
import { usePathname } from "next/navigation";
import { BiLogOut, BiX } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, selectIsSidebarOpen } from "@/redux/sidebarSlice";

export default function Sidebar() {
  const path = usePathname();
  const isOpen = useSelector(selectIsSidebarOpen);
  const dispatch = useDispatch();

  const closeSidebar = function () {
    dispatch(toggleSidebar());
  };

  return (
    <aside
      className={`lg:relative absolute top-0 left-0 flex flex-col justify-between w-80 h-screen bg-primary-bg border-r border-primaryBorder lg:translate-x-0 -translate-x-full duration-200 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : null
      }`}
    >
      <div className="flex flex-col mt-6 mx-4 p-6">
        <div className="flex items-center justify-between gap-x-4 mb-12">
          <Link
            href="/"
            className="font-primary flex items-center gap-x-2 font-semibold text-2xl"
          >
            <Image src={Logo} width={35} height={35} alt="Vidder5 logo" />{" "}
            Vidder5
          </Link>
          <button
            onClick={closeSidebar}
            className="lg:hidden flex items-center justify-center text-3xl text-zinc-500 rounded-full p-2 w-10 h-10 bg-secondary-bg hover:text-primary"
          >
            <BiX />
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {SidebarLinks.map((link, id) => (
            <Link
              onClick={closeSidebar}
              href={link.href}
              key={id}
              className={`flex items-center gap-x-3 px-4 py-2 rounded-sm hover:bg-zinc-900 hover:text-primary duration-300 text-[1.05rem]
                ${
                  link.href === path
                    ? "text-primary bg-zinc-900"
                    : "text-zinc-200"
                }
              `}
            >
              <link.icon className="text-[1.2rem]" /> {link.name}
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={() => alert("Sign out button clicked 😭")}
        className="flex items-center justify-center gap-x-2 border-t border-primaryBorder p-6 hover:text-primary"
      >
        <BiLogOut />
        Sign Out
      </button>
    </aside>
  );
}
