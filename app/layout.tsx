import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body' })
const display = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-display' })

export const metadata: Metadata = {
  title: { default: 'SR Green Lawn | Natural Grass & Lawn Installation', template: '%s | SR Green Lawn' },
  description: 'SR Green Lawn supplies and installs premium natural grass, lawn carpet and landscaping across Delhi NCR, Ghaziabad, Noida, Uttar Pradesh, Rajasthan, Punjab, Haryana and nearby areas.',
  keywords: ['natural grass','lawn grass','grass carpet','lawn installation','landscaping near me','Delhi NCR lawn','Ghaziabad grass supplier','Noida lawn service','SR Green Lawn'],
  metadataBase: new URL('https://srgreenlawn.com'),
  verification: {
    google: "M1T_vnhKTnvlAdoV3kWvtYIRIINGHX0VxGGHXAGP3IY",
  },
  openGraph: { title: 'SR Green Lawn — Lush lawns. Healthy yards.', description: 'Natural grass supply, installation and landscaping across North India.', type: 'website', locale: 'en_IN' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#176b43', userScalable: true }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-IN" className="bg-background"><body className={`${body.variable} ${display.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
