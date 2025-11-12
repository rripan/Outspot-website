import '../globals.css'

export const metadata = {
  title: 'OutSpot',
  description: 'Spot and be Spotted',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  )
}
