export default function Collection() {
    const name = "Games"

    if (!name) return <span>No collection selected</span>

    return <>
        <span>Collection {name}</span>
    </>
}