import { notFound } from 'next/navigation';
import { Metadata } from 'next'

type JobInsertionProps = {
    params: {
        jobinsertionId: string;
        title: string;
        description: string;
    };
};

export const generateMetadataAsync = async ({ params }: JobInsertionProps): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Job's Insertions details #${params.jobinsertionId}`)
        }, 100)
    })
    return {
        title: `Job's Insertions details #${title}`,
        description: `Job's Insertions details #${title}`,
    }
}

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