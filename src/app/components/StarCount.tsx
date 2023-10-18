export default async function StarCounter(props: {repo: string, delay: number}) {
  await new Promise(r => setTimeout(r, 2000));
  const res = await fetch(`https://api.github.com/repos/${props.repo}`)
  const repo = await res.json()
  const stars = repo.stargazers_count
  
  return (
    <div className="">
      <p>{props.repo} has {stars} stars</p>
    </div>
  )
}
