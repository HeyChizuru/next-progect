import "@/app/ui/global.css"
import { inter } from "@/app/ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;//react组件
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
