'use client'

import { useEffect, useState } from "react"

export default async function StarCountClient(props: {repo: string, delay: number}) {
  const [stars, setStars] = useState(0);

  async function fetchStars() {
    await new Promise(r => setTimeout(r, props.delay));
    // const res = await fetch(`https://api.github.com/repos/${props.repo}`)
    // const repo = await res.json()

    setStars(5)
  }

  useEffect(() => {
    fetchStars();
  })
  
  return (
    <div className="">
      {stars === 0 && <p>Loading stars on client...</p>}
      {stars > 0 && <p>{props.repo} has {stars} stars</p>}
    </div>
  )
}
