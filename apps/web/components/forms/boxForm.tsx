export default function BoxForm(props) {
  return <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none" viewBox="0 0 800 600" {...props}>
    <defs>
      <radialGradient cy="0.5" cx="0.5" r="1.04219" spreadMethod="pad" id="svg_5">
        <stop offset="0" stopColor="#ff5c9a"/>
        <stop offset="1" stopOpacity="0.99219" stopColor="#ffffff"/>
      </radialGradient>
      <radialGradient cy="0.5" cx="0.5" r="1.04219" spreadMethod="pad" id="svg_6">
        <stop offset="0" stopOpacity="0.99219" stopColor="#ffffff"/>
        <stop offset="1" stopColor="#ff5c9a"/>
      </radialGradient>
      <radialGradient id="svg_16" spreadMethod="pad" r="1.17509"
                      gradientTransform="rotate(-11.999999999999996,0.5,0.5) translate(0,0.125) scale(1,0.75)" fx="0.5"
                      fy="0.5">
        <stop stopColor="#ff5c9a" stopOpacity="0.99219" offset="0"/>
        <stop stopColor="#ffffff" stopOpacity="0.99609" offset="1"/>
      </radialGradient>
    </defs>
    <g>
      <title>Layer 1</title>

      <g id="svg_17">
        <rect transform="rotate(45 178.755 347.401)" fill="url(#svg_16)" strokeWidth={"0"} stroke="#fff" x="78.75563" y="247.40104" width="200"
              height="200" id="svg_11"/>
        <path transform="rotate(45 179.179 213.031)" fill="url(#svg_16)" opacity="undefined"
              d="m79.17871,113.03108l200,0l0,200l-200,0l0,-200z" id="svg_12" stroke="#fff"/>
        <line fill="none" stroke="#fff" x1="37.71717" y1="212.64646" x2="37.71717" y2="347.64646" id="svg_13"/>
        <line fill="none" stroke="#fff" x1="320.66159" y1="213.47979" x2="319.66159" y2="348.47979" id="svg_14"/>
        <path fill="none" opacity="undefined" d="m179.5267,355.31313l0,131.80952" id="svg_15" stroke="#fff"/>
      </g>
    </g>
  </svg>
}
