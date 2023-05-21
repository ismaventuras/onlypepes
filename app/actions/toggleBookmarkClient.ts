export default async function toggleBookmarkClient(pepeId: number) {
    const response = await fetch(
        '/api/bookmarks',
        {
            body: JSON.stringify({
                pepeId,
            }),
            headers: {
                'Content-Type': "application/json"
            },
            method: 'POST'
        })
    if (response.ok) return true
    else return false
}