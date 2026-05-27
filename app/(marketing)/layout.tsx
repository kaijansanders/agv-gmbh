import { marketingConfig } from "@/config/marketing"
import { Header } from "@/components/marketing-header"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  )
}