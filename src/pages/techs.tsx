"use client";
import { motion } from "framer-motion";
const BASE_PATH = import.meta.env.BASE_URL;
import SpotlightCard from "@/components/ui/spotlightcard";
const techList = [
  {
    title: "React",
    url: `${BASE_PATH}logo-cloud/react.svg`,
    className: "",
  },

  {
    title: "ShadCN UI",
    url: `${BASE_PATH}logo-cloud/shadcn.svg`,
    className: "",
  },
  {
    title: "Aceternity UI",
    url: `${BASE_PATH}logo-cloud/aceternity.svg`,
    className: "",
  },
  {
    title: "Reactbits UI",
    url: `${BASE_PATH}logo-cloud/reactbits.svg`,
    className: "right-1",
  },
  {
    title: "Radix UI",
    url: `${BASE_PATH}logo-cloud/radix.svg`,
    className: "",
  },
  {
    title: "Motion",
    url: `${BASE_PATH}logo-cloud/motion.svg`,
    className: "",
  },
];

export default function Techs() {
  return (
    <div className="container mx-auto xl:px-4 xl:h-[48rem]  xl:border-r xl:border-l border-dashed flex justify-center  xl:py-10  select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <section className="md:py-16 ">
          <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6 lg:gap-12 ">
            <div className="">
              <h2 className="text-3xl mt-8 lg:mt-0 pb-8 font-bold tracking-tighter sm:text-4xl md:text-7xl bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Site Hakkında
              </h2>
              <p className="">
                Bu site; bir staj başvurusu için hazırladığım{" "}
                <span className="font-mono dark:bg-gray-700/70 bg-gray-200 text-primary border-primary border py-0.5 px-2 rounded-md text-sm">
                  <a href="https://lyricsovh.docs.apiary.io/#" target="_blank">
                    lyricsovh
                  </a>
                </span>
                &nbsp;sitesinden şarkı sözü çekme amacı taşır. <br /> Siteyi
                yaparken kullanmak isteyip kullanamadığım teknolojileri
                kullanmaya odaklandım.
              </p>
            </div>
            <div className="">
              <h3 className="text-xl pb-4 font-bold tracking-tighter sm:text-2xl md:text-3xl bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Kullandığım Teknolojiler
              </h3>
              <SpotlightCard>
                <div className="grid grid-cols-2 gap-12 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6">
                  {techList.map((tech) => (
                    <div className="relative group " key={tech.title}>
                      <div className="opacity-70 group-hover:opacity-100 transition-all group-hover:scale-105 cursor-cell">
                        <p className="font-semibold text-xs md:text-base xl:text-xl">
                          {tech.title}
                        </p>
                        <img
                          src={tech.url}
                          width="160"
                          height="80"
                          alt="Logo"
                          className={`${
                            tech.className ?? ""
                          } aspect-[2/1] pt-2 relative overflow-hidden rounded-lg object-contain object-center invert dark:invert-0 transition `}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
