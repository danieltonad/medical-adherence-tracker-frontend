import { BiBarChartSquare, BiCog, BiMessageAlt, BiUser } from "react-icons/bi";

export const SidebarLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: BiBarChartSquare,
  },
  {
    name: "My Health",
    href: "/dashboard/health",
    icon: BiUser,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: BiMessageAlt,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: BiCog,
  },
];
