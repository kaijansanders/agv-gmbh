export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    linkedin: string
    twitter: string
    github: string
  }
}

export interface UserSubscriptionPlan {
  isPro: boolean
  isEnterprise: boolean
  name?: string
  stripeSubscriptionId?: string
}

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
}

export interface SidebarNavItem {
  title: string
  items: NavItem[]
  icon?: string
}

export interface MainNavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface MarketingConfig {
  mainNav: MainNavItem[]
}