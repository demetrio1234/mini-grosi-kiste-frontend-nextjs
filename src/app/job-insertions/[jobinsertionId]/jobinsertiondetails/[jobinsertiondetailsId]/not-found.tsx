import { notFound } from 'next/navigation';
import JobInsertionDetailsPage from '../page';

type JobInserttionsDetailProps = {
    jobinsertionId: string;
    jobinsertiondetailsId: string;
};

export default function JobInsertionDetailNotFound(params: JobInserttionsDetailProps) {

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>{"Sorry, the job insertion's detail you are looking for does not exist."}</p>
        </div>
    )
}