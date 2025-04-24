"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import exampleLyrics from "./exampleLyrics";
import * as motion from "motion/react-client";

export default function LyricsForm() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState(exampleLyrics);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(lyrics);
    setCopied(true);
    toast("Sözler kopyalandı.");
  };
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLyrics("");
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      if (!res.ok)
        throw new Error(
          "Üzgünüz, bu şarkının sözleri bulunamadı.\nLütfen sanatçı ve şarkı adını kontrol edin."
        );
      const data = await res.json();
      setLyrics(data.lyrics);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Bilinmeyen bir hata oluştu.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center antialiased bg-grid-white/[0.02] relative ">
      <section className="lg:border-l border-dashed lg:border-r  ">
        <div className="md:grid-cols-2 border-dashed mx-auto relative z-10 md:pt-0">
          <div className="container">
            <div className="xl:grid  items-start gap-8 lg:grid-cols-2 relative ">
              <div className="lg:border-r border-dashed h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    scale: {
                      type: "spring",
                      visualDuration: 0.4,
                      bounce: 0.5,
                    },
                  }}
                >
                  <div className="lg:mb-24 md:w-3xl mt-8 select-none ">
                    <h1 className="text-4xl p-4 md:text-7xl font-bold text-center bg-clip-text dark:text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      LyricLab
                    </h1>

                    <div className="mt-4 font-semibold px-4 md:px-0 dark:text-neutral-300 max-w-xl text-center mx-auto">
                      <blockquote className="italic text-muted-foreground">
                        Bazen bir şarkının sözünü bulmak, staj başvurusundan
                        bile zor olabiliyor... <br />
                        İşte bu site tam da bunun için doğdu!
                      </blockquote>
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 lg:px-0 px-4 max-w-md mx-auto my-10"
                  >
                    {/* Artist Input */}
                    <div className="transition-all duration-300 overflow-hidden grid gap-2">
                      <Label htmlFor="artist">Sanatçı adı girin</Label>
                      <Input
                        autoComplete="off"
                        id="artist"
                        placeholder=""
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                      />
                    </div>

                    {/* Song Input */}
                    <div
                      className={`transition-all duration-300 overflow-hidden   ${
                        artist
                          ? "max-h-40 opacity-100 scale-100"
                          : "max-h-0 opacity-0 scale-95"
                      }`}
                    >
                      <Label htmlFor="song">Şarkı adı girin</Label>
                      <Input
                        autoComplete="off"
                        id="song"
                        placeholder=""
                        value={song}
                        onChange={(e) => setSong(e.target.value)}
                        className="mt-2"
                      />
                    </div>

                    {/* Search Button */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        song && artist
                          ? "max-h-40 opacity-100 scale-100"
                          : "max-h-0 opacity-0 scale-95"
                      }`}
                    >
                      <Button
                        type="submit"
                        className="w-full mt-4 focus:outline-none focus:ring-0 focus:ring-offset-0"
                        disabled={loading}
                      >
                        {loading ? "Yükleniyor..." : "Şarkı sözü arayın"}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              </div>
              <ScrollArea
                className="border-t lg:border-t-0 lg:border-l border-dashed
                px-4 
                h-[48rem] 
                overflow-y-auto
                whitespace-pre-wrap text-left transition-all  duration-300 
              "
              >
                <div>
                  <div className="flex py-2 justify-between">
                    <h4 className=" font-medium my-auto text-xl ">Sözler</h4>
                    <Button
                      variant="outline"
                      className=""
                      size="icon"
                      onClick={handleClick}
                    >
                      {copied ? <Check /> : <Copy />}
                    </Button>
                  </div>
                  <Separator />
                  <div>
                    {error && (
                      <p className="text-red-500 py-6 text-wrap font-semibold italic text-base md:text-2xl ">
                        {error}
                      </p>
                    )}
                    {lyrics && (
                      <TextGenerateEffect
                        duration={0.6}
                        speed={12}
                        className="
                        py-2
                        pb-6
                        tracking-tighter
                        text-wrap
                        font-bold
                        md:text-xl"
                        words={lyrics}
                      />
                    )}
                  </div>
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
