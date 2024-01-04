import { motion, useScroll, useTransform } from 'framer-motion'
import {ReactElement} from "react";

export interface AnimatedFeatureCardProp {
  onClick: () => void;
  label: string;
  description: string;
  cta: string;
  background:  string;
  BGComponent: ReactElement
}
const AnimatedFeatureCard = ({
                onClick,
                label,
                description,
                cta,
                background,
                BGComponent,
              } : AnimatedFeatureCardProp) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: 'backInOut',
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className={`relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-8 ${background}`}
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white backdrop-blur">
          not ready
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: 'backInOut',
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          {label}
        </motion.span>
        <p className="text-lg">{description}</p>
      </div>
      <button
        onClick={() => {
          onClick()
        }}
        className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white"
      >
        {cta}
      </button>
      {BGComponent}
    </motion.div>
  )
}

export default AnimatedFeatureCard;
