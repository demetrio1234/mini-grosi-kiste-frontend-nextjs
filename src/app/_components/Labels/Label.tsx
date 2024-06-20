import { useState } from "react";

type LabelProps = {
    children: React.ReactNode;
    htmlFor: string;
};

const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
    return (
        <label htmlFor={htmlFor} className="text-slate-600">
            {children}
        </label>
    );
};

export default Label;