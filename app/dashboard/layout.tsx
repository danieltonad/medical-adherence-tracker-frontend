import { Metadata } from "next";
import Sidebar from "../components/global/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Vidder5",
  description: "Explore your analytics and statistics",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-secondary-bg flex relative">
      <Sidebar />
      {children}
    </main>
  );
}
