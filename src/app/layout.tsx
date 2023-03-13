import './globals.css'

export const metadata = {
  title: 'Ergin',
  description: 'Personal portfolio of Ergin/Grainger',
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
