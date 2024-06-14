import * as React from "react"
const RatingIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="gray"
      fillRule="evenodd"
      d="M8 12.055 12.944 15l-1.312-5.55L16 5.716l-5.752-.482L8 0 5.752 5.234 0 5.716 4.368 9.45 3.056 15 8 12.055Z"
      clipRule="evenodd"
    />
  </svg>
)
export default RatingIcon
