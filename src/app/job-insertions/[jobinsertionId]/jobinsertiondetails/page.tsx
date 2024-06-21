import { notFound } from 'next/navigation';

type JobInsertionProps = {
    params: {
        jobinsertionId: string;
    };
};

export default function JobInsertionDetailsPage({ params: { jobinsertionId } }: JobInsertionProps) {

    if (jobinsertionId === undefined)
        return notFound();

    if (parseInt(jobinsertionId) > 0)
        if (parseInt(jobinsertionId) > 10)
            return (
                <div>
                    <h1>{"404 - Job's Insertion not found"}</h1>
                    <p>{"Sorry, but the insertion you're looking for doesn't exist"}</p>
                </div>
            )

    return (

        <><h1>{"Job Insertion's details list"}</h1>
            <p>{"This is the details list of the job insertion."}</p>
        </>
    )
}