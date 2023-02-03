import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    KeycloakProvider({
      clientId: 'otp-viewer',
      clientSecret: '9Jl0VwF1cAEsaU7ZHqb1LYaVocaFmNU2',
      issuer: 'http://localhost:8080/realms/demo',
    })
  ],
}
export default NextAuth(authOptions)

