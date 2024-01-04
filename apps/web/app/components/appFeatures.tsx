"use client"

import FeatureSection from "@/components/featureSection";
import AnimatedFeatureCard from "@/components/animatedFeatureCard";
import {BackgroundA, BackgroundB, BackgroundC} from "@/components/forms/FeatureCardAnimated";
import {useRouter} from "next/navigation";

export default function AppFeature() {
  const { push } = useRouter()
  return  <FeatureSection>
    <AnimatedFeatureCard
      onClick={() => {
        push('https://entropy.madverse.club')
      }}
      label="Entropy"
      description="Maybe a social network?"
      cta="Currently PLaceholder"
      background="bg-indigo-500"
      BGComponent={<BackgroundA />}
    />
    <AnimatedFeatureCard
      onClick={() => {
        push('https://prism.madverse.club')
      }}
      label="Prism"
      description="Shop"
      cta="Other Placeholder"
      background="bg-purple-500"
      BGComponent={<BackgroundB />}
    />
    <AnimatedFeatureCard
      onClick={() => {
        push('https://xd.madverse.club')
      }}
      label="XD"
      description="Content Studio Framework "
      cta="Under Development"
      background="bg-pink-500"
      BGComponent={<BackgroundC />}
    />
  </FeatureSection>
}
