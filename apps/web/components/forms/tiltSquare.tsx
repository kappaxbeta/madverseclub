export default function TiltSquare(props) {
  return <svg

  xmlns = "http://www.w3.org/2000/svg"
  preserveAspectRatio="none" viewBox="0 0 600 600"
  {...props}>
    < defs >
    <radialGradient
  cy = "0.5"
  cx = "0.5"
  r = "1.04219"
  spreadMethod = "pad"
  id = "svg_5">
    <stop
  offset = "0"
  stopColor = "#ff5c9a" />
    <stop
  offset = "1"
  stopOpacity = "0.99219"
  stopColor = "#ffffff" />
    </radialGradient>
  <radialGradient cy="0.5" cx="0.5" r="1.04219" spreadMethod="pad" id="svg_6">
    <stop offset="0" stopOpacity="0.99219" stopColor="#ffffff"/>
    <stop offset="1" stopColor="#ff5c9a"/>
  </radialGradient>
</defs>
  <g transform={"rotate(45)"}>
    <title>Layer 1</title>
    <g id="svg_7">

      <rect strokeWidth="0" stroke="#000" id="svg_1" height="300" width="300"
            y="-150" x="300" fill="url(#svg_5)"/>
      <rect strokeWidth="0" stroke="#000" id="svg_1" height="250" width="250"
            y="-125" x="325" fill="url(#svg_6)"/>

    </g>
  </g>
  </svg>
}
