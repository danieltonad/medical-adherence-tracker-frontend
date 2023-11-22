import React from "react";
import DashboardNav from "../global/DashboardNav";
import Heading from "../shared/Heading";

type Prop = {
  head: string;
  text: string;
  children?: React.ReactNode;
};

export default function Container({ head, text, children }: Prop) {
  return (
    <section className="w-full min-h-screen">
      <DashboardNav />
      <div className="lg:p-10 p-8">
        <Heading heading={head} message={text} />
      </div>
      <div className="lg:px-10 p x-8">{children}</div>
    </section>
  );
}
