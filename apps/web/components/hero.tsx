import Link from "next/link";
import {Badge} from "@ui/components/badge";
import TiltSquare from "@/components/forms/tiltSquare";
import {Suspense} from "react";
import SparklesCore from "@/components/effects/SparklesCore";

//"w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-800 h-min-screen relative"
export default function Hero() {
  return <section className="flex w-screen h-screen relative bg-gradient-to-b from-background to-pink-300 ">
      <Suspense>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.8}
          particleDensity={100}
          className="w-full h-full absolute"
          particleColor="#ff5c9a"
        />

      </Suspense>
      <div className="absolute top-0 left-0  right-0 bottom-0">

        <div className="absolute top-0 left-0  right-0 bottom-0">

          <TiltSquare className={"m-auto max-w-[600px]"}/>

        </div>
      </div>
    <div className="container px-4 md:px-6 ">

      <div className="container flex flex-col items-start space-y-4r z-30 transform">
      <div className="space-y-2">
          <Badge className={"py-0 my-2"}>
            <h1 className="text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-pink-500 p-4">
            MadVerse
          </h1></Badge>


          <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
            Experience joyful creation
          </h2>
        </div>

      </div>
    </div>
  </section>
}
