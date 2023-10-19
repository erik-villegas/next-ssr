import { Suspense } from "react";
import StarCount from "../components/StarCount";

export default async function Portal() {
  return (
    <main>
      <Suspense fallback={<p>Loading stars on server...</p>}>
        <StarCount repo={"facebook/react"} delay={2000} />
      </Suspense>

      <Suspense fallback={<p>Loading stars on server...</p>}>
        <StarCount repo={"tailwindlabs/tailwindcss"} delay={5000} />
      </Suspense>
      
    </main>
  );
}
