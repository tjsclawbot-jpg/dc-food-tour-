import './globals.css'

export const metadata = {
  title: 'DC Food Tour | Columbia Heights & U Street',
  description: 'A curated guided food tour through DC\'s best restaurants. Four stops, three courses, one unforgettable experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
