import { getToken } from "next-auth/jwt"
import { withAuth } from "next-auth/middleware"
import { NextResponse, NextRequest } from "next/server"

const LLMS_TXT = `# AGV GmbH
> Achim Guha Versand GmbH — a digital ventures holding company developing and operating platforms and online infrastructure across commerce, media, and emerging technologies. Based in Pullach im Isartal, Germany. Principal: Achim Guha.

> Note: AGV GmbH is the parent operating company for several digital projects, including Trustyfy (non-custodial banking infrastructure), bankless.living (consumer education for crypto-friendly banking), and AegisShield (AI-powered scam risk analysis). AGV is not a bank and does not hold customer funds.

## Company Sections
- [Projects](https://agvgmbh.com/projects): Portfolio of digital ventures operated by AGV GmbH.
- [Shop](https://agvgmbh.com/shop): Commerce arm — products and digital goods.
- [Resources](https://agvgmbh.com/resources): Frameworks, whitepapers, and educational content (including the Attention Magnet GEO whitepaper).
- [Blog](https://agvgmbh.com/blog): Insights, research, and updates from the AGV team.
- [Newsletter](https://agvgmbh.com/newsletter): Subscribe for periodic updates on AGV projects and research.
- [Contact](https://agvgmbh.com/contact): Get in touch with the AGV team.

## Operating Projects
- [Trustyfy](https://trustyfy.com): Non-custodial banking infrastructure — IBANs, Visa cards, multi-currency accounts routed through crypto-friendly partner banks. The flagship AGV venture.
- [Bankless Living](https://bankless.living): Consumer education site covering self-custody, crypto-friendly banking, stablecoin payments, and global account access.
- [AegisShield](https://aegisshield.io): AI-powered scam risk analysis and due diligence for crypto and Web3 projects.
- [Attention Magnet](https://aegisshield.io/attention-magnet): GEO (Generative Engine Optimization) framework and whitepaper for engineering AI discoverability.

## Legal
- [Imprint](https://agvgmbh.com/imprint): Impressum (legal entity, HRB 238008, VAT DE281345671).
- [Privacy](https://agvgmbh.com/privacy): Privacy policy.
- [Terms](https://agvgmbh.com/terms): Terms of service.

## Company Metadata
- Legal name: Achim Guha Versand GmbH
- Registration: HRB 238008 (Amtsgericht München)
- VAT: DE281345671
- Address: Wolfratshauser Str. 53, 82049 Pullach im Isartal, Germany
- Principal: Achim Guha (LinkedIn: linkedin.com/in/cryptoscout24, X: x.com/cryptoscout24)

## Code & Open Source
- [GitHub — agv-gmbh org](https://github.com/agv-gmbh): Open-source projects and engineering org.

## Optional
- [Sitemap](https://agvgmbh.com/sitemap.xml): Full URL list.
`

// Serve /llms.txt directly from middleware. This bypasses the app router
// entirely and is the most reliable way to ensure the file is served with
// the correct content-type at the conventional /llms.txt URL. The
// app/(marketing)/[...slug]/page.tsx catch-all was previously shadowing
// both the public/ folder file and the app router route handler.
function llmsTxtMiddleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/llms.txt") {
    return new NextResponse(LLMS_TXT, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    })
  }
  return NextResponse.next()
}

const authMiddleware = withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register")

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
      }

      return null
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }
  },
  {
    callbacks: {
      async authorized() {
        return true
      },
    },
  }
)

export default async function middleware(req: NextRequest, ev: any) {
  // Handle /llms.txt first — must beat the auth middleware so anonymous
  // LLM crawlers can read the file without a login.
  const llmsResponse = llmsTxtMiddleware(req)
  if (llmsResponse) return llmsResponse

  return authMiddleware(req, ev)
}

export const config = {
  matcher: [
    "/llms.txt",
    "/dashboard/:path*",
    "/editor/:path*",
    "/login",
    "/register",
  ],
}
