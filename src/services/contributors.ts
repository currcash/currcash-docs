export default async function getContributors(): Promise<Response | undefined> {
  const GH_TOKEN: string = import.meta.env.GH_TOKEN
  const BASE_URI: string = 'https://api.github.com'
  const ORG_NAME: string = 'currcash'
  const URI: string = `${BASE_URI}/orgs/${ORG_NAME}/members`

  try {
    const res: Response = await fetch(URI, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${GH_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then((res: Response) => res.json())

    return res
  } catch (err: any) {
    console.error(err)
  }
}
