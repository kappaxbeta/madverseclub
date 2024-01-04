import {ReactElement} from "react";

export interface FeatureSectionProps {
    children: ReactElement
}
export default function FeatureSection({children}) {
  return <section className="w-full py-4 md:py-4 lg:py-8 bg-gray-100 dark:bg-gray-800">
    <div className="container px-4 md:px-6">
      <div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3 justify-center xl:m-auto"  style={{justifyContent:"center"}}>
        {children}
      </div>
    </div>
  </section>
}
