import * as React from "react"
const CopyIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={73}
    height={73}
    fill="none"
    {...props}
  >
    <rect width={73} height={73} fill="#4885FC" fillOpacity={0.1} rx={15} />
    <path
      fill="#4277FF"
      d="M37.385 29.875V22h-6.193c-.704 0-1.379.277-1.876.769a2.61 2.61 0 0 0-.777 1.856v19.25c0 .696.28 1.364.777 1.856a2.669 2.669 0 0 0 1.876.769h14.154c.704 0 1.379-.277 1.877-.769A2.61 2.61 0 0 0 48 43.875V32.5h-7.962a2.669 2.669 0 0 1-1.876-.769 2.61 2.61 0 0 1-.777-1.856Zm1.769 0v-7.438l8.404 8.313h-7.52a.89.89 0 0 1-.625-.256.87.87 0 0 1-.26-.619ZM25 27.25c0-.464.186-.91.518-1.237a1.78 1.78 0 0 1 1.251-.513v18.375c0 1.16.466 2.273 1.296 3.094a4.448 4.448 0 0 0 3.127 1.281h13.27c0 .464-.187.91-.519 1.237a1.78 1.78 0 0 1-1.25.513H31.276a6.312 6.312 0 0 1-4.438-1.819A6.175 6.175 0 0 1 25 43.791V27.25Z"
    />
  </svg>
)
export default CopyIcon
