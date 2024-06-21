import Link from "next/link";

type JobInsertionProps = {
    params: {
        jobinsertionId: string;
    };
};

const parseAndIncrementJobId = function generateStaticParams(actualJobId: string): string {
    return (parseInt(actualJobId) + 1).toString();
}
const parseAndDecrementJobId = function generateStaticParams(actualJobId: string): string {

    return (
        parseInt(actualJobId) > 1
            ? parseInt(actualJobId) - 1
            : 1
    ).toString();
}

export default function JobInsertionPage({ params: { jobinsertionId } }: JobInsertionProps) { // or ({ params}) {

    const incrementedJobId = parseAndIncrementJobId(jobinsertionId);
    const decrementedJobId = parseAndDecrementJobId(jobinsertionId);
    return (
        <div>
            <h1>Job Insertion Page #{jobinsertionId}</h1>
            <p>This is the Insertion #{jobinsertionId}, please click {" "}
                <Link href={"/job-insertions/" + incrementedJobId}>here</Link>
                {" if you'd like to see the next one. Otherwhise you can go back to the "}
                <Link href="/job-insertions">Job Insertions Page</Link>. {" "}
                If you want to go back to the previous one, click {" "}
                <Link href={"/job-insertions/" + decrementedJobId}>here</Link>.
            </p>
        </div>
    )
}
