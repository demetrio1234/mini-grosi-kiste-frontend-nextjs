"use client";

export default function Error({ error }: { error: Error }) {
    return (
        <div>
            <h1>{error.message}</h1>
        </div>
    );
}
