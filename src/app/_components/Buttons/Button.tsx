import { ButtonHTMLAttributes, DetailedHTMLProps, FC, forwardRef } from "react";
import React from "react";
import { useState } from "react";

type variation = "primary" | "highlight" | "light";

const Button = forwardRef<
    HTMLButtonElement,
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > & { variation?: variation; disabled?: boolean }
>(({ children, className, variation = "primary", disabled, ...props }, ref) => (
    <button
        ref={ref}
        className={`bg-blue-500 hover:bg-blue-700 text-white
            font-bold 
            py-2 px-4 rounded`}
        disabled={disabled}
        {...props}
    >
        {children}
    </button>
));
Button.displayName = "Button";

export default Button;


/*
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked");
};

<button className="
            bg-blue-500 hover:bg-blue-700 text-white
            font-bold 
            py-2 px-4 rounded"
            onClick={handleClick}>
            Button
        </button>
    );
));

*/