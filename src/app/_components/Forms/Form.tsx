import type { NextApiRequest, NextApiResponse } from 'next'
import Link from 'next/link';
import { useState } from "react";
import Label from "../Labels/Label";
import Button from "../Buttons/Button";

type FormProps = {
  className: string;
};


const Form: React.FC<FormProps> = ({ className }) => {
  const [name, setName] = useState("Name");
  const [surname, setSurname] = useState("Surname");
  const [id, setId] = useState(10);

  const submitHandler = (event: React.FormEvent) => {
    console.log("DEBUG: Form submitted");
  };

  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className="flex flex-col items-center px-0 py-5 gap-5 text-center
    bg-transparent rounded-lg
    border-x-indigo-500 border-y-indigo-500 border-2"
      onSubmit={submitHandler}>

      <div className="relative flex flex-col items-center">
        <input type="text" id="floating_input_outlined_name"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-3 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          onChange={(e) => setInput(e.target.value)}
        />
        <label htmlFor="floating_input_outlined_name"
          className="
            absolute text-sm
           text-gray-500 dark:text-gray-400
            duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]
            rounded-lg border-1 border-gray-300 dark:bg-slate-700
            px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          Email
        </label>
      </div>
      <div className="relative flex flex-col items-center">
        <input type="text" id="floating_input_outlined_name"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-3 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="floating_input_outlined_name"
          className="
            absolute text-sm
           text-gray-500 dark:text-gray-400
            duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]
            rounded-lg border-1 border-gray-300 dark:bg-slate-700
            px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
          Password
        </label>
      </div>
      <Button onClick={submitHandler}>LOGIN</Button>
      <Link href=""><em className="text-xs">forgotten password?</em></Link>
    </form>
  );
}

export default Form;