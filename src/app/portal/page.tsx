import { Suspense } from "react";
import StarCountServer from "../components/StarCountServer";
import StarCountClient from "../components/StarCountClient";

export default async function Portal() {
  return (
    <main>
      <Suspense fallback={<p>Loading stars on server...</p>}>
        <StarCountServer repo={"facebook/react"} delay={2000} />
      </Suspense>

      <Suspense fallback={<p>Loading stars on server...</p>}>
        <StarCountServer repo={"vercel/next.js"} delay={3000} />
      </Suspense>

      <StarCountClient repo={"tailwindlabs/tailwindcss"} delay={4000} />
      
    </main>
  );
}
