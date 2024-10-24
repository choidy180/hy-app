"use client";

import TitleComponent from "@/components/title";
import './globals.css';
import LiveContainer from "@/components/liveContainer";

export default function Home() {
  return (
    <div className="w-screen] min-h-screen flex fle-col justify-start items-center bg-[rgba(0,0,0,.02)]">
     <TitleComponent/>
     <LiveContainer/>
    </div>
  );
}
