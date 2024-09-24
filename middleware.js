import {auth} from "@/app/_lib/auth"

export const middleware = auth
export const config = {
    matcher: ["/account/:path*",  "/masts/:path*", "/sails/:path*", "/boards/:path*",]
}