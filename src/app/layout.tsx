import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VoxHub - Connect. Chat. Talk.',
  description: 'Premium communication platform with real-time chat, groups, and file sharing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster 
            position="bottom-right" 
            theme="dark"
            toastOptions={{
              style: {
                background: '#0F172A',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#f1f5f9',
              }
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
