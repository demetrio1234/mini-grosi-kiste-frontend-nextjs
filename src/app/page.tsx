import Link from "next/link";

export default function HomePage() {

    return (
        <div>
            <h1>Home Page</h1>
            <p>Generated by Next.js</p>
            <Link href="/job-insertions">{"Job's insertions"}</Link>
        </div>
    )
}
