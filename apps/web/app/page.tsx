import { Button } from "@ui/components/button";
import Link from "next/link"
import Footer from "@/components/footer";
import SiteHeader from "@/components/site-header";
import Hero from "@/components/hero";
import FeatureSection from "@/components/featureSection";
import FeatureItem from "@/components/featureItem";
import AnimatedFeatureCard from "@/components/animatedFeatureCard";
import {BackgroundB, BackgroundC, BackgroundA} from "@/components/forms/FeatureCardAnimated";
import { useRouter } from 'next/navigation'
import {Suspense} from "react";
import AppFeature from "@/app/components/appFeatures";
export default function Page() {
  return (
    <>
      <Test/>
    </>
  );
}

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MTi2wt6mlP1
 */

function Test() {

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <SiteHeader/>
      <main className="flex-1">
        <Hero/>
        <FeatureSection>
          <FeatureItem title={"Capture Attention"} tag={"Vibrant Design"} caption={"Vibrant and colorful, capturing attention and creating a sense of energy and excitement."}/>
          <FeatureItem title={"Inspire Creativity"} tag={"Abstract Elements"} caption={"Use abstract elements to inspire creativity and innovation, think outside the box."}/>
          <img
            alt="Vibrant Design"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
        </FeatureSection>
        <Suspense >
          <AppFeature />
        </Suspense>
      </main>
      <Footer/>
    </div>
  )
}

