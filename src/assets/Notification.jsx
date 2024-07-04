import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill="#F7F7FF" />
    <path
      fill="#9B9FAB"
      d="M15.405 24.05a1.85 1.85 0 0 0 1.851-1.851h-3.702a1.85 1.85 0 0 0 1.851 1.851Zm5.554-5.554v-4.628c0-2.846-1.513-5.22-4.165-5.85v-.63c0-.768-.62-1.388-1.389-1.388-.768 0-1.388.62-1.388 1.388v.63c-2.652.63-4.166 3.004-4.166 5.85v4.628L8 20.347v.926h14.81v-.926l-1.851-1.85Z"
    />
    <circle cx={20} cy={10} r={3} fill="#fff" />
    <circle cx={20} cy={10} r={2} fill="#FF3D3D" />
  </svg>
)
export default SvgComponent