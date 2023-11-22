"use client";

import { BiMenu } from "react-icons/bi";
import DropdownMenu from "../shared/DropdownMenu";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/sidebarSlice";
import { useRef } from "react";

export default function DashboardNav() {
  const dispatch = useDispatch();
  const header = useRef<HTMLHeadingElement | null>(null);

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <header
      ref={header}
      className="flex items-center justify-between border-b border-primaryBorder min-h-[100px] lg:px-10 px-8"
    >
      <div className="flex items-center gap-x-6">
        <button
          onClick={handleSidebarToggle}
          className="lg:hidden block text-3xl text-zinc-500"
        >
          <BiMenu />
        </button>
        <p className="md:block hidden text-sm">Welcome to Vidder5 🩺</p>
      </div>
      <DropdownMenu />
    </header>
  );
}
