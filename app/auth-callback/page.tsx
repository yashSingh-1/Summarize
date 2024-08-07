"use client"

import { redirect, useRouter, useSearchParams } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import { SyncData } from '@/db/SyncDataWithKinde'

const Page = async (params :any) => {
  console.log("Params",params)
  const realOrigin = params.searchParams.origin;
  console.log("realOrigin",realOrigin)

  // const router = useRouter()

  // const searchParams = useSearchParams()
  // const origin = searchParams.get('origin')
  // console.log("Origin here",origin)

  const success = await SyncData();
  console.log("Daat",success)



  if(success?.success === true){
    redirect(`/${realOrigin}`)
  }  
  
  if(success?.msg == "User already there"){
    redirect(`/${realOrigin}`)
  }

  
  return (
    <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='h-8 w-8 animate-spin text-zinc-800' />
        <h3 className='font-semibold text-xl'>
          Setting up your account...
        </h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  )
}

export default Page