import Link from "next/link"

const getSection = (slug: string[] | undefined | null) => {

    if (slug === undefined || slug === null) return "Docs Home Page"

    if (slug.length === 0 || slug.length === 1 && slug[0] === "docs") {
        return "Docs Home Page"
    }
    return `Docs page ${slug.join('/')}`
}

export default function SlugPage({ params }: { params: { slug: string[] | undefined | null } }) {
    return (
        <div>
            <h1>Slug Page</h1>
            <p>{getSection(params.slug)}            </p>
        </div>
    )
}

/* 
            <h1>Slug Page #{params.slug.join('/')}</h1>
            <p>This is the Slug Page #{params.slug.join('/')}, please click {" "}
                <Link href={"/docs/" + params.slug.join('/') + "/page"}>here</Link>
                {" if you'd like to see the next one. Otherwhise you can go back to the "}
                <Link href="/docs">Docs Page</Link>. {" "}
                If you want to go back to the previous one, click {" "}
                <Link href={"/docs/" + params.slug.slice(0, -1).join('/') + "/page"}>here</Link>.
            </p>
*/