import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext';
import { DeviceProvider } from './context/DeviceContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chinmay | Portfolio',
  description: 'My personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <DeviceProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>  
        </DeviceProvider>
      </body>
    </html>
  );
}
