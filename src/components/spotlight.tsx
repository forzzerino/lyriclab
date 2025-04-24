"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import LyricsForm from "./lyrics-form";

export function Spotlight2() {
  return (
    <div className=" w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className="bg-red-300 md:grid-cols-2 h-[48rem] border-r border-l  border-dashed  p-4 max-w-[95rem] mx-auto relative z-10  w-full  md:pt-0">
        <div className="bg-fuchsia-400">
          <LyricsForm />
        </div>
      </div>
    </div>
  );
}
