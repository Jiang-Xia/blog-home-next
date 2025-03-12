import Header from './components/header'
import './globals.css'
export const metadata = {
  title: '江夏的博客',
  description: '记录生活，记录你',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <html lang="en" className='dark'>
      <body>
          <Header/>
          {children}
      </body>
    </html>
  )
}
