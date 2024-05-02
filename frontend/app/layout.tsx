export const metadata = {
  title: 'Giasight',
  description: 'This is cute blog service',
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
