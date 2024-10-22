"use client";
import React from "react";
import Link from "next/link";
import Form from "../Form";

const Login: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-500 rounded-md min-h-20">
            <div className="flex-col h-auto bg-slate-700 px-5 pt-5 pb-10 rounded-md  min-h-20">
                <h1 className="mb-5 text-2xl font-bold text-center">
                    Login Page
                </h1>
                <Form className="" />
                <Link href="/">JOB INSERTIONS</Link>
            </div>
        </div>
    );
}

export default Login;