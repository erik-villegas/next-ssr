import { Suspense } from "react";
import StarCounter from "../components/StarCount";


function Loading() {
  return <h1>Server component loading!</h1>
}

export default async function Portal() {
  
  return (
    <main>
      <Suspense fallback={<p>Loading stars...</p>}>
        <StarCounter repo={'facebook/react'} delay={2000}/>
      </Suspense>

      <Suspense fallback={<p>Loading stars...</p>}>
      <StarCounter repo={'vercel/next.js'} delay={3000}/>
      </Suspense>

      <Suspense fallback={<p>Loading stars...</p>}>
        <StarCounter repo={'tailwindlabs/tailwindcss'} delay={4000}/>
      </Suspense>

        
        
    </main>
  )
}
