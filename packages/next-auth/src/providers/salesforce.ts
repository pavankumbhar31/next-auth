import type { OAuthConfig, OAuthUserConfig } from "."

export interface SalesforceProfile extends Record<string, any> {
  sub: string
  nickname: string
  email: string
  picture: string
}

export default function Salesforce<P extends SalesforceProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  const { issuer = "https://login.salesforce.com" } = options
  return {
    id: "salesforce",
    name: "Salesforce",
    type: "oauth",
    authorization: `${issuer}/services/oauth2/authorize?display=page`,
    token: `${issuer}/services/oauth2/token`,
    userinfo: `${issuer}/services/oauth2/userinfo`,
    profile(profile) {
      return {
        id: profile.user_id,
        name: null,
        email: null,
        image: profile.picture,
      }
    },
    checks: ["none"],
    options,
  }
  providers: [
  SalesforceProvider({
    clientId: process.env.3MVG9l2zHsylwlpRQrFC86q7kioG8GkwDsrx1VtmJLoCCoI0VTf5A7VMlMtMVbp.y6lPXhubUppOzO9ES0ExN,
    clientSecret: process.env.B69EDC2D02A67BEFC2534F1DE90EABE47D430F8AB211B71E1395DD8A1EBAA955,
  })
]
}
