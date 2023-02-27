import './globals.css'

export const metadata = {
  title: '江夏的博客',
  description: '记录生活，记录你',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
