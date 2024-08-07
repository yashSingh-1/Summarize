

import { useRouter, useSearchParams } from "next/navigation"
import { trpc } from "../_trpc/client";

const page = async () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

   const {data, isLoading} = trpc.authCallback.useQuery();

   if(data?.success){
    router.push(origin ? `/${origin}` : "/dashboard")
   }
    
  // return (
  //   <div>page</div>
  // )
}

export default page