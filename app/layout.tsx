import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const display = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-display' })

export const metadata: Metadata = {
  title: { default: 'Green Grass, Natural Grass, Lawn Grass & Turf - Delivered & Installed in Ghaziabad, Muradnagar, Noida, Delhi NCR, UP | SR Green Lawn', template: '%s | SR Green Lawn' },
  description: 'SR Green Lawn provides Green grass, Natural grass, Lawn grass, Turf, Playground grass, Park grass, Home lawn grass, garden landscaping and complete lawn installation in Ghaziabad, Muradnagar, Noida, Delhi NCR, Meerut, UP, All India',
 keywords: ['Green grass', 'Natural grass', 'Lawn grass', 'Turf', 'grass carpet', 'lawn installation', 'Ghaziabad grass supplier', 'Noida lawn service', 'Delhi NCR lawn', 'Muradnagar', 'Meerut','all india'],
  metadataBase: new URL('https://srgreenlawn.com'),
  verification: {
    google: "M1t_vnhKTnvIAdoV3kVwtYlRlINGMXOVx6GHXAGP3iY",
  },
  openGraph: { title: 'SR Green Lawn — Lush lawns. Healthy yards.', description: 'Natural grass supply, installation and landscaping across North India.', type: 'website', locale: 'en_IN' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#176b43', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-IN" className="bg-background"><body className={`${body.variable} ${display.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
