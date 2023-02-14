export async function GetGithubProjects () {
    const url = `https://api.github.com/users/skhati1/repos`
    const response = await fetch(url)
    const data = await response.json()
    const reposWithPages = data.filter(row => row.has_pages).map(r => { 
        return {
            name: r.name, 
            url: `https://skhati1.github.io/${r.name}`,
            description: r.description
        }
    })
    return reposWithPages
}
