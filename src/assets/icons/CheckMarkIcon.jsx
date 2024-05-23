import * as React from "react"
const CheckMarkIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <circle cx={11} cy={11} r={10.5} stroke="#fff" strokeOpacity={0.1} />
    <path
      fill="#77BE1D"
      fillRule="evenodd"
      d="M9.584 11.965 14.498 7 16 8.518 9.584 15 6 11.38l1.502-1.518 2.082 2.103Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CheckMarkIcon
