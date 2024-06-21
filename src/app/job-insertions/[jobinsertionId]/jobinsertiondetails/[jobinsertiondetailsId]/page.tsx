import { notFound } from "next/navigation";

export const metadata = {
    title: `Job's Insertions details`,
    description: `Job's Insertions details`,
}

type JobInsertionDetailsPageProps = {
    params: {
        jobinsertionId: string;
        jobinsertiondetailsId: string;
    };
};

export default function JobInsertionDetailsPage({ params: { jobinsertionId, jobinsertiondetailsId } }: JobInsertionDetailsPageProps) {

    if (jobinsertionId === undefined || jobinsertiondetailsId === null)
        return notFound();

    if (parseInt(jobinsertionId) > 0 && parseInt(jobinsertiondetailsId) > 0) {

        if (parseInt(jobinsertionId) > 10)
            return (
                <div>
                    <h1>{"404 - Job's Insertion not found"}</h1>
                    <p>{"Sorry, but the insertion you're looking for doesn't exist"}</p>
                </div>
            )

        if (parseInt(jobinsertiondetailsId) > 10)
            return (
                <div>
                    <h1>{"404 - Job's Insertion Found"}</h1>
                    <p>{"Sorry, the job insertion's detail you are looking for does not exist."}</p>
                </div>
            )
    }

    return (
        <>
            <h1>{"Job Insertion's details list, detail #" + jobinsertiondetailsId}</h1>
            <p>{"Job insertion #" + jobinsertionId}</p>
            <p>{"Detail #" + jobinsertiondetailsId}</p>
        </>
    );
}