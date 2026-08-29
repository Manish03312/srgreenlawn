import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const display = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-display' })

export const metadata: Metadata = {
  metadataBase: new URL('https://srgreenlawn.com'),
  title: { default: 'Green Grass, Natural Grass, Lawn Grass & Turf - Delivered & Installed in Ghaziabad, Muradnagar, Noida, Delhi NCR, UP | SR Green Lawn', template: '%s | SR Green Lawn' },
  description: 'SR Green Lawn provides Green grass, Natural grass, Lawn grass, Turf, Playground grass, Park grass, Home lawn grass, garden landscaping and complete lawn installation in Ghaziabad, Muradnagar, Noida, Delhi NCR, Meerut, UP, All India',
  keywords: ['Green grass', 'Natural grass', 'Lawn grass', 'Turf', 'grass carpet', 'lawn installation', 'Ghaziabad grass supplier', 'Noida lawn service', 'Delhi NCR lawn', 'Muradnagar', 'Meerut'],
  verification: {
    google: 'bZU1uromYlHGa-h1B_UpkjJJixTAZ1_je1AvnwBdVS8',
  },
  openGraph: {
    title: 'SR Green Lawn - Lush lawns. Healthy yards.',
    description: 'Natural grass supply, installation and landscaping across North India.',
    url: 'https://srgreenlawn.com',
    siteName: 'SR Green Lawn',
    locale: 'en_IN',
    type: 'website',
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#176d43', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-IN" className="bg-background"><body className={`${body.variable} ${display.variable} font-body antialiased`}>{children}<Analytics /></body></html> }
