import { Metadata } from "next"
import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <link rel="shortcut icon" href="https://btabcorp.com/btabcloud/uploads/2015/08/favicon.ico" type="image/x-icon"></link>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
