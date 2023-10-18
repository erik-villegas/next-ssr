export default async function StarCountServer(props: {repo: string, delay: number}) {
  await new Promise(r => setTimeout(r, props.delay));
  const res = await fetch(`https://api.github.com/repos/${props.repo}`)
  const repo = await res.json()
  const stars = repo.stargazers_count
  console.log(`repo: ${JSON.stringify(repo, null, 4)}`);
  
  
  return (
    <div className="">
      <p>{props.repo} has {stars} stars</p>
    </div>
  )
}
