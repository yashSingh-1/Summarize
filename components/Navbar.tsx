import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { getKindeServerSession, LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowRight } from "lucide-react"

const Navbar = async () => {
    const {isAuthenticated} = getKindeServerSession();
const isUserAuthenticated = await isAuthenticated();
// console.log(isUserAuthenticated)
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30
     w-full birder-b border-gray-200 bg-white/75 
     backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-zinc-100 border-b">
                <Link href="/" className="flex z-40 font-semibold ">
                    <span>summarize.</span>
                </Link>
                {/** Add mobile navbar */}
                <div className="hidden items-center space-x-4 sm:flex">
                    <>
                        <Link href="/pricing" className={buttonVariants({variant: 'ghost', size: 'sm'} )}>
                            Pricing
                        </Link>
                        { !isUserAuthenticated && <LoginLink className={buttonVariants({variant: 'ghost', size: 'sm'} )}>
                            Sign in
                        </LoginLink>
                        }
                        <RegisterLink className={buttonVariants({ size: 'sm'} )}>
                            Get Started <ArrowRight className="ml-1.5 h-4 w-4 " />
                        </RegisterLink>
                    </>
                </div>
            </div>
        </MaxWidthWrapper>
     </nav>
  )
}

export default Navbar